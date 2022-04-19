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
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface CoFiXERC20Interface extends ethers.utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'decimals()': FunctionFragment
    'totalSupply()': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export class CoFiXERC20 extends BaseContract {
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

  interface: CoFiXERC20Interface

  functions: {
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>

    decimals(overrides?: CallOverrides): Promise<[number]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

  decimals(overrides?: CallOverrides): Promise<number>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<number>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>
  }

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { owner: string; spender: string; value: BigNumber }>

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>
  }

  estimateGas: {
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
