import { TokenBNB } from 'src/components/Icon'
import Token from './Token'
import { toBigNumber } from '../utils/util'
import API from './index'
import BigNumber from 'bignumber.js'
import { ADDRESS_ZERO } from '../constants/constant'

class BNBToken extends Token {
  constructor(api: API) {
    super(api, {
      symbol: 'BNB',
      Icon: TokenBNB,
      addresses: ADDRESS_ZERO,
      decimals: 18,
      formatPrecision: 8,
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
    return this.parse(0)
  }

  async allowance(_spender: string) {
    return Promise.resolve(true)
  }

  async approve(_spender: string) {
    return Promise.resolve()
  }
}

export default BNBToken