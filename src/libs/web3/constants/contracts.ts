import { UniswapQuoterProps } from '../api/UniswapQuoter'
import { CoFiXControllerProps } from '../api/CoFiXController'
import { CoFiXDAOProps } from '../api/CoFixDAO'
import { CoFiXRouterProps } from '../api/CoFiXRouter'
import { CoFiXVaultForStakingProps } from '../api/CoFiXVaultForStaking'
import { NestPriceFacadeProps } from '../api/NestPriceFacade'
import { Mainnet, Testnet } from './chains'

export const NestPriceFacade: NestPriceFacadeProps = {
  addresses: {
    [Mainnet.chainId]: '0xF2f9E62f52389EF223f5Fa8b9926e95386935277',
    [Testnet.chainId]: '0xF2f9E62f52389EF223f5Fa8b9926e95386935277',
  },
}

export const UniswapQuoter: UniswapQuoterProps = {
  addresses: {
    [Mainnet.chainId]: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
    [Testnet.chainId]: '0xA3091BbDe2A1517AFf8e38a97A7D755fC36b7Eb9',
  },
}

export const CoFiXDAO: CoFiXDAOProps = {
  addresses: {
    [Mainnet.chainId]: '0x76D8680e763c611f204c974cf2F6c203d44fd124',
    [Testnet.chainId]: '0x76D8680e763c611f204c974cf2F6c203d44fd124',
  },
}

export const CoFiXRouter: CoFiXRouterProps = {
  addresses: {
    [Mainnet.chainId]: '0x4A448cBb12e449D7031f36C8122eCE6dDdf9cc84',
    [Testnet.chainId]: '0x4A448cBb12e449D7031f36C8122eCE6dDdf9cc84',
  },
}

export const CoFiXVaultForStaking: CoFiXVaultForStakingProps = {
  addresses: {
    [Mainnet.chainId]: '0x7Bd4546DEdB397a0f0D7593A7Fa7f2Ceb3ff32E6',
    [Testnet.chainId]: '0x11839c81beBBC82686b0052Cb6F03E9Ae58A9704',
  },
}

export const CoFiXController: CoFiXControllerProps = {
  addresses: {
    [Mainnet.chainId]: '0x8eFFbf9CA7dB20481cE9C25EA4B410b3B835D70E',
    [Testnet.chainId]: '0x59c2EAF8FC22C10C2EB79Be3c23c2916BD0ec81e',
  },
}
