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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface BitMixInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "deposit"
      | "lightClient"
      | "nonces"
      | "orderMap"
      | "proverContract"
      | "validate"
      | "wbtcToken"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Deposit" | "OrderValidated"): EventFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lightClient",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "orderMap", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "proverContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "wbtcToken", values?: undefined): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lightClient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderMap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proverContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wbtcToken", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    user: AddressLike,
    orderID: BytesLike,
    amount: BigNumberish,
    pubkey: BytesLike
  ];
  export type OutputTuple = [
    user: string,
    orderID: string,
    amount: bigint,
    pubkey: string
  ];
  export interface OutputObject {
    user: string;
    orderID: string;
    amount: bigint;
    pubkey: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderValidatedEvent {
  export type InputTuple = [
    orderID: BytesLike,
    blockhash: BytesLike,
    cipherText: BytesLike
  ];
  export type OutputTuple = [
    orderID: string,
    blockhash: string,
    cipherText: string
  ];
  export interface OutputObject {
    orderID: string;
    blockhash: string;
    cipherText: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BitMix extends BaseContract {
  connect(runner?: ContractRunner | null): BitMix;
  waitForDeployment(): Promise<this>;

  interface: BitMixInterface;

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

  deposit: TypedContractMethod<
    [amount: BigNumberish, pubkey: BytesLike],
    [void],
    "nonpayable"
  >;

  lightClient: TypedContractMethod<[], [string], "view">;

  nonces: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  orderMap: TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, string, string, boolean] & {
        amount: bigint;
        pubkey: string;
        cipherText: string;
        isValidated: boolean;
      }
    ],
    "view"
  >;

  proverContract: TypedContractMethod<[], [string], "view">;

  validate: TypedContractMethod<
    [orderID: BytesLike, proof: BytesLike, publicInputs: BytesLike],
    [void],
    "nonpayable"
  >;

  wbtcToken: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [amount: BigNumberish, pubkey: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lightClient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "orderMap"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, string, string, boolean] & {
        amount: bigint;
        pubkey: string;
        cipherText: string;
        isValidated: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "proverContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "validate"
  ): TypedContractMethod<
    [orderID: BytesLike, proof: BytesLike, publicInputs: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "wbtcToken"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "OrderValidated"
  ): TypedContractEvent<
    OrderValidatedEvent.InputTuple,
    OrderValidatedEvent.OutputTuple,
    OrderValidatedEvent.OutputObject
  >;

  filters: {
    "Deposit(address,bytes32,uint256,bytes32)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "OrderValidated(bytes32,bytes32,bytes)": TypedContractEvent<
      OrderValidatedEvent.InputTuple,
      OrderValidatedEvent.OutputTuple,
      OrderValidatedEvent.OutputObject
    >;
    OrderValidated: TypedContractEvent<
      OrderValidatedEvent.InputTuple,
      OrderValidatedEvent.OutputTuple,
      OrderValidatedEvent.OutputObject
    >;
  };
}
