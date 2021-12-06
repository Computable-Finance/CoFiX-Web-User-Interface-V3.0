import {toBigNumber} from '../utils/util'
import useSwap from './useSwap'
import useWeb3 from './useWeb3'
import {useEffect, useState} from 'react'

const usePoolBalance = (src: string, dest: string) => {
  const {api} = useWeb3()
  const [balance, setBalance] = useState(toBigNumber(0))
  const [loading, setLoading] = useState(true)

  const pair = {
    src: {symbol: src, amount: ''},
    dest: {symbol: dest, amount: ''},
  }

  const swap = useSwap(pair)

  useEffect(()=> {
    if (swap.swapInfo) {
      src = swap.swapInfo.path.slice(-2)[0]
      dest = swap.swapInfo.path.slice(-2)[1]
      const pool = api?.CoFiXPairs[src][dest]

      pool?.getPoolInfo().then((res) => {
        if (res?.amounts) {
          setBalance(src === "ETH"  ? res.amounts[1] : res.amounts[0])
          setLoading(false)
        }
      })
    }
  }, [swap])

  return {
    loading: loading,
    balance: {
      amount: balance,
      value: balance,
      formatAmount: balance.toFormat(8),
    },
  }
}

export default usePoolBalance
