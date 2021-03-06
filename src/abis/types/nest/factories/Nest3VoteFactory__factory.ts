/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { Nest3VoteFactory, Nest3VoteFactoryInterface } from '../Nest3VoteFactory'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'checkAddress',
    outputs: [
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
    ],
    name: 'addContractAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'superMan',
        type: 'address',
      },
    ],
    name: 'addSuperMan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'superMan',
        type: 'address',
      },
    ],
    name: 'deleteSuperMan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'man',
        type: 'address',
      },
    ],
    name: 'checkOwners',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class Nest3VoteFactory__factory {
  static readonly abi = _abi
  static createInterface(): Nest3VoteFactoryInterface {
    return new utils.Interface(_abi) as Nest3VoteFactoryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Nest3VoteFactory {
    return new Contract(address, _abi, signerOrProvider) as Nest3VoteFactory
  }
}
