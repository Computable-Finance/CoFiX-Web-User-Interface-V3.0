import BigNumber from 'bignumber.js'
import {BigNumberish} from 'ethers'
import {UniswapQuoter as TypeUniswapQuoter, UniswapQuoter__factory} from 'src/abis/types/uniswap'
import API from './index'
import Contract, {ContractProps} from './Contract'

export type UniswapQuoterProps = ContractProps

class UniswapQuoter extends Contract {
  contract?: TypeUniswapQuoter

  constructor(api: API, props: UniswapQuoterProps) {
    super(api, props)

    if (this.address && this.api.provider) {
      this.contract = UniswapQuoter__factory.connect(this.address, this.api.provider?.getSigner() || this.api.provider)
    }
  }

  async quoteExactInputSingle(tokenIn: string, tokenOut: string, amountIn: BigNumberish) {
    if (!this.contract) {
      return new BigNumber(0)
    }

    return await this.contract.callStatic.quoteExactInputSingle(tokenIn, tokenOut, 500, amountIn, 0)
  }

  async quoteExactOutputSingle(tokenIn: string, tokenOut: string, amountOut: BigNumberish) {
    if (!this.contract) {
      return new BigNumber(0)
    }

    return await this.contract.callStatic.quoteExactOutputSingle(tokenIn, tokenOut, 500, amountOut, 0)
  }
}

export default UniswapQuoter
