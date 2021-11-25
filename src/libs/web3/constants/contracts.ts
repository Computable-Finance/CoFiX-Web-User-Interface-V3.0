import { CoFiXRouterProps } from '../api/CoFiXRouter'
import { NestPriceFacadeProps } from '../api/NestPriceFacade'
import { Mainnet, Testnet } from './chains'

export const NestPriceFacade: NestPriceFacadeProps = {
  addresses: {
    [Mainnet.chainId]: '0xF2f9E62f52389EF223f5Fa8b9926e95386935277',
    [Testnet.chainId]: '0xF2f9E62f52389EF223f5Fa8b9926e95386935277',
  },
}

export const CoFiXRouter: CoFiXRouterProps = {
  addresses: {
    [Mainnet.chainId]: '0x4A448cBb12e449D7031f36C8122eCE6dDdf9cc84',
    [Testnet.chainId]: '0x4A448cBb12e449D7031f36C8122eCE6dDdf9cc84',
  },
}

