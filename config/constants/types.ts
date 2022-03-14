
import { Token } from '../web3/tokens';
import { TranslatableText } from '../../types/types';
import { Addresses } from "../../types/web3/general";
import { LPToken } from '../web3/lp-tokens';

interface IfoPoolInfo {
  saleAmount: string;
  raiseAmount: string;
  cakeToBurn: string;
  distributionRatio: number; // Range [0-1]
}

export enum PoolIds {
  poolBasic = 'poolBasic',
  poolUnlimited = 'poolUnlimited',
}

export type IfoStatus = 'idle' | 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string;
  isActive: boolean;
  address: string;
  name: string;
  currency: Token;
  token: Token;
  releaseBlockNumber: number;
  articleUrl: string;
  campaignId: string;
  tokenOfferingPrice: number;
  isV1: boolean;
  [PoolIds.poolBasic]?: IfoPoolInfo;
  [PoolIds.poolUnlimited]: IfoPoolInfo;
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
  'AUTO' = 'Auto',
}

export interface LpPricesConfig {
  name: string;
  lpAddress: Addresses;
  token: Token;
  quoteToken: Token;
}

export interface FarmConfig {
  pid: number;
  lpSymbol: string;
  lpAddresses: Addresses;
  token: Token;
  quoteToken: Token;
  multiplier?: string;
  depositFeeBP?: number;
  isCommunity?: boolean;
  addLiquidityURL: string;
  router?: string;
  color?: string;
  hot?: number;
  dual?: {
    rewardPerBlock: number;
    earnLabel: string;
    endBlock: number;
  };
}

export interface UserVaultData {
  pid: number;
  // eslint-disable-next-line camelcase
  total_deposits: number;
  // eslint-disable-next-line camelcase
  total_withdraw: number;
  // eslint-disable-next-line camelcase
  net_deposit: number;
}

export interface VaultConfig {
  pid: number;
  farmPid: number;
  lpSymbol: string;
  lpToken?: LPToken;
  rewardToken?: Token;
  lpAddresses: Addresses;
  stratAddresses: Addresses;
  token: Token;
  quoteToken: Token;
  bridgePool?: Addresses;
  stakingPoolAddress?: Addresses;
  tqTokenAddress?: Addresses;
  multiplier?: string;
  isCommunity?: boolean;
  router?: Addresses;
  path0?: Array<any>;
  path1?: Array<any>;
  isBurn?: boolean;
  isHot?: boolean;
  isNew?: boolean;
  withdrawFee?: number;
  isPaused?: boolean;
  addLiquidityUrl: string;
  depositFee?: number;
  isSingleAsset?: boolean;
  burnApr?: number;
  chef?: string;
  tag2?: string; // for when farm and router are different
  zapEnabled?: boolean;
  dual?: {
    rewardPerBlock: number;
    earnLabel: string;
    endBlock: number;
  };
}

export interface PoolConfig {
  sousId: number;
  earningToken: Token;
  stakingToken: Token;
  stakingLimit?: number;
  contractAddress: Addresses;
  poolCategory: PoolCategory;
  tokenPerBlock: string;
  sortOrder?: number;
  harvest?: boolean;
  isFinished?: boolean;
  enableEmergencyWithdraw?: boolean;
}

export type Images = {
  lg: string;
  md: string;
  sm: string;
  ipfs?: string;
}

export type NftImages = {
  blur?: string;
} & Images

export type NftVideo = {
  webm: string;
  mp4: string;
}

export type NftSource = {
  [key in NftType]: {
    address: Addresses;
    identifierKey: string;
  }
}

export enum NftType {
  PANCAKE = 'pancake',
  MIXIE = 'mixie',
}

export type Nft = {
  description: string;
  name: string;
  images: NftImages;
  sortOrder: number;
  type: NftType;
  video?: NftVideo;

  // Uniquely identifies the nft.
  // Used for matching an NFT from the config with the data from the NFT's tokenURI
  identifier: string;

  // Used to be "bunnyId". Used when minting NFT
  variationId?: number | string;
}

export type TeamImages = {
  alt: string;
} & Images

export type Team = {
  id: number;
  name: string;
  description: string;
  isJoinable?: boolean;
  users: number;
  points: number;
  images: TeamImages;
  background: string;
  textColor: string;
}

export type CampaignType = 'ifo' | 'teambattle'

export type Campaign = {
  id: string;
  type: CampaignType;
  title?: TranslatableText;
  description?: TranslatableText;
  badge?: string;
}
