/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export declare namespace IWormhole {
  export type SignatureStruct = {
    r: BytesLike;
    s: BytesLike;
    v: BigNumberish;
    guardianIndex: BigNumberish;
  };

  export type SignatureStructOutput = [string, string, number, number] & {
    r: string;
    s: string;
    v: number;
    guardianIndex: number;
  };

  export type VMStruct = {
    version: BigNumberish;
    timestamp: BigNumberish;
    nonce: BigNumberish;
    emitterChainId: BigNumberish;
    emitterAddress: BytesLike;
    sequence: BigNumberish;
    consistencyLevel: BigNumberish;
    payload: BytesLike;
    guardianSetIndex: BigNumberish;
    signatures: IWormhole.SignatureStruct[];
    hash: BytesLike;
  };

  export type VMStructOutput = [
    number,
    number,
    number,
    number,
    string,
    BigNumber,
    number,
    string,
    number,
    IWormhole.SignatureStructOutput[],
    string
  ] & {
    version: number;
    timestamp: number;
    nonce: number;
    emitterChainId: number;
    emitterAddress: string;
    sequence: BigNumber;
    consistencyLevel: number;
    payload: string;
    guardianSetIndex: number;
    signatures: IWormhole.SignatureStructOutput[];
    hash: string;
  };
}

export declare namespace StdInvariant {
  export type FuzzSelectorStruct = { addr: string; selectors: BytesLike[] };

  export type FuzzSelectorStructOutput = [string, string[]] & {
    addr: string;
    selectors: string[];
  };

  export type FuzzInterfaceStruct = { addr: string; artifacts: string[] };

  export type FuzzInterfaceStructOutput = [string, string[]] & {
    addr: string;
    artifacts: string[];
  };
}

