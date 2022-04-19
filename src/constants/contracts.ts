import { CoFiXRouterProps } from '../api/CoFiXRouter'
import { NestPriceFacadeProps } from '../api/NestPriceFacade'
import { BSC, BSCT } from './chains'

export const NestPriceFacade: NestPriceFacadeProps = {
  addresses: {
    [BSC.chainId]: '0x09CE0e021195BA2c1CDE62A8B187abf810951540',
    [BSCT.chainId]: '0xF2f9E62f52389EF223f5Fa8b9926e95386935277',
  },
}

export const CoFiXRouter: CoFiXRouterProps = {
  addresses: {
    [BSC.chainId]: '0xb29A8d980E1408E487B9968f5E4f7fD7a9B0CaC5',
    [BSCT.chainId]: '0x4A448cBb12e449D7031f36C8122eCE6dDdf9cc84',
  },
}
