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

interface INestMappingInterface extends ethers.utils.Interface {
  functions: {
    'setBuiltinAddress(address,address,address,address,address,address,address,address,address,address)': FunctionFragment
    'getBuiltinAddress()': FunctionFragment
    'getNestTokenAddress()': FunctionFragment
    'getNestNodeAddress()': FunctionFragment
    'getNestLedgerAddress()': FunctionFragment
    'getNestMiningAddress()': FunctionFragment
    'getNTokenMiningAddress()': FunctionFragment
    'getNestPriceFacadeAddress()': FunctionFragment
    'getNestVoteAddress()': FunctionFragment
    'getNestQueryAddress()': FunctionFragment
    'getNnIncomeAddress()': FunctionFragment
    'getNTokenControllerAddress()': FunctionFragment
    'registerAddress(string,address)': FunctionFragment
    'checkAddress(string)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'setBuiltinAddress',
    values: [string, string, string, string, string, string, string, string, string, string]
  ): string
  encodeFunctionData(functionFragment: 'getBuiltinAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNestTokenAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNestNodeAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNestLedgerAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNestMiningAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNTokenMiningAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNestPriceFacadeAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNestVoteAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNestQueryAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNnIncomeAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNTokenControllerAddress', values?: undefined): string
  encodeFunctionData(functionFragment: 'registerAddress', values: [string, string]): string
  encodeFunctionData(functionFragment: 'checkAddress', values: [string]): string

  decodeFunctionResult(functionFragment: 'setBuiltinAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getBuiltinAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNestTokenAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNestNodeAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNestLedgerAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNestMiningAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNTokenMiningAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNestPriceFacadeAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNestVoteAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNestQueryAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNnIncomeAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNTokenControllerAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'registerAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'checkAddress', data: BytesLike): Result

  events: {}
}

export class INestMapping extends BaseContract {
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

  interface: INestMappingInterface

