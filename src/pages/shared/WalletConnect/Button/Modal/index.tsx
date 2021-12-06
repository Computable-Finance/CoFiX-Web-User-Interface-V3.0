import './styles'

import {Trans} from '@lingui/macro'
import {FC} from 'react'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import {CoFiXLogo} from 'src/components/Icon'
import {SupportedConnectors} from 'src/connectors'
import useWeb3 from 'src/hooks/useWeb3'

type Props = {
  onClose?: () => void
}

const Modal: FC<Props> = (props) => {
  const {activate} = useWeb3()
  const {ethereum} = window

  const classPrefix = 'cofi-wallet-connect-button-modal'

  return (
    <Card closable className={`${classPrefix}`} onClose={props.onClose}>
      <CoFiXLogo/>

      <div className={`${classPrefix}-title`}>
        <Trans>Connect to CoFiX</Trans>
      </div>

      <div className={`${classPrefix}-content`}>
        <Trans>Click the button below to connect to CoFiX DApp</Trans>
      </div>

      <ul>
        {SupportedConnectors.map((p) => (
          <li key={p.id} onClick={async () => {
            if (p.id === 'metamask') {
              const chainId = await ethereum.request({method: 'eth_chainId'})
              if (chainId === '0x38' || chainId === '0x61') {
                activate(p)
              } else {
                try {
                  await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: '0x38'}],
                  });
                  activate(p);
                } catch (switchError) {
                  if (switchError.code === 4902) {
                    try {
                      await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                          {
                            chainId: '0x38',
                            chainName: 'Smart Chain',
                            nativeCurrency: {
                              name: 'BNB',
                              symbol: 'BNB',
                              decimals: 18,
                            },
                            blockExplorerUrls: ['https://bscscan.com'],
                            rpcUrls: ['https://bsc-dataseed.binance.org/'],
                          }
                        ],
                      });
                    } catch (addError) {
                      console.log(addError)
                    }
                    try {
                      await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                          {
                            chainId: '0x61',
                            chainName: 'Smart Chain - Testnet',
                            nativeCurrency: {
                              name: 'BNB',
                              symbol: 'BNB',
                              decimals: 18,
                            },
                            blockExplorerUrls: ['https://testnet.bscscan.com'],
                            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                          }
                        ],
                      });
                    } catch (addError) {
                      console.log(addError)
                    }
                  }
                }
              }
            } else {
              activate(p)
            }
          }}>
            <Button className={`${classPrefix}-button`}>
              <p.Icon/>

              {p.name}
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Modal
