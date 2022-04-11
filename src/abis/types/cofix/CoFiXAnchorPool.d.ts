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
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface CoFiXAnchorPoolInterface extends ethers.utils.Interface {
  functions: {
    '_governance()': FunctionFragment
    'burn(address,address,uint256,address)': FunctionFragment
    'estimate(address,uint256)': FunctionFragment
    'getConfig()': FunctionFragment
    'getXToken(address)': FunctionFragment
    'init(address,uint256,address[],uint96[])': FunctionFragment
    'initialize(address)': FunctionFragment
    'migrate(address,uint256)': FunctionFragment
    'mint(address,address,uint256,uint256,address)': FunctionFragment
    'setConfig(uint16,uint16,uint56)': FunctionFragment
    'skim()': FunctionFragment
    'swap(address,address,uint256,address,address)': FunctionFragment
    'update(address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: '_governance', values?: undefined): string
  encodeFunctionData(functionFragment: 'burn', values: [string, string, BigNumberish, string]): string
  encodeFunctionData(functionFragment: 'estimate', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'getConfig', values?: undefined): string
  encodeFunctionData(functionFragment: 'getXToken', values: [string]): string
  encodeFunctionData(functionFragment: 'init', values: [string, BigNumberish, string[], BigNumberish[]]): string
  encodeFunctionData(functionFragment: 'initialize', values: [string]): string
  encodeFunctionData(functionFragment: 'migrate', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'mint', values: [string, string, BigNumberish, BigNumberish, string]): string
  encodeFunctionData(functionFragment: 'setConfig', values: [BigNumberish, BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'skim', values?: undefined): string
  encodeFunctionData(functionFragment: 'swap', values: [string, string, BigNumberish, string, string]): string
  encodeFunctionData(functionFragment: 'update', values: [string]): string

  decodeFunctionResult(functionFragment: '_governance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'estimate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getConfig', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getXToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setConfig', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'skim', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'update', data: BytesLike): Result

  events: {
    'Burn(address,address,uint256,uint256,uint256)': EventFragment
    'Mint(address,address,uint256,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment
}

export class CoFiXAnchorPool extends BaseContract {
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

  interface: CoFiXAnchorPoolInterface

  functions: {
    _governance(overrides?: CallOverrides): Promise<[string]>

    burn(
      token: string,
      to: string,
      liquidity: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    estimate(
      token: string,
      newBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mined: BigNumber }>

    getConfig(overrides?: CallOverrides): Promise<
      [number, number, BigNumber] & {
        theta: number
        impactCostVOL: number
        nt: BigNumber
      }
    >

    getXToken(token: string, overrides?: CallOverrides): Promise<[string]>

    init(
      governance: string,
      index: BigNumberish,
      tokens: string[],
      bases: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    initialize(
      governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    mint(
      token: string,
      to: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setConfig(
      theta: BigNumberish,
      impactCostVOL: BigNumberish,
      nt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    skim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    update(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  _governance(overrides?: CallOverrides): Promise<string>

  burn(
    token: string,
    to: string,
    liquidity: BigNumberish,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  estimate(token: string, newBalance: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  getConfig(overrides?: CallOverrides): Promise<
    [number, number, BigNumber] & {
      theta: number
      impactCostVOL: number
      nt: BigNumber
    }
  >

  getXToken(token: string, overrides?: CallOverrides): Promise<string>

  init(
    governance: string,
    index: BigNumberish,
    tokens: string[],
    bases: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  initialize(
    governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  migrate(
    tokenAddress: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  mint(
    token: string,
    to: string,
    amountETH: BigNumberish,
    amountToken: BigNumberish,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setConfig(
    theta: BigNumberish,
    impactCostVOL: BigNumberish,
    nt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  skim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  swap(
    src: string,
    dest: string,
    amountIn: BigNumberish,
    to: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  update(
    newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    _governance(overrides?: CallOverrides): Promise<string>

    burn(
      token: string,
      to: string,
      liquidity: BigNumberish,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        amountETHOut: BigNumber
        amountTokenOut: BigNumber
      }
    >

    estimate(token: string, newBalance: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getConfig(overrides?: CallOverrides): Promise<
      [number, number, BigNumber] & {
        theta: number
        impactCostVOL: number
        nt: BigNumber
      }
    >

    getXToken(token: string, overrides?: CallOverrides): Promise<string>

    init(
      governance: string,
      index: BigNumberish,
      tokens: string[],
      bases: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>

    initialize(governance: string, overrides?: CallOverrides): Promise<void>

    migrate(tokenAddress: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>

    mint(
      token: string,
      to: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      payback: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { xtoken: string; liquidity: BigNumber }>

    setConfig(
      theta: BigNumberish,
      impactCostVOL: BigNumberish,
      nt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    skim(overrides?: CallOverrides): Promise<void>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amountOut: BigNumber; mined: BigNumber }>

    update(newGovernance: string, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    Burn(
      token?: null,
      to?: null,
      liquidity?: null,
      amountETHOut?: null,
      amountTokenOut?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        token: string
        to: string
        liquidity: BigNumber
        amountETHOut: BigNumber
        amountTokenOut: BigNumber
      }
    >

    Mint(
      token?: null,
      to?: null,
      amountETH?: null,
      amountToken?: null,
      liquidity?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        token: string
        to: string
        amountETH: BigNumber
        amountToken: BigNumber
        liquidity: BigNumber
      }
    >
  }

  estimateGas: {
    _governance(overrides?: CallOverrides): Promise<BigNumber>

    burn(
      token: string,
      to: string,
      liquidity: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    estimate(token: string, newBalance: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getConfig(overrides?: CallOverrides): Promise<BigNumber>

    getXToken(token: string, overrides?: CallOverrides): Promise<BigNumber>

    init(
      governance: string,
      index: BigNumberish,
      tokens: string[],
      bases: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    initialize(governance: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    mint(
      token: string,
      to: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setConfig(
      theta: BigNumberish,
      impactCostVOL: BigNumberish,
      nt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    skim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    update(newGovernance: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    _governance(overrides?: CallOverrides): Promise<PopulatedTransaction>

    burn(
      token: string,
      to: string,
      liquidity: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    estimate(token: string, newBalance: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getXToken(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    init(
      governance: string,
      index: BigNumberish,
      tokens: string[],
      bases: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    initialize(
      governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    mint(
      token: string,
      to: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setConfig(
      theta: BigNumberish,
      impactCostVOL: BigNumberish,
      nt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    skim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    update(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}