import { t } from '@lingui/macro'

import { CoFiXAnchorPoolProps } from '../api/CoFiXAnchorPool'
import { Mainnet, Rinkeby } from './chains'

export const ETH: CoFiXAnchorPoolProps = {
  title: t`ETH Anchor`,
  addresses: {
    [Mainnet.chainId]: '0xD7E54D936ca1e7F0ed097D4Ec6140653eC60f85D',
    [Rinkeby.chainId]: '0xD93F55F65316de63497163e4d2FD0390A1805c35',
  },
  anchorToken: 'ETH',
  tokens: ['ETH'],
  cofiAmountPerBlock: 3,
}

export const AnchorPoolWhitelist = [ETH]
