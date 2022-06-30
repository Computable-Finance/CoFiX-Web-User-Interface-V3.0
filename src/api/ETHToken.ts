import { TokenETH } from 'src/components/Icon'
import Token from './Token'
import { toBigNumber } from '../utils/util'
import API from './index'
import BigNumber from 'bignumber.js'
import { ADDRESS_ZERO } from '../constants/constant'
import { Mainnet, Rinkeby } from '../constants/chains'

class ETHToken extends Token {
  constructor(api: API) {
    super(api, {
      symbol: 'ETH',
      Icon: TokenETH,
      addresses: ADDRESS_ZERO,
      decimals: 18,
      formatPrecision: 8,
      priceInfo: {
        [Mainnet.chainId]: {
          channelId: 0,
          pairIndex: 1
        },
        [Rinkeby.chainId]: {
          channelId: 0,
          pairIndex: 1
        }
      }
    })
  }

  async balanceOf(address: string): Promise<BigNumber> {
    const value = await this.api.provider?.getBalance(address)
    return toBigNumber(value || -1)
  }

  async totalSupply(): Promise<BigNumber> {
    // NOTICE: this is not real supply
    return new BigNumber(Infinity)
  }

  async getValuePer2000U() {
    if (!this.address || this.channelId === undefined || this.pairIndex === undefined) {
      return new BigNumber(0)
    }

    try {
      // try to get price from nest
      const value = await this.api.Contracts.NestPriceFacade.contract?.[
        'lastPriceList(uint256,uint256,uint256)'
        ](this.channelId, this.pairIndex, 1)
      if (value) {
        const v = toBigNumber(value[1])
        if (!v.isZero()) {
          return v
        }
      }
    } catch (e) {
      console.warn(e)
    }

    // NOTICE: this is only used for debug
    switch (this.symbol) {
      case 'USDT':
        return this.parse(2700)
      case 'COFI':
        return this.parse(3000)
      case 'WETH':
        return this.parse(1)
      case 'PETH':
        return this.parse(1)
      default:
        return this.parse(2700)
    }
  }

  async allowance(_spender: string) {
    return Promise.resolve(true)
  }

  async approve(_spender: string) {
    return Promise.resolve()
  }
}

export default ETHToken
