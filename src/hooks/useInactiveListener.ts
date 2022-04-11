import { useEffect } from 'react'

import useWeb3 from './useWeb3'

const useInactiveListener = (suppress = false) => {
  const { active, error, activate, refresh } = useWeb3()

  useEffect(() => {
    const { ethereum } = window

    if (!ethereum || !ethereum.on) {
      return
    }

    if (active || error || suppress) {
      return
    }

    ethereum.on('chainChanged', async () => {
      const chainId = await ethereum.request({ method: 'eth_chainId' })
      if (chainId === '0x1' || chainId === '0x4') {
        window.location.reload()
      } else if (chainId === '0x38' || chainId === '0x61'){
        window.location.href = 'https://bsc.cofix.tech'
      } else {
        window.location.reload()
      }
    })
    ethereum.on('accountsChanged', refresh)

    return () => {
      if (ethereum.removeListener) {
        ethereum.removeListener('chainChanged', refresh)
        ethereum.removeListener('accountsChanged', refresh)
      }
    }
  }, [active, error, suppress, activate])
}

export default useInactiveListener
