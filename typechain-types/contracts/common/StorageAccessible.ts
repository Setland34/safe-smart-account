/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface StorageAccessibleInterface extends Interface {
  getFunction(
    nameOrSignature: "getStorageAt" | "simulateAndRevert"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getStorageAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateAndRevert",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getStorageAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateAndRevert",
    data: BytesLike
  ): Result;
}

export interface StorageAccessible extends BaseContract {
  connect(runner?: ContractRunner | null): StorageAccessible;
  waitForDeployment(): Promise<this>;

  interface: StorageAccessibleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getStorageAt: TypedContractMethod<
    [offset: BigNumberish, length: BigNumberish],
    [string],
    "view"
  >;

  simulateAndRevert: TypedContractMethod<
    [targetContract: AddressLike, calldataPayload: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getStorageAt"
  ): TypedContractMethod<
    [offset: BigNumberish, length: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "simulateAndRevert"
  ): TypedContractMethod<
    [targetContract: AddressLike, calldataPayload: BytesLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
