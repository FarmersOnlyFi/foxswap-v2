import { StaticJsonRpcProvider } from "@ethersproject/providers";

enum ChainID {
  Mainnet = 1666600000,
  Testnet = 1666700000
}

const BASE_HARMONY_SCAN_URLS = {
  [ChainID.Mainnet]: 'https://explorer.harmony.one',
  [ChainID.Testnet]: 'https://explorer.pops.one'
};

const RPC_URL = "https://rpc.foxswap.fi"
const RPC_PROVIDER = new StaticJsonRpcProvider("https://rpc.foxswap.fi")
const BASE_HARMONY_SCAN_URL = BASE_HARMONY_SCAN_URLS[ChainID.Mainnet];
const BASE_URL = 'https://foxswap.one';

export {
  ChainID,
  RPC_URL,
  RPC_PROVIDER,
  BASE_HARMONY_SCAN_URLS,
  BASE_HARMONY_SCAN_URL,
  BASE_URL
};
