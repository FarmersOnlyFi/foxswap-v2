
// TODO: should remove `src\utils\formatBalance.ts` in favor of this file

import { BigNumber } from 'ethers';
import {
  BigNumber as EthersBigNumber,
  FixedNumber as EthersFixedNumber,
  FixedNumber
} from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';

import { BIG_TEN } from './big-numbers';

/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */

const getDecimalAmount = (amount: BigNumber, decimals = 18): BigNumber => {
  return BigNumber.from(amount).mul(BIG_TEN.pow(decimals));
};

const getBalanceAmount = (amount: BigNumber, decimals = 18): BigNumber => {
  return BigNumber.from(amount).div(BIG_TEN.pow(decimals));
};

/**
 * This function is not really necessary but is used throughout the site.
 */
// TODO: should remove its use cases
const getBalanceNumber = (balance: BigNumber, decimals = 18): number => {
  return getBalanceAmount(balance, decimals).toNumber();
};

const getFullDisplayBalance = (balance: BigNumber, decimals = 18, displayDecimals?: number): string => {

  return FixedNumber.fromValue(getBalanceAmount(balance, decimals), displayDecimals).toString();
  // return .toFixed(displayDecimals);
};

const formatNumber = (number: number, minPrecision = 2, maxPrecision = 2): string => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision
  };

  return number.toLocaleString(undefined, options);
};

/**
 * Method to format the display of wei given an EthersBigNumber object
 * Note: does NOT round
 */

const formatBigNumber = (number: EthersBigNumber, displayDecimals = 18, decimals = 18): string => {
  const remainder = number.mod(EthersBigNumber.from(10).pow(decimals - displayDecimals));
  return formatUnits(number.sub(remainder), decimals);
};

/**
 * Method to format the display of wei given an EthersBigNumber object with toFixed
 * Note: rounds
 */

const formatBigNumberToFixed = (number: EthersBigNumber, displayDecimals = 18, decimals = 18): string => {
  const formattedString = formatUnits(number, decimals);

  return (+formattedString).toFixed(displayDecimals);
};

/**
 * Formats a FixedNumber like BigNumber
 * i.e. Formats 9763410526137450427.1196 into 9.763 (3 display decimals)
 */

const formatFixedNumber = (number: EthersFixedNumber, displayDecimals = 18, decimals = 18): string => {
  // Remove decimal
  const [leftSide] = number.toString().split('.');

  return formatBigNumber(EthersBigNumber.from(leftSide), displayDecimals, decimals);
};

const formatLocalizedCompactNumber = (number: number): string => {
  // TODO: `en-US` is hardcoded vs. internationalization
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'long',
    maximumSignificantDigits: 2
  }).format(number);
};

export {
  getDecimalAmount,
  getBalanceAmount,
  getFullDisplayBalance,
  formatNumber,
  formatBigNumber,
  formatBigNumberToFixed,
  formatFixedNumber,
  formatLocalizedCompactNumber,
  getBalanceNumber
};
