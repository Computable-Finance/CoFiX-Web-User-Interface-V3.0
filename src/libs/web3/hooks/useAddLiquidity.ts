import {useCallback, useEffect, useState} from 'react'
import useSlippageTolerance from 'src/hooks/useSlippageTolerance'

import {deadline, toBigNumber} from '../util'
import useTransaction, {TransactionAddLiquidityContent, TransactionType} from './useTransaction'
import useWeb3 from './useWeb3'

const useAddLiquidity = (content: TransactionAddLiquidityContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()

  const [liquidity, setLiquidity] = useState<string>()
  const { ratio: slippageTolerance } = useSlippageTolerance()

  const [args, setArgs] = useState<{
    pool: string
    token: string
    amountETH: string
    amountToken: string
    liquidity: string
    liquidityMin: string
    to: string
    oracleCallFee?: string
    sendETHValue?: string
  }>()

  useEffect(() => {
    ;(async () => {
      if (!api) {
        return
      }

      if (content.token0.symbol && content.token1.symbol) {
        // find pair
        const pair = api.CoFiXPairs[content.token0.symbol][content.token1.symbol]
        const poolInfo = await pair.getPoolInfo()
        if (!poolInfo) {
          return
        }
        const tokenAmount = poolInfo.tokenAmount.multipliedBy(toBigNumber(1).plus(poolInfo.k)).div(toBigNumber(1))

        let liquidity = toBigNumber(content.token0.amount).plus(toBigNumber(content.token1.amount).multipliedBy(toBigNumber(1).div(tokenAmount)))

        const totalVault = poolInfo.amounts[0].plus(poolInfo.amounts[1].multipliedBy(toBigNumber(1).div(tokenAmount)))

        if (poolInfo.xtokenTotalSupply.amount.gt(0) && totalVault.gt(0)){
          liquidity = liquidity.multipliedBy(poolInfo.xtokenTotalSupply.amount).div(totalVault)
        } else {
          liquidity = liquidity.multipliedBy(toBigNumber(1))
        }

        if (!liquidity.isNaN()) {
          content.liquidity = liquidity.toFixed(6)
          setLiquidity(content.liquidity)
        }

        const newArgs = {
          pool: pair.address || '',
          token: pair.pair[1].address || '',
          amountETH: pair.pair[0].parse(content.token0.amount).toFixed(0),
          amountToken: pair.pair[1].parse(content.token1.amount).toFixed(0),
          liquidity: liquidity.toFixed(6),
          liquidityMin: liquidity
            .multipliedBy(1 - slippageTolerance)
            .shiftedBy(18)
            .toFixed(0),
          to: api.account || '',
          oracleCallFee: api.chainId === 1 ? "0.001" : "0.01",
          sendETHValue: api.Tokens.ETH.parse(toBigNumber(api.chainId === 1 ? 0.001 : 0.01).plus(api.Tokens.ETH.parse(content.token0.amount))).toFixed(0),
        }

        if (JSON.stringify(newArgs) !== JSON.stringify(args)) {
          setArgs(newArgs)
          console.log(newArgs)
        }
      } else {
        setArgs(undefined)
      }
    })()
  }, [
    api,
    content.token0.amount,
    content.token0.symbol,
    content.token1.amount,
    content.token1.symbol,
  ])

  const handler = useCallback(async () => {
    return await push(
      {
        type: TransactionType.AddLiquidity,
        content: {
          ...content,
          liquidity: args?.liquidity,
        },
      },
      async () => {
        if (!api || !api.Contracts.CoFiXRouter.contract || !args) {
          return
        }
        return api.Contracts.CoFiXRouter.contract.addLiquidity(
          args.pool,
          args.token,
          args.amountETH,
          args.amountToken,
          args.liquidityMin,
          args.to,
          deadline(),
          {
            value: args.sendETHValue,
          }
        )
      }
    )
  }, [args])

  return { liquidity, handler, oracleCallFee: args?.oracleCallFee }
}

export default useAddLiquidity
