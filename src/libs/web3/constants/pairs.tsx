import { TokenCOFI, TokenNEST, TokenUSDT } from 'src/components/Icon'

import { CoFiXPairProps } from '../api/CoFiXPair'
import { Mainnet, Rinkeby } from './chains'

export const ETHUSDT: CoFiXPairProps = {
  symbol: 'ETH-USDT',
  Icon: TokenUSDT,
  pair: ['ETH', 'USDT'],
  addresses: {
    [Mainnet.chainId]: '0xFa8055B3e0C36605bB31e23bC565C31eb3Dca386',
    [Rinkeby.chainId]: '0xf749fA2B6E75F9EfBa8427eA86036f38A7173F9C',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHNEST: CoFiXPairProps = {
  symbol: 'ETH-NEST',
  Icon: TokenNEST,
  pair: ['ETH', 'NEST'],
  addresses: {
    [Mainnet.chainId]: '0x2FA6F2d5e42630e872cD0F33C69D1c2708FF79Fd',
    [Rinkeby.chainId]: '0x503B77BB77182b5f2a19Bacc5285af0edC5126FF',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHCOFI: CoFiXPairProps = {
  symbol: 'ETH-COFI',
  Icon: TokenCOFI,
  pair: ['ETH', 'COFI'],
  addresses: {
    [Mainnet.chainId]: '0x711EA25b70Bb580a7cb19DeBd0ab40A016c3fCbb',
    [Rinkeby.chainId]: '0x4115F0e23AbDd94AEF944e5Aba1362b43d3d6638',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const CoFiXPairWhitelist = [ETHUSDT, ETHNEST, ETHCOFI]
