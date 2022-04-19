// TODO: should remove `src\utils\bigNumber.ts` in favor of this file
// import BigNumber from 'bignumber.js';
import { BigNumber, BigNumber as EthersBigNumber } from '@ethersproject/bignumber';
import { ethers } from 'ethers';

const BIG_ZERO = ethers.constants.Zero;
const BIG_ONE = ethers.constants.One;
const BIG_NINE = BigNumber.from(9);
const BIG_TEN = BigNumber.from(10);

const ethersToSerializedBigNumber = (ethersBn: EthersBigNumber): string =>
  ethersToBigNumber(ethersBn).toJSON();

const ethersToBigNumber = (ethersBn: EthersBigNumber): BigNumber => BigNumber.from(ethersBn.toString());

export {
  BIG_ZERO,
  BIG_ONE,
  BIG_NINE,
  BIG_TEN,
  ethersToSerializedBigNumber,
  ethersToBigNumber
};
