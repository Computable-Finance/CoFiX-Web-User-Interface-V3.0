import { useCallback, useEffect, useState } from 'react'
import useSlippageTolerance from 'src/hooks/useSlippageTolerance'
import { toBigNumber, deadline } from '../util'
import useTransaction, { TransactionRemoveLiquidityContent, TransactionType } from './useTransaction'
import useWeb3 from './useWeb3'

const useRemoveLiquidity = (content: TransactionRemoveLiquidityContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()
  const { ratio: slippageTolerance } = useSlippageTolerance()

  const [args, setArgs] = useState<{
    pool: string
    token: string
    liquidity: string
    amountETHMin: string
    to: string
    oracleCallFee: string
    sendETHValue: string

    receive?: Array<{
      symbol: string
      amount: string
    }>
  }>()

  useEffect(() => {
    ;(async () => {
      if (!api || !api.account) {
        return
      }

      if (content.token0 && content.token1) {
        // find pair
        const pair = api.CoFiXPairs[content.token0][content.token1]
        const poolInfo = await pair.getPoolInfo()
        if (!poolInfo) {
          return
        }
        const liquidity = toBigNumber(content.liquidity)
        const ethAmountOut = liquidity.multipliedBy(poolInfo.amounts[0]).div(poolInfo.xtokenTotalSupply.amount)
        const tokenAmountOut = liquidity.multipliedBy(poolInfo.amounts[1]).div(poolInfo.xtokenTotalSupply.amount)

        if (!liquidity.isNaN()) {
          // TODO: calaculate real receive
          content.receive = [
            {
              symbol: pair.pair[0].symbol,
              amount: pair.pair[0].format(ethAmountOut),
            },
            {
              symbol: pair.pair[1].symbol,
              amount: pair.pair[1].format(tokenAmountOut),
            },
          ]
        } else {
          content.receive = [
            {
              symbol: pair.pair[0].symbol,
              amount: '--',
            },
            {
              symbol: pair.pair[1].symbol,
              amount: '--',
            },
          ]
        }

        const newArgs = {
          pool: pair.address || '',
          token: pair.pair[1].address || '',
          liquidity: liquidity.shiftedBy(18).toFixed(0),
          amountETHMin: api.Tokens.ETH.parse(ethAmountOut.multipliedBy(1 - slippageTolerance)).toFixed(0),
          to: api.account || '',
          oracleCallFee: api.Tokens.ETH.parse(api.chainId === 1 ? 0.001 : 0.01).toFixed(0),
          sendETHValue: api.Tokens.ETH.parse(api.chainId === 1 ? 0.001 : 0.01).toFixed(0),
          receive: content.receive,
        }

        if (JSON.stringify(newArgs) !== JSON.stringify(args)) {
          setArgs(newArgs)
        }
      }
    })()
  }, [api, content.token0, content.token1, content.liquidity])

  const handler = useCallback(() => {
    push(
      {
        type: TransactionType.RemoveLiquidity,
        content,
      },
      async () => {
        if (!args || !api) {
          return
        }

        return api.Contracts.CoFiXRouter.contract?.removeLiquidityGetTokenAndETH(
          args.pool,
          args.token,
          args.liquidity,
          args.amountETHMin,
          args.to,
          deadline(),
          {
            value: args.sendETHValue,
          }
        )
      }
    )
  }, [args])

  return { ...args, handler }
}

export default useRemoveLiquidity
