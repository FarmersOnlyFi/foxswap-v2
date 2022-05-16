
import * as React from 'react';
import { Contract } from '@ethersproject/contracts';
import useActiveWeb3React from './use-active-web3-react';

import {
  getFoxContract,
  getMasterchefContract,
  getErc721Contract,
  getFoxVaultContract,
  getPredictionsContract,
  getChainlinkOracleContract,
  getVaultChefContract,
  getZapperContract,
  getTokenContract,
  getENSRegistrarContract,
  getENSResolverContract
} from './contract-helpers';


const useERC721 = (address: string): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getErc721Contract(address, library.getSigner()), [address, library]);
};

const useFox = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getFoxContract(library.getSigner()), [library]);
};

const useMasterchef = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getMasterchefContract(library.getSigner()), [library]);
};

const useVaultchef = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getVaultChefContract(library.getSigner()), [library]);
};

const useZapperContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getZapperContract(library.getSigner()), [library]);
};

const useFoxVaultContract = (): Contract => {
  const {
    account,
    library
  } = useActiveWeb3React();

  return React.useMemo(() => getFoxVaultContract(library.getSigner()), [library, account]);
};

const usePredictionsContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getPredictionsContract(library.getSigner()), [library]);
};

const useChainlinkOracleContract = (): Contract => {
  const { library } = useActiveWeb3React();

  return React.useMemo(() => getChainlinkOracleContract(library.getSigner()), [library]);
};

const useTokenContract = (address: string): Contract => {
  const { library } = useActiveWeb3React();
  return React.useMemo(() => getTokenContract(address, library.getSigner()), [library]);
};

export const useENSRegistrarContract = (): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getENSRegistrarContract(library.getSigner()), [library]);
};

export const useENSResolverContract = (address: string): Contract | null => {
  const { library } = useActiveWeb3React()
  return React.useMemo(() => getENSResolverContract(address, library.getSigner()), [library]);
};

export {
  useERC721,
  useFox,
  useMasterchef,
  useVaultchef,
  useZapperContract,
  useFoxVaultContract,
  usePredictionsContract,
  useChainlinkOracleContract,
  useTokenContract
};
