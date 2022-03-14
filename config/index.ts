
import BigNumber from 'bignumber.js/bignumber';
import { BIG_TEN } from 'utils/helpers/web3/big-numbers';

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
});

export const BSC_BLOCK_TIME = 2;

export const CAKE_PER_BLOCK = new BigNumber(1); // this sux because it can only be a min of 1 with no decimals
export const HARMONY_BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365);
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * (60 / 20) * 24 * 365); // 10512000 // div 20 because of
export const BLOCKS_PER_DAY = new BigNumber((60 / BSC_BLOCK_TIME) * (60 / 20) * 24); // 10512000 // 310 is .85 of 365 - yes what a hack.
export const CAKE_PER_YEAR = CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR);

export const BASE_EXCHANGE_URL = 'https://app.foxswap.com/';

export const LOTTERY_TICKET_PRICE = 1;
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18);
