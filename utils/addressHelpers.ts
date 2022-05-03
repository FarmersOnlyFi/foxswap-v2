import { ChainID } from "@/config/web3/chains";
import CONTRACT_ADDRESSES from "../config/constants/contract-addresses";
import TOKENS, { TokenSymbol } from "../config/web3/tokens";
import { Addresses } from "../types/web3/general";

export const getAddress = (address: Addresses): string => {
  const mainNetChainId = ChainID.Mainnet;

  return address[mainNetChainId];
};

export const getCakeAddress = () => {
  return getAddress(TOKENS[TokenSymbol.FOX].ADDRESSES);
};
export const getBarAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.barChef);
};
export const getFuzzMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.fuzzMasterChef);
};
export const getQuartzMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.quartzMasterChef);
};
export const getComfyMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.comfyMasterChef);
};
export const getHolyGrailMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.holygrailMasterChef);
};
export const getOpenswapMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.openswapMasterChef);
};
export const getSushiswapMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.sushiswapMasterchef);
};
export const getReverseMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.reverseMasterChef);
};
export const getTranqComprollerAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.tranqComprollerAddress);
};
export const getArtemisMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.artemisMasterChef);
};
export const getPiggyMasterChefAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.piggyMasterChef);
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
export const getOneAddress = () => {
  return getAddress(TOKENS[TokenSymbol.WONE].ADDRESSES);
};
export const getFoxAddress = () => {
  return getAddress(TOKENS[TokenSymbol.FOX].ADDRESSES);
};
export const getLotteryAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.lottery);
};
export const getLotteryTicketAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.lotteryNFT);
};
export const getPancakeProfileAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.pancakeProfile);
};
export const getPancakeRabbitsAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.pancakeRabbits);
};
export const getBunnyFactoryAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.bunnyFactory);
};
export const getClaimRefundAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.claimRefund);
};
export const getPointCenterIfoAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.pointCenterIfo);
};
export const getBunnySpecialAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.bunnySpecial);
};
export const getTradingCompetitionAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.tradingCompetition);
};
export const getEasterNftAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.easterNft);
};
export const getFoxVaultAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.autofox);
};
export const getPredictionsAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.predictions);
};
export const getChainlinkOracleAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.chainlinkOracle);
};
export const getAutoFoxAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.autofox);
};
export const getZapperContractAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.ZAPPER);
};
export const getFactoryV1Address = () => {
  return getAddress(CONTRACT_ADDRESSES.factoryV1);
};
export const getMigratorV2Address = () => {
  return getAddress(CONTRACT_ADDRESSES.migratorV2);
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
export const getBondingAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.bondingAddress);
};
export const getTimelockAddress = () => {
  return getAddress(CONTRACT_ADDRESSES.timelockAddress);
};
export const getMerkleDistribution = () => {
  return getAddress(CONTRACT_ADDRESSES.merkleDistribution)
}
