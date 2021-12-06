import './styles'

import { Trans } from '@lingui/macro'
import { FC } from 'react'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import { CoFiXLogo } from 'src/components/Icon'
import { SupportedConnectors } from 'src/connectors'
import useWeb3 from 'src/hooks/useWeb3'

type Props = {
  onClose?: () => void
}

const Modal: FC<Props> = (props) => {
  const { activate } = useWeb3()
  const { ethereum } = window

  const classPrefix = 'cofi-wallet-connect-button-modal'

  return (
    <Card closable className={`${classPrefix}`} onClose={props.onClose}>
      <CoFiXLogo />

      <div className={`${classPrefix}-title`}>
        <Trans>Connect to CoFiX</Trans>
      </div>

      <div className={`${classPrefix}-content`}>
        <Trans>Click the button below to connect to CoFiX DApp</Trans>
      </div>

      <ul>
        {SupportedConnectors.map((p) => (
          <li key={p.id} onClick={async() => {
            if (p.id === 'metamask') {
              const chainId = await ethereum.request({method: 'eth_chainId'})
              if (chainId === '0x1' || chainId === '0x4') {
                activate(p)
              } else {
                try {
                  await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: '0x1'}],
                  });
                  activate(p);
                } catch (switchError) {
                  console.log(switchError)
                }
              }
            } else {
              activate(p)
            }
          }}>
            <Button className={`${classPrefix}-button`}>
              <p.Icon />

              {p.name}
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Modal
