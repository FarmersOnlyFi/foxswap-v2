
import { BIG_TEN } from '@/hooks/web3/helpers/big-numbers';
import { BigNumber } from 'ethers';
import {JSBI} from "@foxswap/sdk";

export const BLOCK_TIME = 2;
export const CAKE_PER_BLOCK = BigNumber.from(1); // this sux because it can only be a min of 1 with no decimals
export const BLOCKS_PER_YEAR = BigNumber.from((60 / BLOCK_TIME) * (60 / 20) * 24 * 365); // 10512000 // div 20 because of
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18);
export const INITIAL_ALLOWED_SLIPPAGE = 50
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20
export const BIPS_BASE = JSBI.BigInt(10000)
