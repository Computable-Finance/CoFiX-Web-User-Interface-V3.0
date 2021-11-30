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

export const BSCT = {
  name: 'Smart Chain - Testnet',
  chainId: 97,
  shortName: 'bsct',
  chain: 'BSC',
  network: 'BSC Testnet',
  networkId: 97,
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpc: [`https://data-seed-prebsc-1-s1.binance.org:8545/`],
  faucets: ['https://testnet.binance.org/faucet-smart'],
  explorers: [
    {
      name: 'testnet bscscan',
      url: 'https://testnet.bscscan.com',
      standard: 'https://testnet.bscscan.com',
    },
  ],
  infoURL: 'https://binance.com',
}

export const SupportedChains: Array<Chain> = [BSCT]
