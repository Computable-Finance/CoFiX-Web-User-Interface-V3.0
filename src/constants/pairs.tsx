import { TokenUSDT } from 'src/components/Icon'

import { CoFiXPairProps } from '../api/CoFiXPair'
import {BSC, BSCT} from './chains'

export const NESTUSDT: CoFiXPairProps = {
  symbol: 'NEST-USDT',
  Icon: TokenUSDT,
  pair: ['NEST', 'USDT'],
  addresses: {
    [BSC.chainId]: '0x278f5d08bEa1989BEfcC09A20ad60fB39702D556',
    [BSCT.chainId]: '0xF9e8D1C6Ed54295a4a630085E6D982a37d9d2f85',
  },
  cofiAmountPerBlock: 1,
  cofiRewardPercentage: 0.8,
}

export const CoFiXPairWhitelist = [NESTUSDT]

