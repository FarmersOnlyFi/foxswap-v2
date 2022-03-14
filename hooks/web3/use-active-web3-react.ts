
// MEMO: inspired by pancakeswap project
import * as React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { simpleRPCProvider } from './helpers/providers';

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */

const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const {
    library,
    chainId,
    ...restWeb3React
  } = useWeb3React();
  const refEth = React.useRef(library);
  const [provider, setProvider] = React.useState(library || simpleRPCProvider);

  React.useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || simpleRPCProvider);
      refEth.current = library;
    }
  }, [library]);

  return {
    library: provider,
    chainId: chainId ?? parseInt(process.env.REACT_APP_CHAIN_ID, 10),
    ...restWeb3React
  };
};

export default useActiveWeb3React;
