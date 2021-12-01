import { useEffect } from 'react'

import useWeb3 from './useWeb3'

const useInactiveListener = (suppress = false) => {
  const { active, error, activate, refresh, api } = useWeb3()

  useEffect(() => {
    const { ethereum } = window

    if (!ethereum || !ethereum.on) {
      return
    }

    if (active || error || suppress) {
      return
    }

    ethereum.on('chainChanged', ()=> {
      if (api?.chainId === 1 || api?.chainId === 4) {
        window.location.href = 'https://cofix.tech'
      } else if (api?.chainId === 56) {
        window.location.href = 'https://bsc.cofix.tech'
      } else if (api?.chainId === 97) {
        refresh()
      } else {
        refresh()
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
