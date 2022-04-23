import { TokenUSDT } from 'src/components/Icon'

import { CoFiXPairProps } from '../api/CoFiXPair'
import { BSC, BSCT } from './chains'

export const NESTUSDT: CoFiXPairProps = {
  symbol: 'NEST-USDT',
  Icon: TokenUSDT,
  pair: ['NEST', 'USDT'],
  addresses: {
    [BSC.chainId]: '0x2BCeF6BDA147ca5E2C7ad0325CCCdcD01202f62a',
    [BSCT.chainId]: '0xBc95AB3Ce2F9e87C1453514a838234F9C0E6DB86',
  },
  cofiAmountPerBlock: 1,
  cofiRewardPercentage: 0.8,
}

export const CoFiXPairWhitelist = [NESTUSDT]
