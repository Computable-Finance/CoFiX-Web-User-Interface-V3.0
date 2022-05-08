import BigNumber from 'bignumber.js'
import { BigNumberish } from 'ethers'
import { CoFiXPair as TypeCoFiXPair, CoFiXPair__factory } from 'src/abis/types'

import API from './index'
import { toBigNumber } from '../utils/util'
import ERC20Token, { ERC20TokenProps } from './ERC20Token'
import Token from './Token'
import {BSC} from "../constants/chains";

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
  }
  k: BigNumber
  tokenAmount: BigNumber
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

    const config = await this.contract.getConfig()
    this.theta = toBigNumber(config.theta)
    this.impactCostVOL = toBigNumber(config.impactCostVOL)
  }

  async getPoolInfo(): Promise<PoolInfo | undefined> {
    if (!this.address || !this.contract) {
      return
    }

    const tokens = [this.api.Tokens[this.pair[0].symbol], this.api.Tokens[this.pair[1].symbol]]

    const { k, tokenAmount } = await this.queryOracle()

    const [balances, pairBalance, pairTotalSupply] = await Promise.all([
      Promise.all([tokens[0].balanceOf(this.address), tokens[1].balanceOf(this.address)]),
      this.balanceOf(this.api.account || ''),
      this.totalSupply(),
    ])

    const amounts = [tokens[0].amount(balances[0] || 0), tokens[1].amount(balances[1] || 0)]
    const formatAmounts = [
      tokens[0].format(tokens[0].amount(balances[0] || 0)),
      tokens[1].format(tokens[1].amount(balances[1] || 0)),
    ]

    const swapInfo = await this.api.getSwapInfo('NEST', 'USDT', toBigNumber('1'))

    if (!swapInfo?.amountOut) {
      return
    }

    const totalFunds = amounts[0].multipliedBy(swapInfo?.amountOut).plus(amounts[1].multipliedBy(1))

    let nav = new BigNumber(1)
    if (!pairTotalSupply.isZero()) {
      nav = totalFunds.shiftedBy(18).div(pairTotalSupply)
    }

    let myPoolRatio = new BigNumber(0)
    let myPoolAmounts = ['0.0', '0.0']
    if (!pairTotalSupply.isZero()) {
      myPoolRatio = pairBalance.div(pairTotalSupply)
      myPoolAmounts = [
        tokens[0].format(amounts[0].multipliedBy(myPoolRatio)),
        tokens[1].format(amounts[1].multipliedBy(myPoolRatio)),
      ]
    }

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
      k,
      tokenAmount,
    }

    return this.poolInfo
  }

  async queryOracle() {
    if (
      !this.address ||
      !this.api.Contracts.NestPriceFacade.contract ||
      !this.api.CoFiXPairs[this.pair[0].symbol][this.pair[1].symbol].contract
    ) {
      return {
        k: toBigNumber(0),
        tokenAmount: this.amount(await this.getValuePerETH()),
      }
    }

    try {
      const priceInfo = await this.api.Contracts.NestPriceFacade.contract[
        'lastPriceList(uint256,uint256,uint256)'
      ](0, 1, 2)

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const k = await this.api.CoFiXPairs[this.pair[0].symbol][this.pair[1].symbol].contract.calcRevisedK(
        priceInfo[3],
        priceInfo[2],
        priceInfo[1],
        priceInfo[0]
      )

      return {
        k: toBigNumber(k).shiftedBy(-18),
        tokenAmount: this.amount(priceInfo[1]),
      }
    } catch (e) {
      return {
        k: toBigNumber(0),
        tokenAmount: this.amount(await this.getValuePerETH()),
      }
    }
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

    const { k, tokenAmount } = await this.queryOracle()
    const amountIn = toBigNumber(amount)
    if (src === 'USDT' && dest === this.pair[0].symbol) {
      const fee = amountIn.multipliedBy(this.theta).div(10000)
      const c = toBigNumber(
        await this.contract.impactCostForSellOutETH(this.api.Tokens.ETH.parse(amountIn).toFixed(0))
      ).shiftedBy(-18)
      const amountOut = amountIn.minus(fee).multipliedBy(tokenAmount).div(2000).div(toBigNumber(1).plus(k).plus(c))
      return {
        fee: {
          symbol: 'ETH',
          amount: fee,
        },
        oracleOut: amountIn.multipliedBy(tokenAmount).div(2000),
        amountOut: amountOut,
        oracleFee: toBigNumber(this.api.chainId === BSC.chainId ? 0 : 0.0002),
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
        oracleFee: toBigNumber(this.api.chainId === BSC.chainId ? 0 : 0.0002),
      }
    } else {
      throw new Error(`can not swap ${src} to ${dest}`)
    }
  }
}

export default CoFiXPair
