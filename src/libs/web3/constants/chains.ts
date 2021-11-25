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

export const Mainnet = {
  name: 'BSC Mainnet',
  chainId: 56,
  shortName: 'bnb',
  chain: 'BSC',
  network: 'mainnet',
  networkId: 56,
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpc: [
    `https://bsc-dataseed.binance.org/`,
  ],
  faucets: [],
  explorers: [
    {
      name: 'bscscan',
      url: 'https://bscscan.com',
      standard: 'EIP3091',
    },
  ],
  infoURL: 'https://ethereum.org',
}

export const Testnet = {
  name: 'BSC Testnet',
  chainId: 97,
  shortName: 'bnbt',
  chain: 'BSC',
  network: 'testnet',
  networkId: 97,
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpc: [`https://data-seed-prebsc-1-s1.binance.org:8545/`],
  faucets: ['https://faucet.ropsten.be?${ADDRESS}'],
  explorers: [],
  infoURL: 'https://github.com/ethereum/ropsten',
}

export const SupportedChains: Array<Chain> = [Mainnet, Testnet]
