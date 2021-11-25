import { useEffect, useState } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import { PoolInfo } from 'src/libs/web3/api/CoFiXPair'
import useInterval from '@use-it/interval'

const usePoolInfo = <T extends PoolInfo>(token0: string, token1?: string) => {
  const { api } = useWeb3()
  const [info, setInfo] = useState<T>()
  const [loading, setLoading] = useState(false)

  const refresh = async () => {
    try {
      setLoading(true)

      if (!api || !token0 || !token1) {
        setInfo(undefined)
        return
      }

      const pair = api.CoFiXPairs[token0][token1]
      if (!pair) {
        setInfo(undefined)
        return
      }

      const i = await pair.getPoolInfo()
      if (JSON.stringify(info) !== JSON.stringify(i)) {
        setInfo(i as T)
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    refresh()
  }, [api, token0, token1])

  useInterval(refresh, 3000)

  return { info, loading }
}

export default usePoolInfo
