
// MEMO: inspired by pancakeswap project
import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/abstract-provider';
import { Contract } from '@ethersproject/contracts';
import { RPC_PROVIDER } from "@/config/web3/chains";

// Addresses
import {
  getFoxAddress,
  getMasterChefAddress,
  getVaultChefAddress,
  getZapperContractAddress,
  getPredictionsAddress,
  getChainlinkOracleAddress,
  getMulticallAddress,
  getFoxVaultAddress
} from '@/utils/addressHelpers';

// ABI
import hrc20ABI from '@/config/abi/hrc20.json';
import erc721Abi from '@/config/abi/erc721.json';
import foxAbi from '@/config/abi/cake.json';
import masterChef from '@/config/abi/masterchef.json';
import vaultChef from '@/config/abi/vaultChef.json';
import predictionsAbi from '@/config/abi/predictions.json';
import chainlinkOracleAbi from '@/config/abi/chainlinkOracle.json';
import autofoxAbi from '@/config/abi/autofox.json';
import zapperAbi from '@/config/abi/zap.json';
import MultiCallAbi from '@/config/abi/Multicall.json';
import JewelAbi from '@/config/abi/jewel.json';
import WONEAbi from '@/config/abi/weth.json'
import ArgentAbi from '@/config/abi/argent-wallet-detector.json'
import EnsResolverAbi from '@/config/abi/ens-public-resolver.json'
import EnsRegistrarAbi from '@/config/abi/ens-registrar.json'

import {
  getArgentWalletAddress,
  getENSRegistrarAddress,
  getWONEAddress,
} from "@/utils/addressHelpers";
import {utils} from "ethers";

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? RPC_PROVIDER;
  return new Contract(address, abi, signerOrProvider);
};

export const getContractInterface = (abi: any, address: string) => {
  const abiInterface = new utils.Interface(abi)
  return new Contract(address, abiInterface) as any
}

const getHRC20Contract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(hrc20ABI, address, signer);
};

const getErc721Contract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(erc721Abi, address, signer);
};

const getFoxContract = (signer?: Signer | Provider): Contract => {
  return getContract(foxAbi, getFoxAddress(), signer);
};

const getMasterchefContract = (signer?: Signer | Provider): Contract => {
  return getContract(masterChef, getMasterChefAddress(), signer);
};
const getVaultChefContract = (signer?: Signer | Provider): Contract => {
  return getContract(vaultChef, getVaultChefAddress(), signer);
};

const getFoxVaultContract = (signer?: Signer | Provider): Contract => {
  return getContract(autofoxAbi, getFoxVaultAddress(), signer);
};

const getPredictionsContract = (signer?: Signer | Provider): Contract => {
  return getContract(predictionsAbi, getPredictionsAddress(), signer);
};

const getChainlinkOracleContract = (signer?: Signer | Provider): Contract => {
  return getContract(chainlinkOracleAbi, getChainlinkOracleAddress(), signer);
};

const getZapperContract = (signer?: Signer | Provider): Contract => {
  return getContract(zapperAbi, getZapperContractAddress(), signer);
};

const getMulticallContract = (signer?: Signer | Provider): Contract => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer);
};

const getTokenContract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(JewelAbi, address, signer);
};

const getWONEContract = (signer?: Signer | Provider): Contract => {
  return getContract(WONEAbi, getWONEAddress(), signer);
};

const getArgentWalletDetectorContract = (signer?: Signer | Provider): Contract => {
  return getContract(ArgentAbi, getArgentWalletAddress(), signer);
};

const getENSRegistrarContract = (signer?: Signer | Provider): Contract => {
  return getContract(EnsRegistrarAbi, getENSRegistrarAddress(), signer);
};

const getENSResolverContract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(EnsResolverAbi, address, signer);
};

export {
  getContract,
  getHRC20Contract,
  getErc721Contract,
  getFoxContract,
  getMasterchefContract,
  getVaultChefContract,
  getFoxVaultContract,
  getPredictionsContract,
  getChainlinkOracleContract,
  getZapperContract,
  getMulticallContract,
  getTokenContract,
  getWONEContract,
  getArgentWalletDetectorContract,
  getENSRegistrarContract,
  getENSResolverContract,
};
