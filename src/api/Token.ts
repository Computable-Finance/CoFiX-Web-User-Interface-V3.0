import BigNumber from 'bignumber.js'
import { BigNumberish } from 'ethers'
import API from './index'
import Contract, { ContractProps } from './Contract'
import { formatNumber, toBigNumber } from '../utils/util'
import { TokenETH } from 'src/components/Icon'

export type TokenProps = ContractProps & {
  symbol: string
  Icon: typeof TokenETH
  decimals?: number
  formatPrecision?: number
  isXToken?: boolean
  priceInfo?: Record<number, {
    channelId: number,
    pairIndex: number,
  }>
}

export type SwapInfo = {
  oracleValuePerETH: BigNumber
  oracleETHValue: BigNumber
  oracleETHAmount: BigNumber

  finalValuePerETH: BigNumber
  finalETHValue: BigNumber
  finalETHAmount: BigNumber

  vol: BigNumber
  ethVol: BigNumber
  k: BigNumber
  c: BigNumber
}

abstract class Token extends Contract {
  symbol: TokenProps['symbol']
  Icon: TokenProps['Icon']
  decimals: number
  formatPrecision: TokenProps['formatPrecision']
  isXToken: boolean
  cofiAmountPerBlock?: number
  channelId?: number
  pairIndex?: number

  constructor(api: API, props: TokenProps) {
    super(api, props)

    this.symbol = props.symbol
    this.Icon = props.Icon
    this.decimals = props.decimals || 18
    this.formatPrecision = props.formatPrecision
    this.isXToken = !!props.isXToken
    this.channelId = props.priceInfo && api.chainId ? props.priceInfo[api.chainId].channelId : undefined
    this.pairIndex = props.priceInfo && api.chainId ? props.priceInfo[api.chainId].pairIndex : undefined
  }

  amount(n: BigNumber | BigNumberish) {
    return toBigNumber(n).shiftedBy(-this.decimals)
  }

  parse(n: BigNumber | BigNumberish) {
    return toBigNumber(n).shiftedBy(this.decimals)
  }

  format(n: BigNumber | BigNumberish) {
    return formatNumber(n, this.decimals, Math.min(this.formatPrecision || this.decimals, 8))
  }

  // getValuePer2000U() 获取预言机返回的数字，即 2000 U = ? token
  // getUValuePerToken(), 获取1token等于多少U，合约数， 1 token = ? U
  async getUValuePerToken() {
    const value = await this.getValuePer2000U()
    if (!value || value.isZero()) {
      return new BigNumber(0)
    }

    return this.parse(this.api.Tokens.USDT.parse(2000).div(value))
  }

  // 获取1token等于多少U，展示数
  async getUAmountPerToken() {
    const value = await this.getUValuePerToken()
    if (!value || value.isZero()) {
      return new BigNumber(0)
    }

    return this.api.Tokens.USDT.amount(value)
  }

  // tokenAmount 换成 1 ETH = ？ Token
  // 2000 U = x Token
  // 2000 U = y ETH
  // y ETH = x Token
  // 1 ETH = x/y Token
  async queryOracle() {
    if (this.symbol === 'USDT') {
      return {
        k: toBigNumber(0),
        tokenAmount: toBigNumber(1),
      }
    }

    if (!this.address || !this.api.Contracts.NestPriceFacade.contract || !this.api.Contracts.CoFiXController.contract || this.channelId === undefined || this.pairIndex === undefined) {
      return {
        k: toBigNumber(0),
        tokenAmount: this.amount((await this.getValuePer2000U()).div(await this.api.Tokens['ETH'].getValuePer2000U()).shiftedBy(18)),
      }
    }

    try {
      const priceInfo = await this.api.Contracts.NestPriceFacade.contract?.['lastPriceListAndTriggeredPriceInfo(uint256,uint256,uint256)'](
        this.channelId, this.pairIndex, 2
      )

      const k = await this.api.Contracts.CoFiXController.contract.calcRevisedK(
        priceInfo.triggeredSigmaSQ,
        priceInfo.prices[3],
        priceInfo.prices[2],
        priceInfo.prices[1],
        priceInfo.prices[0]
      )

      return {
        k: toBigNumber(k).shiftedBy(-18),
        tokenAmount: this.amount((await this.getValuePer2000U()).div(await this.api.Tokens['ETH'].getValuePer2000U()).shiftedBy(18)),
      }
    } catch (e) {
      return {
        k: toBigNumber(0),
        tokenAmount: this.amount((await this.getValuePer2000U()).div(await this.api.Tokens['ETH'].getValuePer2000U()).shiftedBy(18)),
      }
    }
  }

  abstract balanceOf(address: string): Promise<BigNumber>
  abstract totalSupply(): Promise<BigNumber>
  abstract getValuePer2000U(): Promise<BigNumber>
  abstract allowance(spender: string): Promise<boolean>
  abstract approve(spender: string): Promise<any>
}

export default Token
