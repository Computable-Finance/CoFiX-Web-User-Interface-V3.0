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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NNIncomeInterface extends ethers.utils.Interface {
  functions: {
    "_governance()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "migrate(address,uint256)": FunctionFragment;
    "update(address)": FunctionFragment;
    "setBlockCursor(uint256)": FunctionFragment;
    "nodeCount(address,address)": FunctionFragment;
    "settle(address,address)": FunctionFragment;
    "claim()": FunctionFragment;
    "increment()": FunctionFragment;
    "earned(address)": FunctionFragment;
    "getGeneratedNest()": FunctionFragment;
    "getBlockCursor()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "update", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setBlockCursor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nodeCount",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "settle",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "increment", values?: undefined): string;
  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getGeneratedNest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockCursor",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_governance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBlockCursor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nodeCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGeneratedNest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockCursor",
    data: BytesLike
  ): Result;

  events: {};
}

export class NNIncome extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NNIncomeInterface;

  functions: {
    _governance(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBlockCursor(
      blockCursor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nodeCount(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settle(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increment(overrides?: CallOverrides): Promise<[BigNumber]>;

    earned(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getGeneratedNest(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBlockCursor(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _governance(overrides?: CallOverrides): Promise<string>;

  initialize(
    nestGovernanceAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrate(
    tokenAddress: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update(
    nestGovernanceAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBlockCursor(
    blockCursor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nodeCount(
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settle(
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increment(overrides?: CallOverrides): Promise<BigNumber>;

  earned(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  getGeneratedNest(overrides?: CallOverrides): Promise<BigNumber>;

  getBlockCursor(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _governance(overrides?: CallOverrides): Promise<string>;

    initialize(
      nestGovernanceAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      nestGovernanceAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBlockCursor(
      blockCursor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nodeCount(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    settle(from: string, to: string, overrides?: CallOverrides): Promise<void>;

    claim(overrides?: CallOverrides): Promise<void>;

    increment(overrides?: CallOverrides): Promise<BigNumber>;

    earned(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    getGeneratedNest(overrides?: CallOverrides): Promise<BigNumber>;

    getBlockCursor(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    _governance(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBlockCursor(
      blockCursor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nodeCount(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settle(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increment(overrides?: CallOverrides): Promise<BigNumber>;

    earned(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    getGeneratedNest(overrides?: CallOverrides): Promise<BigNumber>;

    getBlockCursor(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update(
      nestGovernanceAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBlockCursor(
      blockCursor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nodeCount(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settle(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGeneratedNest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBlockCursor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
