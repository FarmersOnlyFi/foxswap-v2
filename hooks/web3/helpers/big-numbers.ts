// TODO: should remove `src\utils\bigNumber.ts` in favor of this file
import BigNumber from 'bignumber.js';
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber';

const BIG_ZERO = new BigNumber(0);
const BIG_ONE = new BigNumber(1);
const BIG_NINE = new BigNumber(9);
const BIG_TEN = new BigNumber(10);

const ethersToSerializedBigNumber = (ethersBn: EthersBigNumber): string =>
  ethersToBigNumber(ethersBn).toJSON();

const ethersToBigNumber = (ethersBn: EthersBigNumber): BigNumber => new BigNumber(ethersBn.toString());

export {
  BIG_ZERO,
  BIG_ONE,
  BIG_NINE,
  BIG_TEN,
  ethersToSerializedBigNumber,
  ethersToBigNumber
};
