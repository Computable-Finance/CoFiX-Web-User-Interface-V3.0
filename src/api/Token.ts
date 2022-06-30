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
    oracleFee: number,
  }>
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
  oracleFee?: number

  protected constructor(api: API, props: TokenProps) {
    super(api, props)

    this.symbol = props.symbol
    this.Icon = props.Icon
    this.decimals = props.decimals || 18
    this.formatPrecision = props.formatPrecision
    this.isXToken = !!props.isXToken
    this.channelId = props.priceInfo && api.chainId ? props.priceInfo[api.chainId].channelId : undefined
    this.pairIndex = props.priceInfo && api.chainId ? props.priceInfo[api.chainId].pairIndex : undefined
    this.oracleFee = props.priceInfo && api.chainId ? props.priceInfo[api.chainId].oracleFee : undefined
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

  // 1 token = ? USDT
  async getUValuePerToken() {
    const value = await this.getValuePer2000U()
    if (!value || value.isZero()) {
      return new BigNumber(0)
    }

    return this.parse(this.api.Tokens.ETH.parse(2000).div(value))
  }

  abstract balanceOf(address: string): Promise<BigNumber>
  abstract totalSupply(): Promise<BigNumber>
  abstract getValuePer2000U(): Promise<BigNumber>
  abstract allowance(spender: string): Promise<boolean>
  abstract approve(spender: string): Promise<any>
}

export default Token
