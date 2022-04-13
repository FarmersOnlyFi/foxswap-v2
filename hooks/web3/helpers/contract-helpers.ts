
// MEMO: inspired by pancakeswap project
import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/abstract-provider';
import { Contract } from '@ethersproject/contracts';
import { simpleRPCProvider } from './providers';
import { poolsConfig } from '@/config/constants';
import { PoolCategory } from '@/config/constants/types';

// Addresses
import {
  getAddress,
  getPancakeProfileAddress,
  getPancakeRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
  getCakeAddress,
  getLotteryAddress,
  getBarAddress,
  getLotteryTicketAddress,
  getMasterChefAddress,
  getVaultChefAddress,
  getPointCenterIfoAddress,
  getClaimRefundAddress,
  getTradingCompetitionAddress,
  getEasterNftAddress,
  getZapperContractAddress,
  getPredictionsAddress,
  getChainlinkOracleAddress,
  getAutoFoxAddress,
  getMulticallAddress,
  getFoxVaultAddress
} from '../../../utils/addressHelpers';

// ABI
import profileABI from '../../../config/abi/pancakeProfile.json';
import pancakeRabbitsAbi from '../../../config/abi/pancakeRabbits.json';
import bunnyFactoryAbi from '../../../config/abi/bunnyFactory.json';
import bunnySpecialAbi from '../../../config/abi/bunnySpecial.json';
import hrc20ABI from '../../../config/abi/hrc20.json';
import erc721Abi from '../../../config/abi/erc721.json';
import cakeAbi from '../../../config/abi/cake.json';
import ifoV1Abi from '../../../config/abi/ifoV1.json';
import ifoV2Abi from '../../../config/abi/ifoV2.json';
import pointCenterIfo from '../../../config/abi/pointCenterIfo.json';
import lotteryAbi from '../../../config/abi/lottery.json';
import barAbi from '../../../config/abi/mochiBar.json';
import hMochiAbi from '../../../config/abi/hMochi.json';
import lotteryTicketAbi from '../../../config/abi/lotteryNft.json';
import masterChef from '../../../config/abi/masterchef.json';
import vaultChef from '../../../config/abi/vaultChef.json';
import sousChef from '../../../config/abi/sousChef.json';
import sousChefV2 from '../../../config/abi/sousChefV2.json';
import sousChefBnb from '../../../config/abi/sousChefBnb.json';
import claimRefundAbi from '../../../config/abi/claimRefund.json';
import tradingCompetitionAbi from '../../../config/abi/tradingCompetition.json';
import easterNftAbi from '../../../config/abi/easterNft.json';
import predictionsAbi from '../../../config/abi/predictions.json';
import chainlinkOracleAbi from '../../../config/abi/chainlinkOracle.json';
import autofoxAbi from '../../../config/abi/autofox.json';
import zapperAbi from '../../../config/abi/zap.json';
import MultiCallAbi from '../../../config/abi/Multicall.json';
import JewelAbi from '../../../config/abi/jewel.json';
import FactoryV1 from '../../../config/abi/v1_factory.json'
import ExchangeV1 from '../../../config/abi/v1_exchange.json'
import MigratorAbi from '../../../config/abi/migrator.json'
import WONEAbi from '../../../config/abi/weth.json'
import ArgentAbi from '../../../config/abi/argent-wallet-detector.json'
import EnsResolverAbi from '../../../config/abi/ens-public-resolver.json'
import EnsRegistrarAbi from '../../../config/abi/ens-registrar.json'
import Byte32Abi from '../../../config/abi/erc20_bytes32.json'
import MasterBreederAbi from '../../../config/abi/masterchef.json'
import PitAbi from '../../../config/abi/gov-token.json'
import BondAbi from '../../../config/abi/custom-bond.json'
import SocksControllerAbi from '../../../config/abi/unisocks.json'
import { abi as PairAbi } from '@foxswap/core/build/IUniswapV2Pair.json'
import { abi as MerkleAbi } from '@uniswap/merkle-distributor/build/MerkleDistributor.json'
import { abi as GovernanceAbi } from '@uniswap/governance/build/GovernorAlpha.json'
import { abi as UniAbi } from '@uniswap/governance/build/Uni.json'
import { abi as GovTokenAbi } from '@venomswap/contracts/build/GovernanceToken.json'
import { abi as StakingRewardsAbi } from '@uniswap/liquidity-staker/build/StakingRewards.json'
import { abi as PitBreederAbi } from '@venomswap/contracts/build/PitBreeder.json'
import {
  getArgentWalletAddress,
  getENSRegistrarAddress,
  getFactoryV1Address,
  getGovernanceAddress,
  getGovTokenAddress,
  getMasterBreeder,
  getMerkleDistribution,
  getMigratorV2Address,
  getPitAddress,
  getPitBreeder,
  getSocksController,
  getWONEAddress,
} from "../../../utils/addressHelpers";

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRPCProvider;
  return new Contract(address, abi, signerOrProvider);
};

