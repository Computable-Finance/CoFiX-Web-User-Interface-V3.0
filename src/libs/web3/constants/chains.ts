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

export const Bnbt = {
  name: 'Smart Chain - Testnet',
  chainId: 97,
  shortName: 'bnbt',
  chain: 'BSC',
  network: 'bnbt',
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

export const SupportedChains: Array<Chain> = [Bnbt]
