import { BigNumber } from 'ethers';
import {
  FarmConfig,
  VaultConfig,
  PoolConfig,
} from '@/config/constants/types';
import { Token } from '@/config/web3/tokens';
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
