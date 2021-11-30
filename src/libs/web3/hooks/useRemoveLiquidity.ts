import { useCallback, useEffect, useState } from 'react'
import { toBigNumber, deadline } from '../util'
import useTransaction, { TransactionRemoveLiquidityContent, TransactionType } from './useTransaction'
import useWeb3 from './useWeb3'
import { ADDRESS_ZERO } from '../constants/constant'

const useRemoveLiquidity = (content: TransactionRemoveLiquidityContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()

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
        const pair = api.CoFiXPairs[content.token0][content.token1]
        const poolInfo = await pair.getPoolInfo()
        if (!poolInfo) {
          return
        }
        const liquidity = toBigNumber(content.liquidity)
        const token0AmountOut = liquidity.multipliedBy(poolInfo.amounts[0]).div(poolInfo.xtokenTotalSupply.amount)
        const token1AmountOut = liquidity.multipliedBy(poolInfo.amounts[1]).div(poolInfo.xtokenTotalSupply.amount)
        if (!liquidity.isNaN()) {
          content.receive = [
            {
              symbol: pair.pair[0].symbol,
              amount: pair.pair[0].format(token0AmountOut),
            },
            {
              symbol: pair.pair[1].symbol,
              amount: pair.pair[1].format(token1AmountOut),
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
          token: ADDRESS_ZERO,
          liquidity: liquidity.shiftedBy(18).toFixed(0),
          amountETHMin: '0',
          to: api.account || '',
          oracleCallFee: '0.005',
          sendETHValue: api.Tokens.ETH.parse(toBigNumber('0.005')).toFixed(0),
          receive: content.receive,
        }
        console.log(newArgs)

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
        console.log(args.pool, args.token, args.liquidity, args.amountETHMin, args.to, deadline(), args.sendETHValue)
        return api.Contracts.CoFiXRouter.contract?.removeLiquidityGetTokenAndETH(
          args.pool,
          args.token,
          args.liquidity,
          args.amountETHMin,
          args.to,
          deadline(),
          {
            value: args.sendETHValue,
            gasLimit: 100000,
          }
        )
      }
    )
  }, [args])

  return { ...args, handler }
}

export default useRemoveLiquidity
