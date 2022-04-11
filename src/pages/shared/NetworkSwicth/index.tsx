import './styles'

import {Trans} from '@lingui/macro'
import {FC} from 'react'
import Popup from 'reactjs-popup'
import {Ethereum, BSC} from 'src/components/Icon'
import Tag from "../../../components/Tag";
import useWeb3 from "../../../hooks/useWeb3";
import {SupportedChains} from "../../../constants/chains";

type Props = {
  onSelect?: (id: string) => void
}

const Menu: FC<Props> = (props) => {
  const menus = [
    {
      id: 'ethereum',
      link: 'https://cofix.tech/',
      chainId: "0x1",
      icon: <Ethereum/>,
      content: <Trans>Ethereum</Trans>,
    },
    {
      id: 'rinkeby',
      link: 'https://cofix.tech/',
      chainId: "0x4",
      icon: <Ethereum/>,
      content: <Trans>Rinkeby</Trans>,
    },
    {
      id: 'bsc',
      link: 'https://bsc.cofix.tech',
      chainId: "0x38",
      icon: <BSC/>,
      content: <Trans>BSC</Trans>,
    },
  ]
  
  const select = (id: string) => {
    return async () => {
      const {ethereum} = window
      if (!ethereum || !ethereum.on) {
        return
      }
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{chainId: id}],
        });
      } catch (switchError) {
        console.log(switchError)
      }
      if (props.onSelect) {
        props.onSelect(id)
      }
    }
  }
  
  const classPrefix = 'cofi-menu'
  
  return (
    <menu className={`${classPrefix}`}>
      <ul>
        {menus.map((m) => (
          <li key={m.id} onClick={select(m.chainId)}>
            <a>
              {m.icon}
              <span>{m.content}</span>
            </a>
          </li>
        ))}
      </ul>
    </menu>
  )
}

export const NetworkSwitch: FC<Props & {
  modal?: boolean
}> = (props) => {
  const {chainId} = useWeb3()
  const chain = SupportedChains.find((c) => c.chainId === chainId)
  
  return (
    <Popup
      modal={props.modal}
      position={"bottom left"}
      trigger={
        <button className={"cofix-network-button"}>
          {chain && <Tag primary>{chain.network[0].toUpperCase() + chain.network.slice(1)}</Tag>}
        </button>
      }
    >
      <Menu {...props} />
    </Popup>
  )
}
