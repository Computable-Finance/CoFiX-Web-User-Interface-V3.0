import { useMemo } from 'react'
import useWeb3 from 'src/hooks/useWeb3'
import { BSCT } from 'src/constants/chains'

const useEtherScanHost = () => {
  const { api } = useWeb3()

  return useMemo(() => {
    switch (api?.chainId) {
      case BSCT.chainId:
        return 'https://testnet.bscscan.com'
      default:
        return 'https://bscscan.com'
    }
  }, [api])
}

export default useEtherScanHost