  functions: {
    setBuiltinAddress(
      nestTokenAddress: string,
      nestNodeAddress: string,
      nestLedgerAddress: string,
      nestMiningAddress: string,
      ntokenMiningAddress: string,
      nestPriceFacadeAddress: string,
      nestVoteAddress: string,
      nestQueryAddress: string,
      nnIncomeAddress: string,
      nTokenControllerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getBuiltinAddress(overrides?: CallOverrides): Promise<
      [string, string, string, string, string, string, string, string, string, string] & {
        nestTokenAddress: string
        nestNodeAddress: string
        nestLedgerAddress: string
        nestMiningAddress: string
        ntokenMiningAddress: string
        nestPriceFacadeAddress: string
        nestVoteAddress: string
        nestQueryAddress: string
        nnIncomeAddress: string
        nTokenControllerAddress: string
      }
    >

    getNestTokenAddress(overrides?: CallOverrides): Promise<[string]>

    getNestNodeAddress(overrides?: CallOverrides): Promise<[string]>

    getNestLedgerAddress(overrides?: CallOverrides): Promise<[string]>

    getNestMiningAddress(overrides?: CallOverrides): Promise<[string]>

    getNTokenMiningAddress(overrides?: CallOverrides): Promise<[string]>

    getNestPriceFacadeAddress(overrides?: CallOverrides): Promise<[string]>

    getNestVoteAddress(overrides?: CallOverrides): Promise<[string]>

    getNestQueryAddress(overrides?: CallOverrides): Promise<[string]>

    getNnIncomeAddress(overrides?: CallOverrides): Promise<[string]>

    getNTokenControllerAddress(overrides?: CallOverrides): Promise<[string]>

    registerAddress(
      key: string,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    checkAddress(key: string, overrides?: CallOverrides): Promise<[string]>
  }

  setBuiltinAddress(
    nestTokenAddress: string,
    nestNodeAddress: string,
    nestLedgerAddress: string,
    nestMiningAddress: string,
    ntokenMiningAddress: string,
    nestPriceFacadeAddress: string,
    nestVoteAddress: string,
    nestQueryAddress: string,
    nnIncomeAddress: string,
    nTokenControllerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getBuiltinAddress(overrides?: CallOverrides): Promise<
    [string, string, string, string, string, string, string, string, string, string] & {
      nestTokenAddress: string
      nestNodeAddress: string
      nestLedgerAddress: string
      nestMiningAddress: string
      ntokenMiningAddress: string
      nestPriceFacadeAddress: string
      nestVoteAddress: string
      nestQueryAddress: string
      nnIncomeAddress: string
      nTokenControllerAddress: string
    }
  >

  getNestTokenAddress(overrides?: CallOverrides): Promise<string>

  getNestNodeAddress(overrides?: CallOverrides): Promise<string>

  getNestLedgerAddress(overrides?: CallOverrides): Promise<string>

  getNestMiningAddress(overrides?: CallOverrides): Promise<string>

  getNTokenMiningAddress(overrides?: CallOverrides): Promise<string>

  getNestPriceFacadeAddress(overrides?: CallOverrides): Promise<string>

  getNestVoteAddress(overrides?: CallOverrides): Promise<string>

  getNestQueryAddress(overrides?: CallOverrides): Promise<string>

  getNnIncomeAddress(overrides?: CallOverrides): Promise<string>

  getNTokenControllerAddress(overrides?: CallOverrides): Promise<string>

  registerAddress(
    key: string,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  checkAddress(key: string, overrides?: CallOverrides): Promise<string>

  callStatic: {
    setBuiltinAddress(
      nestTokenAddress: string,
      nestNodeAddress: string,
      nestLedgerAddress: string,
      nestMiningAddress: string,
      ntokenMiningAddress: string,
      nestPriceFacadeAddress: string,
      nestVoteAddress: string,
      nestQueryAddress: string,
      nnIncomeAddress: string,
      nTokenControllerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>

    getBuiltinAddress(overrides?: CallOverrides): Promise<
      [string, string, string, string, string, string, string, string, string, string] & {
        nestTokenAddress: string
        nestNodeAddress: string
        nestLedgerAddress: string
        nestMiningAddress: string
        ntokenMiningAddress: string
        nestPriceFacadeAddress: string
        nestVoteAddress: string
        nestQueryAddress: string
        nnIncomeAddress: string
        nTokenControllerAddress: string
      }
    >

    getNestTokenAddress(overrides?: CallOverrides): Promise<string>

    getNestNodeAddress(overrides?: CallOverrides): Promise<string>

    getNestLedgerAddress(overrides?: CallOverrides): Promise<string>

    getNestMiningAddress(overrides?: CallOverrides): Promise<string>

    getNTokenMiningAddress(overrides?: CallOverrides): Promise<string>

    getNestPriceFacadeAddress(overrides?: CallOverrides): Promise<string>

    getNestVoteAddress(overrides?: CallOverrides): Promise<string>

    getNestQueryAddress(overrides?: CallOverrides): Promise<string>

    getNnIncomeAddress(overrides?: CallOverrides): Promise<string>

    getNTokenControllerAddress(overrides?: CallOverrides): Promise<string>

    registerAddress(key: string, addr: string, overrides?: CallOverrides): Promise<void>

    checkAddress(key: string, overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    setBuiltinAddress(
      nestTokenAddress: string,
      nestNodeAddress: string,
      nestLedgerAddress: string,
      nestMiningAddress: string,
      ntokenMiningAddress: string,
      nestPriceFacadeAddress: string,
      nestVoteAddress: string,
      nestQueryAddress: string,
      nnIncomeAddress: string,
      nTokenControllerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getBuiltinAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNestTokenAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNestNodeAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNestLedgerAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNestMiningAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNTokenMiningAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNestPriceFacadeAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNestVoteAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNestQueryAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNnIncomeAddress(overrides?: CallOverrides): Promise<BigNumber>

    getNTokenControllerAddress(overrides?: CallOverrides): Promise<BigNumber>

    registerAddress(
      key: string,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    checkAddress(key: string, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    setBuiltinAddress(
      nestTokenAddress: string,
      nestNodeAddress: string,
      nestLedgerAddress: string,
      nestMiningAddress: string,
      ntokenMiningAddress: string,
      nestPriceFacadeAddress: string,
      nestVoteAddress: string,
      nestQueryAddress: string,
      nnIncomeAddress: string,
      nTokenControllerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getBuiltinAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNestTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNestNodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNestLedgerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNestMiningAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNTokenMiningAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNestPriceFacadeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNestVoteAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNestQueryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNnIncomeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNTokenControllerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>

    registerAddress(
      key: string,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    checkAddress(key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
