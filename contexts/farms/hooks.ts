import erc20 from "config/abi/hrc20.json";
import masterchefABI from 'config/abi/masterchef.json';

import FARM_CONFIGS from "@/config/web3/farm-configs";
import { getAddress, getMasterChefAddress } from "@/utils/addressHelpers";
import multicall, { Call } from "@/utils/multicall";
import { BigNumber } from "bignumber.js";
import { DEFAULT_TOKEN_DECIMAL } from "config";
import { FarmConfig } from "@/config/constants/types";

// mocks to enforce correct chunk size when aggregating results
type FarmCallsErc20 = [Call, Call, Call, Call];
const farmCallsErc20Mock: FarmCallsErc20 = [,,,,];
type FarmCallsMasterchef = [Call, Call];
const FarmCallsMasterchefMock: FarmCallsMasterchef = [,,];

export type FarmsResults = Array<{
    farmConfig: FarmConfig;
    tokenAmount: string;
    quoteTokenAmount: string;
    lpTotalSupply: string;
    lpTotalInQuoteToken: string;
    tokenPriceVsQuote: BigNumber;
    poolWeight: string;
    depositFeeBP: any;
    tokenPerLp: string;
    quoteTokenPerLp: string;
}>

export const getFarms = async (): Promise<FarmsResults> => {
  const callsErc20: Array<Call> = [];
  const callsMasterchef: Array<Call> = [];

  FARM_CONFIGS.map((farmConfig) => {
    const lpAddress = getAddress(farmConfig.lpAddresses);
    const farmCallsErc20: FarmCallsErc20 = [
      // Balance of token in the LP contract
      {
        address: getAddress(farmConfig.token.ADDRESSES),
        name: "balanceOf",
        params: [lpAddress],
      },
      // Balance of quote token on LP contract
      {
        address: getAddress(farmConfig.quoteToken.ADDRESSES),
        name: "balanceOf",
        params: [lpAddress],
      },
      // Balance of LP tokens in the master chef contract
      {
        address: lpAddress,
        name: "balanceOf",
        params: [getMasterChefAddress()],
      },
      // Total supply of LP tokens
      {
        address: lpAddress,
        name: "totalSupply",
      },
    ];
    callsErc20.push(...farmCallsErc20);

    const farmCallsMasterchef: FarmCallsMasterchef = [{
      address: getMasterChefAddress(),
      name: "poolInfo",
      params: [farmConfig.pid],
    },
    {
      address: getMasterChefAddress(),
      name: "totalAllocPoint",
    }];

    callsMasterchef.push(...farmCallsMasterchef);
  });

  const [resultErc20Flat, resultMasterchefFlat] = await Promise.all([
    multicall<Array<[any]>>(erc20, callsErc20),
    multicall<Array<[any]>>(masterchefABI, callsMasterchef),
  ]);
  const callsPerFarmErc20 = farmCallsErc20Mock.length;
  const resultErc20: Array<any> = [];
  for (let i = 0; i < resultErc20Flat.length; i += callsPerFarmErc20) {
    resultErc20.push(resultErc20Flat.slice(i, i + callsPerFarmErc20));
  }

  const callsPerFarmMasterchef = FarmCallsMasterchefMock.length;
  const resultMasterchef: Array<any> = [];
  for (let i = 0; i < resultMasterchefFlat.length; i += callsPerFarmMasterchef) {
    resultMasterchef.push(resultMasterchefFlat.slice(i, i + callsPerFarmMasterchef));
  }


  return FARM_CONFIGS.map((farmConfig, i) => {
    const [
      tokenBalanceLP,
      quoteTokenBalanceLP,
      lpTokenBalanceMC,
      lpTotalSupply,
    ] = resultErc20[i];

    const [
      info,
      totalAllocPoint,
    ] = resultMasterchef[i];

    // Ratio in % a LP tokens that are in staking, vs the total number in circulation
    const lpTokenRatio = new BigNumber(lpTokenBalanceMC.toString()).div(
      new BigNumber(lpTotalSupply.toString())
    );

    // Amount of token0 in 1 LP token
    const perc1LpOfTotal = DEFAULT_TOKEN_DECIMAL.div(
      new BigNumber(lpTotalSupply.toString())
    );
    let tokenPerLp = perc1LpOfTotal.times(tokenBalanceLP);
    let quoteTokenPerLp = perc1LpOfTotal.times(quoteTokenBalanceLP);

    // Total value in staking in quote token value
    let lpTotalInQuoteToken = new BigNumber(quoteTokenBalanceLP.toString())
      .div(DEFAULT_TOKEN_DECIMAL)
      .times(new BigNumber(2))
      .times(lpTokenRatio);

    // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
    let tokenAmount = new BigNumber(tokenBalanceLP.toString()).times(lpTokenRatio);
    let tokenPriceVsQuote = new BigNumber(0);
    let quoteTokenAmount = new BigNumber(quoteTokenBalanceLP.toString()).times(lpTokenRatio);

    // handle solo pools
    if (farmConfig.pid === 0) {
      tokenPriceVsQuote = new BigNumber(1);
      tokenPerLp = new BigNumber(1);
      quoteTokenPerLp = new BigNumber(1);
      tokenAmount = new BigNumber(lpTokenBalanceMC.toString())
      quoteTokenAmount = tokenAmount.div(2);
      lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);
    }

    const allocPoint = new BigNumber(info.allocPoint._hex.toString());
    const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint.toString()));

    return {
      farmConfig,
      tokenAmount: tokenAmount.toJSON(),
      quoteTokenAmount: quoteTokenAmount.toJSON(),
      lpTotalSupply: new BigNumber(lpTotalSupply.toString()).toJSON(),
      lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
      tokenPriceVsQuote: farmConfig.pid === 0 ? new BigNumber(1) : quoteTokenAmount.div(tokenAmount),
      poolWeight: poolWeight.toJSON(),
      multiplier: `${allocPoint.div(100).toString()}X`,
      depositFeeBP: info.depositFeeBP,
      tokenPerLp: tokenPerLp.toJSON(),
      quoteTokenPerLp: quoteTokenPerLp.toJSON()
    };
  });
};
