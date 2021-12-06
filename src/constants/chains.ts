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

const INFURA_API_KEY = process.env.REACT_APP_INFURA_KEY

export const Mainnet = {
  name: 'Ethereum Mainnet',
  chainId: 1,
  shortName: 'eth',
  chain: 'ETH',
  network: 'mainnet',
  networkId: 1,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpc: [
    `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
    `wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}`,
    'https://api.mycryptoapi.com/eth',
    'https://cloudflare-eth.com',
  ],
  faucets: [],
  explorers: [
    {
      name: 'etherscan',
      url: 'https://etherscan.io',
      standard: 'EIP3091',
    },
  ],
  infoURL: 'https://ethereum.org',
}

export const Rinkeby = {
  name: 'Ethereum Testnet Rinkeby',
  chainId: 4,
  shortName: 'rin',
  chain: 'ETH',
  network: 'rinkeby',
  networkId: 4,
  nativeCurrency: {
    name: 'Rinkeby Ether',
    symbol: 'RIN',
    decimals: 18,
  },
  rpc: [`https://rinkeby.infura.io/v3/${INFURA_API_KEY}`, `wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}`],
  faucets: ['https://faucet.rinkeby.io'],
  explorers: [],
  infoURL: 'https://www.rinkeby.io',
}

export const SupportedChains: Array<Chain> = [Mainnet, Rinkeby]
