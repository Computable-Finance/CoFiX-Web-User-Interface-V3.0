import BigNumber from 'bignumber.js'
import { BigNumberish } from 'ethers'
import { CoFiXPair as TypeCoFiXPair, CoFiXPair__factory } from 'src/abis/types/cofix'

import API from '.'
import { toBigNumber } from '../util'
import ERC20Token, { ERC20TokenProps } from './ERC20Token'
import Token from './Token'

export type PoolInfo = {
  totalFunds: BigNumber
  amounts: Array<BigNumber>
  formatAmounts: Array<string>
  nav: BigNumber
  miningSpeed: number

  emptyLiquidity: boolean
  myPoolRatio: string
  myPoolAmounts: Array<string>
  xtokenTotalSupply: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }
  xtokenBalance: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  },
  k: BigNumber
  tokenAmount: BigNumber
}

export type StakeInfo = {
  xTokenInPool: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }
  dailyMined: BigNumber
  stakedXToken: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }
  stakedRatio: string
}

export type CoFiXPairProps = ERC20TokenProps & {
  pair: [string, string]

  cofiAmountPerBlock: number
  cofiRewardPercentage: number
}

class CoFiXPair extends ERC20Token {
  contract?: TypeCoFiXPair

  pair: [Token, Token]
  cofiAmountPerBlock: number
  cofiRewardPercentage: number

  poolInfo?: PoolInfo

  theta = toBigNumber(20)
  impactCostVOL = toBigNumber(1)

  constructor(api: API, props: CoFiXPairProps) {
    super(api, {
      isXToken: true,
      ...props,
    })

    if (this.address && this.api.provider) {
      this.contract = CoFiXPair__factory.connect(this.address, this.api.provider?.getSigner() || this.api.provider)
    }

    this.pair = [api.Tokens[props.pair[0]], api.Tokens[props.pair[1]]]
    this.cofiAmountPerBlock = props.cofiAmountPerBlock
    this.cofiRewardPercentage = props.cofiRewardPercentage
    this.api.Tokens[this.symbol] = this
  }

  async init() {
    super.init()

    if (!this.contract) {
      return
    }

    const config = await this.contract.getConfig();
    this.theta = toBigNumber(config.theta)
    this.impactCostVOL = toBigNumber(config.impactCostVOL)
  }

  async getPoolInfo(): Promise<PoolInfo | undefined> {
    if (!this.address || !this.contract) {
      return
    }

    const tokens = [this.api.Tokens[this.pair[0].symbol], this.api.Tokens[this.pair[1].symbol]]

    const { k, tokenAmount } = await this.api.Tokens[this.pair[1].symbol].queryOracle()

    const [balances, ethAmounts, usdtAmounts, pairBalance, pairTotalSupply] =
      await Promise.all([
        Promise.all([tokens[0].balanceOf(this.address), tokens[1].balanceOf(this.address)]),
        Promise.all([tokens[0].getValuePerETH(), tokens[1].getValuePerETH()]),
        Promise.all([tokens[0].getUSDTAmount(), tokens[1].getUSDTAmount()]),

        this.balanceOf(this.api.account || ''),
        this.totalSupply(),
      ])

    const amounts = [tokens[0].amount(balances[0] || 0), tokens[1].amount(balances[1] || 0)]
    const formatAmounts = [
      tokens[0].format(tokens[0].amount(balances[0] || 0)),
      tokens[1].format(tokens[1].amount(balances[1] || 0)),
    ]

    if (!ethAmounts[0] || !ethAmounts[1] || !usdtAmounts[0] || !usdtAmounts[1]) {
      return
    }

    const totalFunds = amounts[0].multipliedBy(usdtAmounts[0]).plus(amounts[1].multipliedBy(usdtAmounts[1]))

    let nav = new BigNumber(1)
    if (!totalFunds.isZero()) {
      const navPerShare = await this.contract.getNAVPerShare(ethAmounts[0].toFixed(0), ethAmounts[1].toFixed(0))

      nav = new BigNumber(navPerShare.toString()).div(new BigNumber(10).pow(18))
    }

    const myPoolRatio = new BigNumber(0)
    const myPoolAmounts = ['0.0', '0.0']

    this.poolInfo = {
      totalFunds,
      amounts,
      formatAmounts,
      nav,
      miningSpeed: toBigNumber(this.cofiAmountPerBlock).toNumber(),

      emptyLiquidity: myPoolRatio.isZero(),
      myPoolRatio: `${myPoolRatio.multipliedBy(100).toFixed(2)} %`,
      myPoolAmounts,
      xtokenBalance: {
        value: pairBalance,
        amount: pairBalance.div(new BigNumber(10).pow(18)),
        formatAmount: pairBalance.div(new BigNumber(10).pow(18)).toString(),
      },
      xtokenTotalSupply: {
        value: pairTotalSupply,
        amount: pairTotalSupply.div(new BigNumber(10).pow(18)),
        formatAmount: pairTotalSupply.div(new BigNumber(10).pow(18)).toString(),
      },
      k, tokenAmount,
    }

    return this.poolInfo
  }

  async swap(src: string, dest: string, amount: BigNumber | BigNumberish) {
    if (!this.impactCostVOL) {
      throw new Error(`cofix pair ${this.symbol} not init`)
    }

    if (!this.contract) {
      throw new Error(`cofix pair ${this.symbol} not found`)
    }

    if (!this.api.chainId) {
      throw new Error(`cofix pair ${this.symbol} not found`)
    }

    const { k, tokenAmount } = await this.api.Tokens[this.pair[1].symbol].queryOracle()
    const amountIn = toBigNumber(amount)
    if (src === 'USDT' && dest === this.pair[0].symbol) {
      const fee = amountIn.multipliedBy(this.theta).div(10000)
      const c = toBigNumber(
        await this.contract.impactCostForSellOutETH(this.api.Tokens.ETH.parse(amountIn).toFixed(0))
      ).shiftedBy(-18)
      const amountOut = amountIn.minus(fee).multipliedBy(tokenAmount).div(2000).div(toBigNumber(1).plus(k).plus(c))
      console.log(amountIn.multipliedBy(tokenAmount).div(2000).toString(), amountOut.toString())
      return {
        fee: {
          symbol: 'ETH',
          amount: fee,
        },
        oracleOut: amountIn.multipliedBy(tokenAmount).div(2000),
        amountOut: amountOut,
        oracleFee: toBigNumber(0.005),
      }

    } else if (src === this.pair[0].symbol && dest === 'USDT') {
      let amountOut = amountIn.div(tokenAmount).multipliedBy(2000)
      const c = toBigNumber(
        await this.contract.impactCostForBuyInETH(this.api.Tokens.ETH.parse(amountOut).toFixed(0))
      ).shiftedBy(-18)
      amountOut = amountOut.div(toBigNumber(1).plus(k).plus(c))
      const fee = amountOut.multipliedBy(this.theta).div(10000)
      amountOut = amountOut.minus(fee)
      return {
        fee: {
          symbol: 'ETH',
          amount: fee,
        },
        oracleOut: amountIn.div(tokenAmount).multipliedBy(2000),
        amountOut: amountOut,
        oracleFee: toBigNumber(0.005),
      }
    } else {
      throw new Error(`can not swap ${src} to ${dest}`)
    }
  }
}

export default CoFiXPair
