import { TokenNEST, TokenUSDT } from 'src/components/Icon'

import { TokenProps } from '../api/Token'
import { BSC, BSCT } from './chains'

export const USDT: TokenProps = {
  symbol: 'USDT',
  Icon: TokenUSDT,
  addresses: {
    [BSC.chainId]: '0x55d398326f99059ff775485246999027b3197955',
    [BSCT.chainId]: '0xDd4A68D8236247BDC159F7C5fF92717AA634cBCc',
  },
}

export const NEST: TokenProps = {
  symbol: 'NEST',
  Icon: TokenNEST,
  addresses: {
    [BSC.chainId]: '0x98f8669F6481EbB341B522fCD3663f79A3d1A6A7',
    [BSCT.chainId]: '0x821edD79cc386E56FeC9DA5793b87a3A52373cdE',
  },
  formatPrecision: 2,
}

export const ERC20TokenWhitelist = [USDT, NEST]
