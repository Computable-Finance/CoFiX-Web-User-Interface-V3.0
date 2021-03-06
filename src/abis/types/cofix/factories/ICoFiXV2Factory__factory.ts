/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { ICoFiXV2Factory, ICoFiXV2FactoryInterface } from '../ICoFiXV2Factory'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'NewController',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'NewDAO',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'NewFeeReceiver',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'feeVault',
        type: 'address',
      },
    ],
    name: 'NewFeeVaultForLP',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'NewGovernance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'NewVaultForCNode',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'NewVaultForLP',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'NewVaultForTrader',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'PairCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'initToken0Amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'initToken1Amount',
        type: 'uint256',
      },
    ],
    name: 'createPair',
    outputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getPair',
    outputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allPairs',
    outputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allPairsLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getTradeMiningStatus',
    outputs: [
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    name: 'setTradeMiningStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getFeeVaultForLP',
    outputs: [
      {
        internalType: 'address',
        name: 'feeVault',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'feeVault',
        type: 'address',
      },
    ],
    name: 'setFeeVaultForLP',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'setGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'setFeeReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'setVaultForLP',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'setVaultForTrader',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'setVaultForCNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new',
        type: 'address',
      },
    ],
    name: 'setDAO',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getController',
    outputs: [
      {
        internalType: 'address',
        name: 'controller',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFeeReceiver',
    outputs: [
      {
        internalType: 'address',
        name: 'feeReceiver',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getVaultForLP',
    outputs: [
      {
        internalType: 'address',
        name: 'vaultForLP',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getVaultForTrader',
    outputs: [
      {
        internalType: 'address',
        name: 'vaultForTrader',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getVaultForCNode',
    outputs: [
      {
        internalType: 'address',
        name: 'vaultForCNode',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDAO',
    outputs: [
      {
        internalType: 'address',
        name: 'dao',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class ICoFiXV2Factory__factory {
  static readonly abi = _abi
  static createInterface(): ICoFiXV2FactoryInterface {
    return new utils.Interface(_abi) as ICoFiXV2FactoryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICoFiXV2Factory {
    return new Contract(address, _abi, signerOrProvider) as ICoFiXV2Factory
  }
}
