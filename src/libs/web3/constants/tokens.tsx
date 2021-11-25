import {
  TokenNEST,
  TokenUSDT,
} from 'src/components/Icon'

import { TokenProps } from '../api/Token'
import { Mainnet, Testnet } from './chains'

export const USDT: TokenProps = {
  symbol: 'USDT',
  Icon: TokenUSDT,
  addresses: {
    [Mainnet.chainId]: '0xDd4A68D8236247BDC159F7C5fF92717AA634cBCc',
    [Testnet.chainId]: '0xDd4A68D8236247BDC159F7C5fF92717AA634cBCc',
  },
}


export const NEST: TokenProps = {
  symbol: 'NEST',
  Icon: TokenNEST,
  addresses: {
    [Mainnet.chainId]: '0x821edD79cc386E56FeC9DA5793b87a3A52373cdE',
    [Testnet.chainId]: '0x821edD79cc386E56FeC9DA5793b87a3A52373cdE',
  },
  formatPrecision: 2,
}


export const ERC20TokenWhitelist = [USDT, NEST]
