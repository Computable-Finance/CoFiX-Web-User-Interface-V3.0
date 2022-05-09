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

  constructor(api: API, props: TokenProps) {
    super(api, props)

    this.symbol = props.symbol
    this.Icon = props.Icon
    this.decimals = props.decimals || 18
    this.formatPrecision = props.formatPrecision
    this.isXToken = !!props.isXToken
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

  async getETHValue() {
    const value = await this.getValuePerETH()
    if (!value || value.isZero()) {
      return new BigNumber(0)
    }

    return this.parse(this.api.Tokens.ETH.parse(1).div(value))
  }

  async getETHAmount() {
    const value = await this.getETHValue()
    if (!value || value.isZero()) {
      return new BigNumber(0)
    }

    return this.api.Tokens.ETH.amount(value)
  }

  async getUSDTValue() {
    const value = await this.getValuePerUSDT()
    if (!value || value.isZero()) {
      return new BigNumber(0)
    }

    return this.parse(this.api.Tokens.USDT.parse(1).div(value))
  }

  async getUSDTAmount() {
    const value = await this.getUSDTValue()
    if (!value || value.isZero()) {
      return new BigNumber(0)
    }

    return this.api.Tokens.USDT.amount(value)
  }

  async queryOracle() {
    if (this.symbol === 'ETH') {
      return {
        k: toBigNumber(0),
        tokenAmount: toBigNumber(1),
      }
    }

    if (!this.address || !this.api.Contracts.NestPriceFacade.contract || !this.api.Contracts.CoFiXController.contract) {
      return {
        k: toBigNumber(0),
        tokenAmount: this.amount(await this.getValuePerETH()),
      }
    }

    try {
      const priceInfo = await this.api.Contracts.NestPriceFacade.contract?.['lastPriceList(uint256,uint256,uint256)'](
        0, 1, 1
      )

      const k = await this.api.Contracts.CoFiXController.contract.calcRevisedK(
        // priceInfo.triggeredSigmaSQ,
        '',
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

  abstract balanceOf(address: string): Promise<BigNumber>
  abstract totalSupply(): Promise<BigNumber>
  abstract getValuePerETH(): Promise<BigNumber>
  abstract getValuePerUSDT(): Promise<BigNumber>
  abstract allowance(spender: string): Promise<boolean>
  abstract approve(spender: string): Promise<any>
}

export default Token
