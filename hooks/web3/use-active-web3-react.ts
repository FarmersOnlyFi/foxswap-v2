
// MEMO: inspired by pancakeswap project
import * as React from 'react';
import { StaticJsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { simpleRPCProvider } from './helpers/providers';
import { ChainID } from '@/config/web3/chains';
import { useWeb3React } from "@web3-react/core";


type Web3ReactContectProvider <T> = Web3ReactContextInterface<T> & { library: T }

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */

const useActiveWeb3React = (): Web3ReactContectProvider<Web3Provider | StaticJsonRpcProvider> => {
  const {
    library,
    chainId,
    ...restWeb3React
  } = useWeb3React<Web3Provider>();
  const refEth = React.useRef(library);
  const [provider, setProvider] = React.useState(library ?? simpleRPCProvider);

  React.useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library ?? simpleRPCProvider);
      refEth.current = library;
    }
  }, [library]);

  return {
    library: provider,
    chainId: chainId ?? ChainID.Mainnet,
    ...restWeb3React
  };
};

export default useActiveWeb3React;
