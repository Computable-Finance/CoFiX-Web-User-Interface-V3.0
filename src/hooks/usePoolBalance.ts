import {toBigNumber} from '../libs/web3/util'
import useSwap from '../libs/web3/hooks/useSwap'
import useWeb3 from '../libs/web3/hooks/useWeb3'
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
