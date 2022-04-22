import {
  BASE_HARMONY_SCAN_URL,
  BASE_URL,
  RPC_URL,
  ChainID,
} from 'config/web3/chains';

/**
 * Prompt the user to add Harmony as a network on Metamask, or switch to Harmony if the wallet is on a different network
 * @return {boolean} true if the setup succeeded, false otherwise
 */
const setupNetwork = async (): Promise<boolean> => {
  const provider = window.ethereum;
  if (provider) {

    const chainId = ChainID.Mainnet;
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
            rpcUrls: [RPC_URL],
            blockExplorerUrls: [`${BASE_HARMONY_SCAN_URL}/`]
          }
        ]
      });

      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        // eslint-disable-next-line no-console
        console.error('Failed to setup the network in MetaMask:', error.message);
      } else {
        console.error('Failed to setup the network in MetaMask:', error);
      }
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
