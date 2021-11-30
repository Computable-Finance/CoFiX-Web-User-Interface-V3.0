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

interface CoFiXPairInterface extends ethers.utils.Interface {
  functions: {
    '_governance()': FunctionFragment
    'allowance(address,address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'burn(address,address,uint256,address)': FunctionFragment
    'calcRevisedK(uint256,uint256,uint256,uint256,uint256)': FunctionFragment
    'decimals()': FunctionFragment
    'getConfig()': FunctionFragment
    'getNAVPerShare(uint256,uint256)': FunctionFragment
    'getXToken(address)': FunctionFragment
    'impactCostForBuyInETH(uint256)': FunctionFragment
    'impactCostForSellOutETH(uint256)': FunctionFragment
    'init(address,string,string,address,address)': FunctionFragment
    'initialize(address)': FunctionFragment
    'migrate(address,uint256)': FunctionFragment
    'mint(address,address,uint256,uint256,address)': FunctionFragment
    'name()': FunctionFragment
    'setConfig(uint16,uint16,uint96,uint96)': FunctionFragment
    'setNestOpenPrice(address)': FunctionFragment
    'setPriceChannelId(uint256)': FunctionFragment
    'swap(address,address,uint256,address,address)': FunctionFragment
    'symbol()': FunctionFragment
    'totalSupply()': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'update(address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: '_governance', values?: undefined): string
  encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'burn', values: [string, string, BigNumberish, string]): string
  encodeFunctionData(
    functionFragment: 'calcRevisedK',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(functionFragment: 'getConfig', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNAVPerShare', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'getXToken', values: [string]): string
  encodeFunctionData(functionFragment: 'impactCostForBuyInETH', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'impactCostForSellOutETH', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'init', values: [string, string, string, string, string]): string
  encodeFunctionData(functionFragment: 'initialize', values: [string]): string
  encodeFunctionData(functionFragment: 'migrate', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'mint', values: [string, string, BigNumberish, BigNumberish, string]): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setConfig',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'setNestOpenPrice', values: [string]): string
  encodeFunctionData(functionFragment: 'setPriceChannelId', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'swap', values: [string, string, BigNumberish, string, string]): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'update', values: [string]): string

  decodeFunctionResult(functionFragment: '_governance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'calcRevisedK', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getConfig', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNAVPerShare', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getXToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'impactCostForBuyInETH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'impactCostForSellOutETH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setConfig', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setNestOpenPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setPriceChannelId', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'update', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'SwapForToken0(uint256,address,uint256,uint256)': EventFragment
    'SwapForToken1(uint256,address,uint256,uint256)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SwapForToken0'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SwapForToken1'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export class CoFiXPair extends BaseContract {
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

  interface: CoFiXPairInterface

  functions: {
    _governance(overrides?: CallOverrides): Promise<[string]>

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>

    burn(
      token: string,
      to: string,
      liquidity: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    calcRevisedK(
      SIGMA_SQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { k: BigNumber }>

    decimals(overrides?: CallOverrides): Promise<[number]>

    getConfig(overrides?: CallOverrides): Promise<
      [number, number, BigNumber, BigNumber] & {
        theta: number
        theta0: number
        impactCostVOL: BigNumber
        sigmaSQ: BigNumber
      }
    >

    getNAVPerShare(
      ethAmount: BigNumberish,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { navps: BigNumber }>

    getXToken(token: string, overrides?: CallOverrides): Promise<[string]>

    impactCostForBuyInETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { impactCost: BigNumber }>

    impactCostForSellOutETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { impactCost: BigNumber }>

    init(
      governance: string,
      name_: string,
      symbol_: string,
      token0: string,
      token1: string,
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

    name(overrides?: CallOverrides): Promise<[string]>

    setConfig(
      theta: BigNumberish,
      theta0: BigNumberish,
      impactCostVOL: BigNumberish,
      sigmaSQ: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setNestOpenPrice(
      nestOpenPrice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setPriceChannelId(
      channelId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    symbol(overrides?: CallOverrides): Promise<[string]>

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

    update(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  _governance(overrides?: CallOverrides): Promise<string>

  allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

  burn(
    token: string,
    to: string,
    liquidity: BigNumberish,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  calcRevisedK(
    SIGMA_SQ: BigNumberish,
    p0: BigNumberish,
    bn0: BigNumberish,
    p: BigNumberish,
    bn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  decimals(overrides?: CallOverrides): Promise<number>

  getConfig(overrides?: CallOverrides): Promise<
    [number, number, BigNumber, BigNumber] & {
      theta: number
      theta0: number
      impactCostVOL: BigNumber
      sigmaSQ: BigNumber
    }
  >

  getNAVPerShare(ethAmount: BigNumberish, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  getXToken(token: string, overrides?: CallOverrides): Promise<string>

  impactCostForBuyInETH(vol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  impactCostForSellOutETH(vol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  init(
    governance: string,
    name_: string,
    symbol_: string,
    token0: string,
    token1: string,
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

  name(overrides?: CallOverrides): Promise<string>

  setConfig(
    theta: BigNumberish,
    theta0: BigNumberish,
    impactCostVOL: BigNumberish,
    sigmaSQ: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setNestOpenPrice(
    nestOpenPrice: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setPriceChannelId(
    channelId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  swap(
    src: string,
    dest: string,
    amountIn: BigNumberish,
    to: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  symbol(overrides?: CallOverrides): Promise<string>

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

  update(
    newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    _governance(overrides?: CallOverrides): Promise<string>

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

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

    calcRevisedK(
      SIGMA_SQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<number>

    getConfig(overrides?: CallOverrides): Promise<
      [number, number, BigNumber, BigNumber] & {
        theta: number
        theta0: number
        impactCostVOL: BigNumber
        sigmaSQ: BigNumber
      }
    >

    getNAVPerShare(ethAmount: BigNumberish, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getXToken(token: string, overrides?: CallOverrides): Promise<string>

    impactCostForBuyInETH(vol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    impactCostForSellOutETH(vol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    init(
      governance: string,
      name_: string,
      symbol_: string,
      token0: string,
      token1: string,
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

    name(overrides?: CallOverrides): Promise<string>

    setConfig(
      theta: BigNumberish,
      theta0: BigNumberish,
      impactCostVOL: BigNumberish,
      sigmaSQ: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    setNestOpenPrice(nestOpenPrice: string, overrides?: CallOverrides): Promise<void>

    setPriceChannelId(channelId: BigNumberish, overrides?: CallOverrides): Promise<void>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amountOut: BigNumber; mined: BigNumber }>

    symbol(overrides?: CallOverrides): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    update(newGovernance: string, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { owner: string; spender: string; value: BigNumber }>

    SwapForToken0(
      amountIn?: null,
      to?: null,
      amountETHOut?: null,
      mined?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber],
      {
        amountIn: BigNumber
        to: string
        amountETHOut: BigNumber
        mined: BigNumber
      }
    >

    SwapForToken1(
      amountIn?: null,
      to?: null,
      amountTokenOut?: null,
      mined?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber],
      {
        amountIn: BigNumber
        to: string
        amountTokenOut: BigNumber
        mined: BigNumber
      }
    >

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>
  }

  estimateGas: {
    _governance(overrides?: CallOverrides): Promise<BigNumber>

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    burn(
      token: string,
      to: string,
      liquidity: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    calcRevisedK(
      SIGMA_SQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    getConfig(overrides?: CallOverrides): Promise<BigNumber>

    getNAVPerShare(ethAmount: BigNumberish, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getXToken(token: string, overrides?: CallOverrides): Promise<BigNumber>

    impactCostForBuyInETH(vol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    impactCostForSellOutETH(vol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    init(
      governance: string,
      name_: string,
      symbol_: string,
      token0: string,
      token1: string,
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

    name(overrides?: CallOverrides): Promise<BigNumber>

    setConfig(
      theta: BigNumberish,
      theta0: BigNumberish,
      impactCostVOL: BigNumberish,
      sigmaSQ: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setNestOpenPrice(
      nestOpenPrice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setPriceChannelId(
      channelId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

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

    update(newGovernance: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    _governance(overrides?: CallOverrides): Promise<PopulatedTransaction>

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    burn(
      token: string,
      to: string,
      liquidity: BigNumberish,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    calcRevisedK(
      SIGMA_SQ: BigNumberish,
      p0: BigNumberish,
      bn0: BigNumberish,
      p: BigNumberish,
      bn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNAVPerShare(
      ethAmount: BigNumberish,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getXToken(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    impactCostForBuyInETH(vol: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    impactCostForSellOutETH(vol: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    init(
      governance: string,
      name_: string,
      symbol_: string,
      token0: string,
      token1: string,
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

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setConfig(
      theta: BigNumberish,
      theta0: BigNumberish,
      impactCostVOL: BigNumberish,
      sigmaSQ: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setNestOpenPrice(
      nestOpenPrice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setPriceChannelId(
      channelId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      to: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

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

    update(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
