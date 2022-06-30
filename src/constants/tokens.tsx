import {
  TokenCOFI,
  TokenNEST, TokenNHBTC,
  TokenPETH,
  TokenUSDT,
  TokenWETH,
} from 'src/components/Icon'

import { TokenProps } from '../api/Token'
import { Mainnet, Rinkeby } from './chains'

export const USDT: TokenProps = {
  symbol: 'USDT',
  Icon: TokenUSDT,
  addresses: {
    [Mainnet.chainId]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    [Rinkeby.chainId]: '0x2d750210c0b5343a0b79beff8F054C9add7d2411',
  }
}

export const PETH: TokenProps = {
  symbol: 'PETH',
  Icon: TokenPETH,
  addresses: {
    [Mainnet.chainId]: '0x53f878Fb7Ec7B86e4F9a0CB1E9a6c89C0555FbbD',
    [Rinkeby.chainId]: '0x4D4B378eFbeb7eE15Aa498F3383C9949391557e0',
  },
  priceInfo: {
    [Mainnet.chainId]: {
      channelId: 0,
      pairIndex: 1,
    },
    [Rinkeby.chainId]: {
      channelId: 0,
      pairIndex: 1,
    }
  }
}

export const NEST: TokenProps = {
  symbol: 'NEST',
  Icon: TokenNEST,
  addresses: {
    [Mainnet.chainId]: '0x04abEdA201850aC0124161F037Efd70c74ddC74C',
    [Rinkeby.chainId]: '0xE313F3f49B647fBEDDC5F2389Edb5c93CBf4EE25',
  },
  formatPrecision: 2,
  priceInfo: {
    [Mainnet.chainId]: {
      channelId: 0,
      pairIndex: 2,
    },
    [Rinkeby.chainId]: {
      channelId: 0,
      pairIndex: 2,
    }
  }
}

export const COFI: TokenProps = {
  symbol: 'COFI',
  Icon: TokenCOFI,
  addresses: {
    [Mainnet.chainId]: '0x1a23a6BfBAdB59fa563008c0fB7cf96dfCF34Ea1',
    [Rinkeby.chainId]: '0x61EA050b28Ccca539F0faf79Fd26F6Df31b9f15B',
  },
}

export const WETH: TokenProps = {
  symbol: 'WETH',
  Icon: TokenWETH,
  addresses: {
    [Mainnet.chainId]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [Rinkeby.chainId]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
}

export const NHBTC: TokenProps = {
  symbol: 'NHBTC',
  Icon: TokenNHBTC,
  addresses: {
    [Mainnet.chainId]: '0x1f832091faf289ed4f50fe7418cfbd2611225d46',
    [Rinkeby.chainId]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
}

export const ERC20TokenWhitelist = [USDT, NEST, COFI, NHBTC]
