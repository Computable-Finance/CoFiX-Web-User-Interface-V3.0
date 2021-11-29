import { CoFiXRouterProps } from '../api/CoFiXRouter'
import { NestPriceFacadeProps } from '../api/NestPriceFacade'
import { Mainnet, Testnet } from './chains'

export const NestPriceFacade: NestPriceFacadeProps = {
  addresses: {
    [Mainnet.chainId]: '0xF12F003ee11461dA376C70c03b2E8f1498C3AeA3',
    [Testnet.chainId]: '0xF2f9E62f52389EF223f5Fa8b9926e95386935277',
  },
}

export const CoFiXRouter: CoFiXRouterProps = {
  addresses: {
    [Mainnet.chainId]: '0xb29A8d980E1408E487B9968f5E4f7fD7a9B0CaC5',
    [Testnet.chainId]: '0x4A448cBb12e449D7031f36C8122eCE6dDdf9cc84',
  },
}

