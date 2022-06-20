import { ChainID } from "@/config/data/chains";
import CONTRACT_ADDRESSES from "@/config/constants/contract-addresses";
import TOKENS, { TokenSymbol } from "@/config/data/tokens";
import { Addresses } from "@/config/constants/types";

export const getAddress = (address: Addresses): string => {
  const mainNetChainId = ChainID.Mainnet;

  return address[mainNetChainId];
};

export const getFoxAddress = () => {
  return getAddress(TOKENS[TokenSymbol.FOX].ADDRESSES);
};

export const getMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.masterChef);
};

export const getVaultChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.vaultChef);
};

export const getMulticallAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.multiCall);
};

export const getFoxVaultAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.autofox);
};

export const getFactoryAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.foxFactory);
};

export const getPredictionsAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.predictions);
};

export const getChainlinkOracleAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.chainlinkOracle);
};

export const getZapperContractAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.ZAPPER);
};

export const getWONEAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.WONE);
};

export const getArgentWalletAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.argentWallet);
};

export const getENSRegistrarAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.ENSRegistrar);
};

export const getGovernanceAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.governanceAddress);
};

export const getGovTokenAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.govToken);
};

export const getMasterBreeder = () => {
  return getAddress(CONTRACT_ADDRESSES.masterBreeder);
};

export const getPitAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.pitAddress);
};

export const getPitBreeder = () => {
  return getAddress(CONTRACT_ADDRESSES.pitBreeder);
};

export const getSocksController = () => {
  return getAddress(CONTRACT_ADDRESSES.socksController);
};

export const getRouterAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.routerAddress);
};

export const getMerkleDistribution = () => {
  return getAddress(CONTRACT_ADDRESSES.merkleDistribution);
};
