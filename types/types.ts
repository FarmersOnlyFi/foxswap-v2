import { BigNumber } from 'ethers';
import {
  CampaignType,
  FarmConfig,
  VaultConfig,
  Nft,
  PoolConfig,
  Team
} from '../config/constants/types';
import { Token } from '../config/web3/tokens';
import { Addresses } from './web3/general';

export type TranslatableText =
  | string
  | {
  key: string;
  data?: {
    [key: string]: string | number;
  };
}

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber;
  quoteTokenAmount?: BigNumber;
  lpTotalInQuoteToken?: BigNumber;
  lpTotalSupply?: BigNumber;
  tokenPriceVsQuote: BigNumber;
  poolWeight?: BigNumber;
  quoteTokenPerLp?: BigNumber;
  tokenPerLp?: BigNumber;
  usdPerLp?: BigNumber;
  withdrawFee?: number;
  isPaused?: boolean;
  apr?: number;
  apy?: number;
  userData?: {
    allowance: string;
    tokenBalance: string;
    stakedBalance: string;
    earnings: string;
  };
}

export interface LpPrices {
  name: string;
  token: Token;
  quoteToken: Token;
  lpAddress: Addresses;
  price?: BigNumber;
  tokenAmount?: BigNumber;
  quoteTokenAmount?: BigNumber;
}

export interface Vault extends VaultConfig {
  tokenAmount?: BigNumber;
  quoteTokenAmount?: BigNumber;
  lpTotalInQuoteToken?: BigNumber;
  lpTotalSupply?: BigNumber;
  tokenPriceVsQuote: BigNumber;
  quoteTokenPerLp?: BigNumber;
  usdPerLp?: BigNumber;
  farmPoolWeight: BigNumber;
  farmQuoteTokenAmount?: BigNumber;
  farmRewardsPerBlock?: BigNumber;
  lpTokenDecimals?: number;
  userData?: {
    allowance: string;
    tokenBalance: string;
    stakedBalance: string;
    earnings: string;
  };
  userProfitData?: {
    totalDeposit: number;
    totalWithdraw: number;
    NetDeposit: number;
  };
  tranq: {
    totalSupply?: BigNumber;
    totalBorrows?: BigNumber;
    stratWantLockedTotal?: BigNumber;
    stratSupply?: BigNumber;
    stratDebt?: BigNumber;
    supplyRatePerTimestamp?: BigNumber;
    borrowRatePerTimestamp?: BigNumber;
    nativePerYear?: BigNumber;
    tranqPerYear?: BigNumber;
  };
  lockedTranq?: BigNumber[];
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber;
  startBlock?: number;
  endBlock?: number;
  userData?: {
    allowance: BigNumber;
    stakingTokenBalance: BigNumber;
    stakedBalance: BigNumber;
    pendingReward: BigNumber;
    jewelData?: any;
    viperData?: any;
    lootData?: any;
    magicData?: any;
  };
}

export interface FarmWithStakedValue extends Farm {
  apr?: number;
  liquidity?: BigNumber;
}

export interface VaultWithStakedValues extends Vault {
  apr: number;
  apy: number;
  dailyApy?: number;
  liquidity: BigNumber;
}

export interface Profile {
  userId: number;
  points: number;
  teamId: number;
  nftAddress: string;
  tokenId: number;
  isActive: boolean;
  username: string;
  nft?: Nft;
  team: Team;
  hasRegistered: boolean;
}

// Slices states

export interface FarmsState {
  data: Farm[];
  loadArchivedFarmsData: boolean;
  userDataLoaded: boolean;
}

export interface LpPricesState {
  data: LpPrices[];
}

export interface VaultsState {
  data: Vault[];
  loadArchivedVaultsData: boolean;
  userDataLoaded: boolean;
  userProfitDataLoaded: boolean;
}

export interface PoolsState {
  data: Pool[];
}

export interface ProfileState {
  isInitialized: boolean;
  isLoading: boolean;
  hasRegistered: boolean;
  data: Profile;
}

export type TeamResponse = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: boolean;
}

export type TeamsById = {
  [key: string]: Team;
}

export interface TeamsState {
  isInitialized: boolean;
  isLoading: boolean;
  data: TeamsById;
}

export interface Achievement {
  id: string;
  type: CampaignType;
  address: string;
  title: TranslatableText;
  description?: TranslatableText;
  badge: string;
  points: number;
}

