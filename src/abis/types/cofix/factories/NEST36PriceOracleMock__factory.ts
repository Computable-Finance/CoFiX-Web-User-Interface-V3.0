/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { NEST36PriceOracleMock, NEST36PriceOracleMockInterface } from '../NEST36PriceOracleMock'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'nest',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'addressEffect_',
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
    inputs: [],
    name: 'nestToken_',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'priceInfoMap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'latestPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'latestPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredAvgPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredSigmaSQ',
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
      {
        internalType: 'address',
        name: 'payback',
        type: 'address',
      },
    ],
    name: 'latestPriceAndTriggeredPriceInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'latestPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'latestPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredAvgPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredSigmaSQ',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
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
    name: 'latestPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'latestPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'latestPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredAvgPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredSigmaSQ',
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
    name: 'checkPriceNow',
    outputs: [
      {
        internalType: 'uint256',
        name: 'latestPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'latestPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceBlockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredAvgPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredSigmaSQ',
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
      {
        internalType: 'uint256',
        name: 'latestPriceValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredAvgPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'triggeredSigmaSQ',
        type: 'uint256',
      },
    ],
    name: 'feedPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'checkUseNestPrice',
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

export class NEST36PriceOracleMock__factory {
  static readonly abi = _abi
  static createInterface(): NEST36PriceOracleMockInterface {
    return new utils.Interface(_abi) as NEST36PriceOracleMockInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NEST36PriceOracleMock {
    return new Contract(address, _abi, signerOrProvider) as NEST36PriceOracleMock
  }
}