const getHRC20Contract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(hrc20ABI, address, signer);
};
const getErc721Contract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(erc721Abi, address, signer);
};
const getIfoV1Contract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(ifoV1Abi, address, signer);
};
const getIfoV2Contract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(ifoV2Abi, address, signer);
};
const getSousChefContract = (id: number, signer?: Signer | Provider): Contract => {
  const config = poolsConfig.find(pool => pool.sousId === id);
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef;
  return getContract(abi, getAddress(config.contractAddress), signer);
};
const getSousChefV2Contract = (id: number, signer?: Signer | Provider): Contract => {
  const config = poolsConfig.find(pool => pool.sousId === id);
  return getContract(sousChefV2, getAddress(config.contractAddress), signer);
};
const getPointCenterIfoContract = (signer?: Signer | Provider): Contract => {
  return getContract(pointCenterIfo, getPointCenterIfoAddress(), signer);
};
const getCakeContract = (signer?: Signer | Provider): Contract => {
  return getContract(cakeAbi, getCakeAddress(), signer);
};
const gethMochiAbi = (signer?: Signer | Provider): Contract => {
  return getContract(hMochiAbi, getCakeAddress(), signer);
};
const getProfileContract = (signer?: Signer | Provider): Contract => {
  return getContract(profileABI, getPancakeProfileAddress(), signer);
};
const getPancakeRabbitContract = (signer?: Signer | Provider): Contract => {
  return getContract(pancakeRabbitsAbi, getPancakeRabbitsAddress(), signer);
};
const getBunnyFactoryContract = (signer?: Signer | Provider): Contract => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress(), signer);
};
const getBunnySpecialContract = (signer?: Signer | Provider): Contract => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress(), signer);
};
const getLotteryContract = (signer?: Signer | Provider): Contract => {
  return getContract(lotteryAbi, getLotteryAddress(), signer);
};
const getBarContract = (signer?: Signer | Provider): Contract => {
  return getContract(barAbi, getBarAddress(), signer);
};
const getLotteryTicketContract = (signer?: Signer | Provider): Contract => {
  return getContract(lotteryTicketAbi, getLotteryTicketAddress(), signer);
};
const getMasterchefContract = (signer?: Signer | Provider): Contract => {
  return getContract(masterChef, getMasterChefAddress(), signer);
};
const getVaultChefContract = (signer?: Signer | Provider): Contract => {
  return getContract(vaultChef, getVaultChefAddress(), signer);
};
const getClaimRefundContract = (signer?: Signer | Provider): Contract => {
  return getContract(claimRefundAbi, getClaimRefundAddress(), signer);
};
const getTradingCompetitionContract = (signer?: Signer | Provider): Contract => {
  return getContract(tradingCompetitionAbi, getTradingCompetitionAddress(), signer);
};
const getEasterNftContract = (signer?: Signer | Provider): Contract => {
  return getContract(easterNftAbi, getEasterNftAddress(), signer);
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
const getAutofoxContract = (signer?: Signer | Provider): Contract => {
  return getContract(autofoxAbi, getAutoFoxAddress(), signer);
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
const getFactoryV1Contract = (signer?: Signer | Provider): Contract => {
  return getContract(FactoryV1, getFactoryV1Address(), signer);
}
const getExchangeV1Contract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(ExchangeV1, address, signer);
};

const getMigratorV2Contract = (signer?: Signer | Provider): Contract => {
  return getContract(MigratorAbi, getMigratorV2Address(), signer);
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

const getBytes32TokenContract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(Byte32Abi, address, signer);
};

const getUniContract = (signer?: Signer | Provider): Contract => {
  return getContract(UniAbi, getGovTokenAddress(), signer);
};

const getPairContract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(PairAbi, address, signer);
};

const getMerkleDistributorContract = (signer?: Signer | Provider): Contract => {
  return getContract(MerkleAbi, getMerkleDistribution(), signer);
};

const getGovernanceContract = (signer?: Signer | Provider): Contract => {
  return getContract(GovernanceAbi, getGovernanceAddress(), signer);
};

const getGovTokenContract = (signer?: Signer | Provider): Contract => {
  return getContract(GovTokenAbi, getGovTokenAddress(), signer);
};

const getPitContract = (signer?: Signer | Provider): Contract => {
  return getContract(PitAbi, getPitAddress(), signer);
};

const getPitBreederContract = (signer?: Signer | Provider): Contract => {
  return getContract(PitBreederAbi, getPitBreeder(), signer);
};

const getStakingContract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(StakingRewardsAbi, address, signer);
};

const getMasterBreederContract = (signer?: Signer | Provider): Contract => {
  return getContract(MasterBreederAbi, getMasterBreeder(), signer);
};

const getBondingContract = (address: string, signer?: Signer | Provider): Contract => {
  return getContract(BondAbi, address, signer);
};

const getSocksControllerContract = (signer?: Signer | Provider): Contract => {
  return getContract(SocksControllerAbi, getSocksController(), signer);
};

export {
  getContract,
  getHRC20Contract,
  getErc721Contract,
  getIfoV1Contract,
  getIfoV2Contract,
  getSousChefContract,
  getSousChefV2Contract,
  getPointCenterIfoContract,
  getCakeContract,
  gethMochiAbi,
  getProfileContract,
  getPancakeRabbitContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getLotteryContract,
  getBarContract,
  getLotteryTicketContract,
  getMasterchefContract,
  getVaultChefContract,
  getClaimRefundContract,
  getTradingCompetitionContract,
  getEasterNftContract,
  getFoxVaultContract,
  getPredictionsContract,
  getChainlinkOracleContract,
  getAutofoxContract,
  getZapperContract,
  getMulticallContract,
  getTokenContract,
  getFactoryV1Contract,
  getExchangeV1Contract,
  getMigratorV2Contract,
  getWONEContract,
  getArgentWalletDetectorContract,
  getENSRegistrarContract,
  getENSResolverContract,
  getBytes32TokenContract,
  getUniContract,
  getPairContract,
  getMerkleDistributorContract,
  getGovernanceContract,
  getGovTokenContract,
  getPitBreederContract,
  getPitContract,
  getStakingContract,
  getMasterBreederContract,
  getBondingContract,
  getSocksControllerContract
};
