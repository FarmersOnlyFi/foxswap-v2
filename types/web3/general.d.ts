
import { ChainID } from '/config/web3/chains';

interface Addresses {
  [ChainID.Testnet]: string;
  [ChainID.Mainnet]: string;
}

export type {
  Addresses
};
