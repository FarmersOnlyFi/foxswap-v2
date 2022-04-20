
// MEMO: inspired by pancakeswap project
// Set of helper functions to facilitate wallet setup
import {
  BASE_HARMONY_SCAN_URL,
  BASE_URL
} from 'config/web3/chains';
import { nodes } from './get-rpc-url';

/**
 * Prompt the user to add Harmony as a network on Metamask, or switch to Harmony if the wallet is on a different network
 * @return {boolean} true if the setup succeeded, false otherwise
 */
const setupNetwork = async (): Promise<boolean> => {
  const provider = window.ethereum;
  if (provider) {

    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
    try {
      // @ts-expect-error
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Harmony Mainnet',
            nativeCurrency: {
              name: 'ONE',
              symbol: 'one',
              decimals: 18
            },
            rpcUrls: nodes,
            blockExplorerUrls: [`${BASE_HARMONY_SCAN_URL}/`]
          }
        ]
      });

      return true;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to setup the network in MetaMask:', error.message);
      return false;
    }
  } else {
    // eslint-disable-next-line no-console
    console.error('Can\'t setup the Harmony network on MetaMask because window.ethereum is undefined!');
    return false;
  }
};

/**
 * Prompt the user to add a custom token to MetaMask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @return {boolean} true if the token has been added, false otherwise
 */

const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number
): Promise<void> => {

  // @ts-expect-error
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL}/images/tokens/${tokenAddress}.png`
      }
    }
  });

  return tokenAdded;
};

export {
  setupNetwork,
  registerToken
};
