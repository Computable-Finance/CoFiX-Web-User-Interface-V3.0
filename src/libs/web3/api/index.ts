import {Web3Provider} from '@ethersproject/providers'
import CoFiXPair, {CoFiXPairProps} from './CoFiXPair'
import CoFiXRouter, {CoFiXRouterProps} from './CoFiXRouter'
import ERC20Token, {ERC20TokenProps} from './ERC20Token'
import NestPriceFacade, {NestPriceFacadeProps} from './NestPriceFacade'
import ETHToken from './ETHToken'
import Token from './Token'
import {toBigNumber} from '../util'
import {BigNumberish} from 'ethers'
import BigNumber from 'bignumber.js'

export type SwapInfo = {
  oracleOut: BigNumber
  amountOut: BigNumber
  fee: Record<string, BigNumber>
  path: Array<string>
  oracleFee: BigNumber
}

type APIProps = {
  provider?: Web3Provider
  chainId?: number
  account?: string

  ERC20Tokens: Array<ERC20TokenProps>
  CoFiXPairs: Array<CoFiXPairProps>

  NestPriceFacade: NestPriceFacadeProps
  CoFiXRouter: CoFiXRouterProps
}

class API {
  provider?: Web3Provider
  chainId?: number
  account?: string

  Tokens: {
    USDT: Token

    [symbol: string]: Token
  }

  CoFiXPairs: {
    [symbol: string]: {
      [symbol: string]: CoFiXPair
    }
  }

  Contracts: {
    NestPriceFacade: NestPriceFacade
    CoFiXRouter: CoFiXRouter
  }

  swapMap: Record<string, Record<string, CoFiXPair>>

  constructor(props: APIProps) {
    this.provider = props.provider
    this.chainId = props.chainId
    this.account = props.account

    this.Tokens = {
      ETH: new ETHToken(this),
      ...props.ERC20Tokens.reduce((tokens, token) => {
        tokens[token.symbol] = new ERC20Token(this, token)

        return tokens
      }, Object.create(null)),
    }

    this.CoFiXPairs = {
      ...props.CoFiXPairs.reduce((pairs, props) => {
        const pair = new CoFiXPair(this, props)
        const symbol = pair.pair.map((p) => p.symbol)

        if (!pairs[symbol[0]]) {
          pairs[symbol[0]] = {}
        }
        if (!pairs[symbol[1]]) {
          pairs[symbol[1]] = {}
        }

        pairs[symbol[0]][symbol[1]] = pair
        pairs[symbol[1]][symbol[0]] = pair

        return pairs
      }, Object.create(null)),
    }


    this.Contracts = {
      NestPriceFacade: new NestPriceFacade(this, props.NestPriceFacade),
      CoFiXRouter: new CoFiXRouter(this, props.CoFiXRouter)
    }

    const map: Record<string, Record<string, CoFiXPair>> = {}

    Object.keys(this.CoFiXPairs).forEach((symbol1) => {
      if (!map[symbol1]) {
        map[symbol1] = {}
      }

      Object.keys(this.CoFiXPairs[symbol1]).forEach((symbol2) => {
        if (symbol1 === symbol2) {
          return
        }
        if (!map[symbol2]) {
          map[symbol2] = {}
        }

        map[symbol1][symbol2] = this.CoFiXPairs[symbol1][symbol2]
        map[symbol2][symbol1] = this.CoFiXPairs[symbol1][symbol2]
      })
    })

    this.swapMap = map
  }

  async init() {
    await Promise.all(Object.values(this.Tokens).map((t) => t.init()))
    await Promise.all(
      Object.values(this.CoFiXPairs).map(async (p) => await Promise.all(Object.values(p).map((p) => p.init())))
    )
    await Promise.all(Object.values(this.Contracts).map((t) => t.init()))
  }

  async getSwapInfo(src: string, dest: string, amount: BigNumberish | BigNumber) {
    if (!this.provider) {
      return
    }

    const map = this.swapMap

    // A simple BFS
    function bfs() {
      const previous = new Map<string, string>()
      const visisted = new Set([src])
      const queue: Array<string> = [src]

      while (queue.length > 0) {
        const last = queue.shift()
        // NOTICE: this is for typescript
        if (!last) {
          break
        }

        if (last === dest) {
          const path: Array<string> = [dest]

          let start = dest
          while (start !== src) {
            const p = previous.get(start)
            if (!p) {
              return []
            }
            start = p
            path.unshift(p)
          }

          return path
        }

        for (const neighbour in map[last]) {
          if (visisted.has(neighbour)) {
            continue
          }

          previous.set(neighbour, last)
          queue.push(neighbour)
          visisted.add(neighbour)
        }
      }

      return []
    }

    const path = bfs()
    if (path.length < 2) {
      throw new Error(`can not swap from ${src} to ${dest}`)
    }

    let oracleAmountIn = toBigNumber(amount)
    let realAmountIn = toBigNumber(amount)
    let oracleFee = toBigNumber(0)

    const fee: Record<string, BigNumber> = {}
    for (let i = 1; i < path.length; i++) {
      const src = path[i - 1]
      const dest = path[i]

      const pool = map[src][dest]
      const [oracleSwap, realSwap] = await Promise.all([
        pool.swap(src, dest, oracleAmountIn),
        pool.swap(src, dest, realAmountIn),
      ])

      oracleAmountIn = oracleSwap.oracleOut
      realAmountIn = realSwap.amountOut
      oracleFee = oracleFee.plus(realSwap.oracleFee)

      if (!fee[realSwap.fee.symbol]) {
        fee[realSwap.fee.symbol] = toBigNumber(0)
      }

      fee[realSwap.fee.symbol] = fee[realSwap.fee.symbol].plus(realSwap.fee.amount)
    }

    const oracleOut = oracleAmountIn
    const amountOut = realAmountIn

    return {
      oracleOut,
      amountOut,
      fee,
      path,
      oracleFee,
    }
  }

  async getGasFee() {
    let value = toBigNumber(0)
    if (this.provider) {
      const gasFee = await this.provider.getGasPrice()
      value = toBigNumber(gasFee)
    }

    return {
      value,
      amount: this.Tokens.ETH.amount(value),
      formatAmount: this.Tokens.ETH.format(this.Tokens.ETH.amount(value)),
    }
  }

  getTokenByAddress(address: string) {
    return Object.values(this.Tokens).find((t) => t.address === address)
  }
}

export default API
