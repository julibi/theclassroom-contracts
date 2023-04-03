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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IMoonpageManagerInterface extends utils.Interface {
  functions: {
    "distributeShares(uint256)": FunctionFragment;
    "editionOfToken(uint256,uint256)": FunctionFragment;
    "exists(uint256)": FunctionFragment;
    "increaseBalance(uint256,uint256)": FunctionFragment;
    "increaseCurrentTokenId(uint256)": FunctionFragment;
    "isPaused(uint256)": FunctionFragment;
    "projectIdOfToken(uint256)": FunctionFragment;
    "readAuthorShare(uint256)": FunctionFragment;
    "readBaseData(uint256)": FunctionFragment;
    "readContribution(uint256,uint256)": FunctionFragment;
    "readContributionIndex(uint256)": FunctionFragment;
    "readEditionData(uint256)": FunctionFragment;
    "setIsBaseDataFrozen(uint256,bool)": FunctionFragment;
    "setIsPaused(uint256,bool)": FunctionFragment;
    "setPremintedByCreator(uint256,uint256)": FunctionFragment;
    "setupProject(address,address,uint256,string,string,string,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "distributeShares"
      | "editionOfToken"
      | "exists"
      | "increaseBalance"
      | "increaseCurrentTokenId"
      | "isPaused"
      | "projectIdOfToken"
      | "readAuthorShare"
      | "readBaseData"
      | "readContribution"
      | "readContributionIndex"
      | "readEditionData"
      | "setIsBaseDataFrozen"
      | "setIsPaused"
      | "setPremintedByCreator"
      | "setupProject"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "distributeShares",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "editionOfToken",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseBalance",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseCurrentTokenId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPaused",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdOfToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readAuthorShare",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readBaseData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readContribution",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readContributionIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readEditionData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsBaseDataFrozen",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsPaused",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPremintedByCreator",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setupProject",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "distributeShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "editionOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseCurrentTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "projectIdOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readAuthorShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readBaseData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readContribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readContributionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readEditionData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsBaseDataFrozen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPremintedByCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setupProject",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IMoonpageManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMoonpageManagerInterface;

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
    distributeShares(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    editionOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exists(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    increaseBalance(
      _projectId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    increaseCurrentTokenId(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    projectIdOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    readAuthorShare(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    readBaseData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber
      ]
    >;

    readContribution(
      _projectId: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, BigNumber]>;

    readContributionIndex(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    readEditionData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    setIsBaseDataFrozen(
      _projectId: PromiseOrValue<BigNumberish>,
      _shouldBeFrozen: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIsPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPremintedByCreator(
      _projectId: PromiseOrValue<BigNumberish>,
      _premintedByCreator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setupProject(
      _caller: PromiseOrValue<string>,
      _royaltiesSplitter: PromiseOrValue<string>,
      _projectId: PromiseOrValue<BigNumberish>,
      _title: PromiseOrValue<string>,
      _textCID: PromiseOrValue<string>,
      _originalLanguage: PromiseOrValue<string>,
      _initialMintPrice: PromiseOrValue<BigNumberish>,
      _firstEditionAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  distributeShares(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  editionOfToken(
    _projectId: PromiseOrValue<BigNumberish>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exists(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  increaseBalance(
    _projectId: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  increaseCurrentTokenId(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isPaused(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  projectIdOfToken(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  readAuthorShare(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  readBaseData(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      BigNumber
    ]
  >;

  readContribution(
    _projectId: PromiseOrValue<BigNumberish>,
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber, BigNumber]>;

  readContributionIndex(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  readEditionData(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  setIsBaseDataFrozen(
    _projectId: PromiseOrValue<BigNumberish>,
    _shouldBeFrozen: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIsPaused(
    _projectId: PromiseOrValue<BigNumberish>,
    _state: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPremintedByCreator(
    _projectId: PromiseOrValue<BigNumberish>,
    _premintedByCreator: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setupProject(
    _caller: PromiseOrValue<string>,
    _royaltiesSplitter: PromiseOrValue<string>,
    _projectId: PromiseOrValue<BigNumberish>,
    _title: PromiseOrValue<string>,
    _textCID: PromiseOrValue<string>,
    _originalLanguage: PromiseOrValue<string>,
    _initialMintPrice: PromiseOrValue<BigNumberish>,
    _firstEditionAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    distributeShares(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    editionOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exists(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseBalance(
      _projectId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseCurrentTokenId(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    projectIdOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readAuthorShare(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    readBaseData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber
      ]
    >;

    readContribution(
      _projectId: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, BigNumber]>;

    readContributionIndex(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readEditionData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    setIsBaseDataFrozen(
      _projectId: PromiseOrValue<BigNumberish>,
      _shouldBeFrozen: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPremintedByCreator(
      _projectId: PromiseOrValue<BigNumberish>,
      _premintedByCreator: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setupProject(
      _caller: PromiseOrValue<string>,
      _royaltiesSplitter: PromiseOrValue<string>,
      _projectId: PromiseOrValue<BigNumberish>,
      _title: PromiseOrValue<string>,
      _textCID: PromiseOrValue<string>,
      _originalLanguage: PromiseOrValue<string>,
      _initialMintPrice: PromiseOrValue<BigNumberish>,
      _firstEditionAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    distributeShares(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    editionOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exists(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseBalance(
      _projectId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    increaseCurrentTokenId(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readAuthorShare(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readBaseData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readContribution(
      _projectId: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readContributionIndex(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readEditionData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setIsBaseDataFrozen(
      _projectId: PromiseOrValue<BigNumberish>,
      _shouldBeFrozen: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIsPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPremintedByCreator(
      _projectId: PromiseOrValue<BigNumberish>,
      _premintedByCreator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setupProject(
      _caller: PromiseOrValue<string>,
      _royaltiesSplitter: PromiseOrValue<string>,
      _projectId: PromiseOrValue<BigNumberish>,
      _title: PromiseOrValue<string>,
      _textCID: PromiseOrValue<string>,
      _originalLanguage: PromiseOrValue<string>,
      _initialMintPrice: PromiseOrValue<BigNumberish>,
      _firstEditionAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    distributeShares(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    editionOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exists(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseBalance(
      _projectId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    increaseCurrentTokenId(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdOfToken(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readAuthorShare(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readBaseData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readContribution(
      _projectId: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readContributionIndex(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readEditionData(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setIsBaseDataFrozen(
      _projectId: PromiseOrValue<BigNumberish>,
      _shouldBeFrozen: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIsPaused(
      _projectId: PromiseOrValue<BigNumberish>,
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPremintedByCreator(
      _projectId: PromiseOrValue<BigNumberish>,
      _premintedByCreator: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setupProject(
      _caller: PromiseOrValue<string>,
      _royaltiesSplitter: PromiseOrValue<string>,
      _projectId: PromiseOrValue<BigNumberish>,
      _title: PromiseOrValue<string>,
      _textCID: PromiseOrValue<string>,
      _originalLanguage: PromiseOrValue<string>,
      _initialMintPrice: PromiseOrValue<BigNumberish>,
      _firstEditionAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
