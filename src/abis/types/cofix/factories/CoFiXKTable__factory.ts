/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { CoFiXKTable, CoFiXKTableInterface } from '../CoFiXKTable'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'governance',
    outputs: [
      {
        internalType: 'address',
        name: '',
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
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'k0Table',
    outputs: [
      {
        internalType: 'int128',
        name: '',
        type: 'int128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tIdx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'sigmaIdx',
        type: 'uint256',
      },
      {
        internalType: 'int128',
        name: 'k0',
        type: 'int128',
      },
    ],
    name: 'setK0',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'tIdxs',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'sigmaIdxs',
        type: 'uint256[]',
      },
      {
        internalType: 'int128[]',
        name: 'k0s',
        type: 'int128[]',
      },
    ],
    name: 'setK0InBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tIdx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'sigmaIdx',
        type: 'uint256',
      },
    ],
    name: 'getK0',
    outputs: [
      {
        internalType: 'int128',
        name: '',
        type: 'int128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class CoFiXKTable__factory {
  static readonly abi = _abi
  static createInterface(): CoFiXKTableInterface {
    return new utils.Interface(_abi) as CoFiXKTableInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CoFiXKTable {
    return new Contract(address, _abi, signerOrProvider) as CoFiXKTable
  }
}