export interface GovernanceTestInterface extends utils.Interface {
  functions: {
    "IS_TEST()": FunctionFragment;
    "buildGovernanceVaa(uint8,uint16,address,address,bytes)": FunctionFragment;
    "buildVaa(bytes)": FunctionFragment;
    "excludeArtifacts()": FunctionFragment;
    "excludeContracts()": FunctionFragment;
    "excludeSenders()": FunctionFragment;
    "failed()": FunctionFragment;
    "setUp()": FunctionFragment;
    "targetArtifactSelectors()": FunctionFragment;
    "targetArtifacts()": FunctionFragment;
    "targetContracts()": FunctionFragment;
    "targetInterfaces()": FunctionFragment;
    "targetSelectors()": FunctionFragment;
    "targetSenders()": FunctionFragment;
    "test_governance()": FunctionFragment;
    "test_governanceCallFailure()": FunctionFragment;
    "test_invalidAction()": FunctionFragment;
    "test_invalidChain()": FunctionFragment;
    "test_invalidModule()": FunctionFragment;
    "test_invalidRecipientContract()": FunctionFragment;
    "test_transferOwnership()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_TEST"
      | "buildGovernanceVaa"
      | "buildVaa"
      | "excludeArtifacts"
      | "excludeContracts"
      | "excludeSenders"
      | "failed"
      | "setUp"
      | "targetArtifactSelectors"
      | "targetArtifacts"
      | "targetContracts"
      | "targetInterfaces"
      | "targetSelectors"
      | "targetSenders"
      | "test_governance"
      | "test_governanceCallFailure"
      | "test_invalidAction"
      | "test_invalidChain"
      | "test_invalidModule"
      | "test_invalidRecipientContract"
      | "test_transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buildGovernanceVaa",
    values: [BigNumberish, BigNumberish, string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "buildVaa", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "excludeArtifacts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeSenders",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "targetArtifactSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetArtifacts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetInterfaces",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetSenders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_governanceCallFailure",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_invalidAction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_invalidChain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_invalidModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_invalidRecipientContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_transferOwnership",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buildGovernanceVaa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buildVaa", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "excludeArtifacts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetArtifactSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetArtifacts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_governance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_governanceCallFailure",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_invalidAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_invalidChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_invalidModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_invalidRecipientContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_array(uint256[])": EventFragment;
    "log_array(int256[])": EventFragment;
    "log_array(address[])": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_array(string,uint256[])": EventFragment;
    "log_named_array(string,int256[])": EventFragment;
    "log_named_array(string,address[])": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(uint256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(int256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(address[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,uint256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,int256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,address[])"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_array_uint256_array_EventObject {
  val: BigNumber[];
}
export type log_array_uint256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_uint256_array_EventObject
>;

export type log_array_uint256_array_EventFilter =
  TypedEventFilter<log_array_uint256_array_Event>;

export interface log_array_int256_array_EventObject {
  val: BigNumber[];
}
export type log_array_int256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_int256_array_EventObject
>;

export type log_array_int256_array_EventFilter =
  TypedEventFilter<log_array_int256_array_Event>;

export interface log_array_address_array_EventObject {
  val: string[];
}
export type log_array_address_array_Event = TypedEvent<
  [string[]],
  log_array_address_array_EventObject
>;

export type log_array_address_array_EventFilter =
  TypedEventFilter<log_array_address_array_Event>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_array_string_uint256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_uint256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_uint256_array_EventObject
>;

export type log_named_array_string_uint256_array_EventFilter =
  TypedEventFilter<log_named_array_string_uint256_array_Event>;

export interface log_named_array_string_int256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_int256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_int256_array_EventObject
>;

export type log_named_array_string_int256_array_EventFilter =
  TypedEventFilter<log_named_array_string_int256_array_Event>;

export interface log_named_array_string_address_array_EventObject {
  key: string;
  val: string[];
}
export type log_named_array_string_address_array_Event = TypedEvent<
  [string, string[]],
  log_named_array_string_address_array_EventObject
>;

export type log_named_array_string_address_array_EventFilter =
  TypedEventFilter<log_named_array_string_address_array_Event>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface GovernanceTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernanceTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    buildGovernanceVaa(
      action: BigNumberish,
      chainId: BigNumberish,
      governanceContract: string,
      governedContract: string,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    buildVaa(
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<[IWormhole.VMStructOutput]>;

    excludeArtifacts(
      overrides?: CallOverrides
    ): Promise<[string[]] & { excludedArtifacts_: string[] }>;

    excludeContracts(
      overrides?: CallOverrides
    ): Promise<[string[]] & { excludedContracts_: string[] }>;

    excludeSenders(
      overrides?: CallOverrides
    ): Promise<[string[]] & { excludedSenders_: string[] }>;

    failed(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setUp(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    targetArtifactSelectors(
      overrides?: CallOverrides
    ): Promise<
      [StdInvariant.FuzzSelectorStructOutput[]] & {
        targetedArtifactSelectors_: StdInvariant.FuzzSelectorStructOutput[];
      }
    >;

    targetArtifacts(
      overrides?: CallOverrides
    ): Promise<[string[]] & { targetedArtifacts_: string[] }>;

    targetContracts(
      overrides?: CallOverrides
    ): Promise<[string[]] & { targetedContracts_: string[] }>;

    targetInterfaces(
      overrides?: CallOverrides
    ): Promise<
      [StdInvariant.FuzzInterfaceStructOutput[]] & {
        targetedInterfaces_: StdInvariant.FuzzInterfaceStructOutput[];
      }
    >;

    targetSelectors(
      overrides?: CallOverrides
    ): Promise<
      [StdInvariant.FuzzSelectorStructOutput[]] & {
        targetedSelectors_: StdInvariant.FuzzSelectorStructOutput[];
      }
    >;

    targetSenders(
      overrides?: CallOverrides
    ): Promise<[string[]] & { targetedSenders_: string[] }>;

    test_governance(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    test_governanceCallFailure(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    test_invalidAction(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    test_invalidChain(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    test_invalidModule(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    test_invalidRecipientContract(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    test_transferOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  buildGovernanceVaa(
    action: BigNumberish,
    chainId: BigNumberish,
    governanceContract: string,
    governedContract: string,
    callData: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  buildVaa(
    payload: BytesLike,
    overrides?: CallOverrides
  ): Promise<IWormhole.VMStructOutput>;

  excludeArtifacts(overrides?: CallOverrides): Promise<string[]>;

  excludeContracts(overrides?: CallOverrides): Promise<string[]>;

  excludeSenders(overrides?: CallOverrides): Promise<string[]>;

  failed(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setUp(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  targetArtifactSelectors(
    overrides?: CallOverrides
  ): Promise<StdInvariant.FuzzSelectorStructOutput[]>;

  targetArtifacts(overrides?: CallOverrides): Promise<string[]>;

  targetContracts(overrides?: CallOverrides): Promise<string[]>;

  targetInterfaces(
    overrides?: CallOverrides
  ): Promise<StdInvariant.FuzzInterfaceStructOutput[]>;

  targetSelectors(
    overrides?: CallOverrides
  ): Promise<StdInvariant.FuzzSelectorStructOutput[]>;

  targetSenders(overrides?: CallOverrides): Promise<string[]>;

  test_governance(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  test_governanceCallFailure(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  test_invalidAction(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  test_invalidChain(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  test_invalidModule(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  test_invalidRecipientContract(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  test_transferOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    buildGovernanceVaa(
      action: BigNumberish,
      chainId: BigNumberish,
      governanceContract: string,
      governedContract: string,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    buildVaa(
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<IWormhole.VMStructOutput>;

    excludeArtifacts(overrides?: CallOverrides): Promise<string[]>;

    excludeContracts(overrides?: CallOverrides): Promise<string[]>;

    excludeSenders(overrides?: CallOverrides): Promise<string[]>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    setUp(overrides?: CallOverrides): Promise<void>;

    targetArtifactSelectors(
      overrides?: CallOverrides
    ): Promise<StdInvariant.FuzzSelectorStructOutput[]>;

    targetArtifacts(overrides?: CallOverrides): Promise<string[]>;

    targetContracts(overrides?: CallOverrides): Promise<string[]>;

    targetInterfaces(
      overrides?: CallOverrides
    ): Promise<StdInvariant.FuzzInterfaceStructOutput[]>;

    targetSelectors(
      overrides?: CallOverrides
    ): Promise<StdInvariant.FuzzSelectorStructOutput[]>;

    targetSenders(overrides?: CallOverrides): Promise<string[]>;

    test_governance(overrides?: CallOverrides): Promise<void>;

    test_governanceCallFailure(overrides?: CallOverrides): Promise<void>;

    test_invalidAction(overrides?: CallOverrides): Promise<void>;

    test_invalidChain(overrides?: CallOverrides): Promise<void>;

    test_invalidModule(overrides?: CallOverrides): Promise<void>;

    test_invalidRecipientContract(overrides?: CallOverrides): Promise<void>;

    test_transferOwnership(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_array(uint256[])"(val?: null): log_array_uint256_array_EventFilter;
    "log_array(int256[])"(val?: null): log_array_int256_array_EventFilter;
    "log_array(address[])"(val?: null): log_array_address_array_EventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_array(string,uint256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_uint256_array_EventFilter;
    "log_named_array(string,int256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_int256_array_EventFilter;
    "log_named_array(string,address[])"(
      key?: null,
      val?: null
    ): log_named_array_string_address_array_EventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    buildGovernanceVaa(
      action: BigNumberish,
      chainId: BigNumberish,
      governanceContract: string,
      governedContract: string,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buildVaa(payload: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    excludeArtifacts(overrides?: CallOverrides): Promise<BigNumber>;

    excludeContracts(overrides?: CallOverrides): Promise<BigNumber>;

    excludeSenders(overrides?: CallOverrides): Promise<BigNumber>;

    failed(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    setUp(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    targetArtifactSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    targetArtifacts(overrides?: CallOverrides): Promise<BigNumber>;

    targetContracts(overrides?: CallOverrides): Promise<BigNumber>;

    targetInterfaces(overrides?: CallOverrides): Promise<BigNumber>;

    targetSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    targetSenders(overrides?: CallOverrides): Promise<BigNumber>;

    test_governance(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    test_governanceCallFailure(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    test_invalidAction(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    test_invalidChain(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    test_invalidModule(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    test_invalidRecipientContract(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    test_transferOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buildGovernanceVaa(
      action: BigNumberish,
      chainId: BigNumberish,
      governanceContract: string,
      governedContract: string,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buildVaa(
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    excludeArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    excludeContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    excludeSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    targetArtifactSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    targetArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetInterfaces(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    test_governance(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    test_governanceCallFailure(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    test_invalidAction(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    test_invalidChain(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    test_invalidModule(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    test_invalidRecipientContract(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    test_transferOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
