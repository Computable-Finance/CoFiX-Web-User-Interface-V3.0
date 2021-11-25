import { useMemo } from 'react'
import useWeb3 from './useWeb3'

const useXToken = (token0: string, token1?: string) => {
  const { api } = useWeb3()

  return useMemo(() => {
    if (!token0 || !token1) {
      return
    }
    return api?.CoFiXPairs[token0][token1]
  }, [api, token0, token1])
}

export default useXToken
