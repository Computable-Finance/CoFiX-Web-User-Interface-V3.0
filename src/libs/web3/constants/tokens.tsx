import {
  TokenCOFI,
  TokenNEST, TokenNHBTC,
  TokenPETH,
  TokenUSDC,
  TokenUSDT,
  TokenWETH,
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

export const PETH: TokenProps = {
  symbol: 'PETH',
  Icon: TokenPETH,
  addresses: {
    [Mainnet.chainId]: '0xc39dC1385a44fBB895991580EA55FC10e7451cB3',
    [Testnet.chainId]: '0xc39dC1385a44fBB895991580EA55FC10e7451cB3',
  },
}

export const USDC: TokenProps = {
  symbol: 'USDC',
  Icon: TokenUSDC,
  addresses: {
    [Mainnet.chainId]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    [Testnet.chainId]: '0xB64825a6bA80d65886b5123f5170ddffc935D9DE',
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

export const COFI: TokenProps = {
  symbol: 'COFI',
  Icon: TokenCOFI,
  addresses: {
    [Mainnet.chainId]: '0x1a23a6BfBAdB59fa563008c0fB7cf96dfCF34Ea1',
    [Testnet.chainId]: '0x61EA050b28Ccca539F0faf79Fd26F6Df31b9f15B',
  },
}

export const WETH: TokenProps = {
  symbol: 'WETH',
  Icon: TokenWETH,
  addresses: {
    [Mainnet.chainId]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [Testnet.chainId]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
}

export const NHBTC: TokenProps = {
  symbol: 'NHBTC',
  Icon: TokenNHBTC,
  addresses: {
    [Mainnet.chainId]: '0x1f832091faf289ed4f50fe7418cfbd2611225d46',
    [Testnet.chainId]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
}

export const ERC20TokenWhitelist = [USDT, NEST, COFI, NHBTC]
