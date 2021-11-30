import { TokenUSDT } from 'src/components/Icon'

import { CoFiXPairProps } from '../api/CoFiXPair'
import { BSCT } from './chains'

export const NESTUSDT: CoFiXPairProps = {
  symbol: 'NEST-USDT',
  Icon: TokenUSDT,
  pair: ['NEST', 'USDT'],
  addresses: {
    [BSCT.chainId]: '0xF9e8D1C6Ed54295a4a630085E6D982a37d9d2f85',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const CoFiXPairWhitelist = [NESTUSDT]
