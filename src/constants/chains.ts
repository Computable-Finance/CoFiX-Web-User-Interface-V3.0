// https://chainid.network/

type Chain = {
  name: string
  chainId: number
  shortName: string
  chain: string
  network: string
  networkId: number
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpc: Array<string>
  faucets: Array<string>
  explorers: Array<{
    name: string
    url: string
    standard: string
  }>
  infoURL: string
}

export const BSC = {
  name: 'Smart Chain',
  chainId: 56,
  shortName: 'bsc',
  chain: 'BNB',
  network: 'BNB',
  networkId: 56,
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpc: [`https://bsc-dataseed.binance.org/`],
  faucets: [],
  explorers: [
    {
      name: 'bscscan',
      url: 'https://bscscan.com',
      standard: 'EIP3091',
    },
  ],
  infoURL: 'https://binance.org',
}

export const BSCT = {
  name: 'Smart Chain - Testnet',
  chainId: 97,
  shortName: 'bsct',
  chain: 'BNB',
  network: 'BNB Testnet',
  networkId: 97,
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpc: [`https://data-seed-prebsc-1-s1.binance.org:8545/`],
  faucets: [],
  explorers: [
    {
      name: 'testnet bscscan',
      url: 'https://testnet.bscscan.com',
      standard: 'https://testnet.bscscan.com',
    },
  ],
  infoURL: 'https://binance.com',
}

export const SupportedChains: Array<Chain> = [BSC, BSCT]

