
enum ChainID {
  Mainnet = 1666600000,
  Testnet = 1666700000
}

const BASE_HARMONY_SCAN_URLS = {
  [ChainID.Mainnet]: 'https://explorer.harmony.one',
  [ChainID.Testnet]: 'https://explorer.pops.one'
};

const BASE_HARMONY_SCAN_URL = BASE_HARMONY_SCAN_URLS[ChainID.Mainnet];

const BASE_URL = 'https://harmony.mochiswap.io';

export {
  ChainID,
  BASE_HARMONY_SCAN_URLS,
  BASE_HARMONY_SCAN_URL,
  BASE_URL
};
