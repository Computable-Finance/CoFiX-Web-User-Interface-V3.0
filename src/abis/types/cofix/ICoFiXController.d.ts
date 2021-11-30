/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ICoFiXControllerInterface extends ethers.utils.Interface {
  functions: {
    'calcK(uint256,uint256)': FunctionFragment
    'calcRevisedK(uint256,uint256,uint256,uint256,uint256)': FunctionFragment
    'latestPriceInfo(address,address)': FunctionFragment
    'queryOracle(address,address)': FunctionFragment
    'queryPrice(address,address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'calcK', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'calcRevisedK',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'latestPriceInfo', values: [string, string]): string
  encodeFunctionData(functionFragment: 'queryOracle', values: [string, string]): string
  encodeFunctionData(functionFragment: 'queryPrice', values: [string, string]): string

  decodeFunctionResult(functionFragment: 'calcK', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'calcRevisedK', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestPriceInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'queryOracle', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'queryPrice', data: BytesLike): Result

  events: {}
}

export class ICoFiXController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ICoFiXControllerInterface

  functions: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & { k: BigNumber }>

    calcRevisedK(
      sigmaSQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { k: BigNumber }>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  calcRevisedK(
    sigmaSQ: BigNumberish,
    p0: BigNumberish,
    bn0: BigNumberish,
    p: BigNumberish,
    bn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  latestPriceInfo(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  queryOracle(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  queryPrice(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    calcRevisedK(
      sigmaSQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber
        priceEthAmount: BigNumber
        priceTokenAmount: BigNumber
        avgPriceEthAmount: BigNumber
        avgPriceTokenAmount: BigNumber
        sigmaSQ: BigNumber
      }
    >

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        k: BigNumber
        ethAmount: BigNumber
        tokenAmount: BigNumber
        blockNumber: BigNumber
      }
    >

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber
        tokenAmount: BigNumber
        blockNumber: BigNumber
      }
    >
  }

  filters: {}

  estimateGas: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    calcRevisedK(
      sigmaSQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    calcRevisedK(
      sigmaSQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