export interface AchievementState {
  data: Achievement[];
}

// API Price State
export interface PriceApiList {
  /* eslint-disable camelcase */
  [key: string]: {
    name: string;
    symbol: string;
    price: string;
    price_BNB: string;
  };
}

export interface PriceApiListThunk {
  /* eslint-disable camelcase */
  [key: string]: number;
}

export interface PriceApiResponse {
  /* eslint-disable camelcase */
  updated_at: string;
  data: PriceApiList;
}

export interface PriceApiThunk {
  /* eslint-disable camelcase */
  updated_at: string;
  data: PriceApiListThunk;
}

export interface PriceState {
  isLoading: boolean;
  lastUpdated: string;
  data: PriceApiListThunk;
}

// Block

export interface BlockState {
  currentBlock: number;
  initialBlock: number;
}

// Collectibles

export interface CollectiblesState {
  isInitialized: boolean;
  isLoading: boolean;
  data: {
    [key: string]: number[];
  };
}

// Predictions

export enum BetPosition {
  BULL = 'Bull',
  BEAR = 'Bear',
  HOUSE = 'House',
}

export enum PredictionStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
  ERROR = 'error',
}

export interface Round {
  id: string;
  epoch: number;
  failed?: boolean;
  startBlock: number;
  startAt: number;
  lockAt: number;
  lockBlock: number;
  lockPrice: number;
  endBlock: number;
  closePrice: number;
  totalBets: number;
  totalAmount: number;
  bullBets: number;
  bearBets: number;
  bearAmount: number;
  bullAmount: number;
  position: BetPosition;
  bets?: Bet[];
}

export interface Market {
  id: string;
  paused: boolean;
  epoch: number;
}

export interface Bet {
  id?: string;
  hash?: string;
  amount: number;
  position: BetPosition;
  claimed: boolean;
  user?: PredictionUser;
  round: Round;
}

export interface PredictionUser {
  id: string;
  address: string;
  block: number;
  totalBets: number;
  totalBNB: number;
}

export interface RoundData {
  [key: string]: Round;
}

export interface HistoryData {
  [key: string]: Bet[];
}

export interface BetData {
  [key: string]: {
    [key: string]: Bet;
  };
}

export enum HistoryFilter {
  ALL = 'all',
  COLLECTED = 'collected',
  UNCOLLECTED = 'uncollected',
}

export interface PredictionsState {
  status: PredictionStatus;
  isLoading: boolean;
  isHistoryPaneOpen: boolean;
  isChartPaneOpen: boolean;
  isFetchingHistory: boolean;
  historyFilter: HistoryFilter;
  currentEpoch: number;
  currentRoundStartBlockNumber: number;
  intervalBlocks: number;
  bufferBlocks: number;
  minBetAmount: string;
  lastOraclePrice: string;
  rounds: RoundData;
  history: HistoryData;
  bets: BetData;
}

// Global contexts

export interface State {
  achievements: AchievementState;
  block: BlockState;
  farms: FarmsState;
  vaults: VaultsState;
  prices: PriceState;
  lpPrices: LpPricesState;
  pools: PoolsState;
  predictions: PredictionsState;
  profile: ProfileState;
  teams: TeamsState;
  collectibles: CollectiblesState;
}



import { Cache, SWRConfiguration } from 'swr'
import { Wallet } from 'ethers'
import { Listener, Provider } from '@ethersproject/abstract-provider'
import { Signer } from '@ethersproject/abstract-signer'
import { JsonRpcSigner } from '@ethersproject/providers'
import {} from 'swr/dist/types'
// import { Web3Provider } from '@ethersproject/providers'

// simplified version of Web3Provider from '@ethersproject/providers'
export type Web3Provider = {
  getSigner: () => Signer
  on: (eventName: any, listener: Listener) => any
  // removeListener(eventName: any, listener: any): any
  removeAllListeners(eventName: any): any
}

export interface EthSWRConfigInterface<Data = any, Error = any>
  extends SWRConfiguration<Data, Error> {
  provider?: () => Cache
  ABIs?: Map<string, any>
  signer?: Wallet | JsonRpcSigner // e.g. EtherJs wallet
  web3Provider?: Provider | Web3Provider | any // pass only this e.g (useWeb3React) which has a provider with signer. FallbackProvider or Alchemy or Infura etc don't have the getSigner
  subscribe?: any[] | any
}
