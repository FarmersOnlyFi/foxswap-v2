import erc20 from "config/abi/hrc20.json";
import masterchefABI from "config/abi/masterchef.json";

import FARM_CONFIGS, { FOX_USDC_PID } from "@/config/web3/farm-configs";
import { getAddress, getMasterChefAddress } from "@/utils/addressHelpers";
import multicall, { Call } from "@/utils/multicall";
import { BigNumber } from "bignumber.js";
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, DEFAULT_TOKEN_DECIMAL } from "config";
import { FarmConfig } from "@/config/constants/types";
import TOKENS, { Token, TokenSymbol } from "@/config/web3/tokens";
import { BIG_ZERO } from "@/hooks/web3/helpers/big-numbers";
import { LpPrices } from "./lpPrices";

// mocks to enforce correct chunk size when aggregating results
type FarmCallsErc20 = [Call, Call, Call, Call];
const farmCallsErc20Mock: FarmCallsErc20 = [, , , ,];
type FarmCallsMasterchef = [Call, Call];
const FarmCallsMasterchefMock: FarmCallsMasterchef = [, ,];

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
  apr: number,
}>;

const getPrice = (prices: LpPrices, token: TokenSymbol): BigNumber => {
  if (token === TokenSymbol.USDC || token === TokenSymbol.UST || token === TokenSymbol.USDT ||
      token === TokenSymbol.BSCBUSD || token === TokenSymbol.BUSD || token === TokenSymbol.DAI) {
    return new BigNumber(1);
  }
  const tokenPrice = prices.find(f => f.name === token);
  if (tokenPrice) {
    if (tokenPrice.quoteToken === TOKENS[TokenSymbol.WONE]) {
      const onePrice = prices.find(f => f.name === TokenSymbol.WONE);
      return new BigNumber(onePrice.price).times(tokenPrice.price);
    }
    return new BigNumber(tokenPrice.price);
  }
  console.log('ERROR: CANNOT FIND PRICE FOR token');
  console.log(token);
  console.log(prices);
  return new BigNumber(0);
};

const convertQuoteTokensToUsd = (
  quoteTokenAmount: BigNumber,
  quoteToken: Token,
  prices: LpPrices,
): BigNumber => {
  // Stablecoins
  if (
    quoteToken === TOKENS[TokenSymbol.USDC] ||
    quoteToken === TOKENS[TokenSymbol.UST] ||
    quoteToken === TOKENS[TokenSymbol.USDT] ||
    quoteToken === TOKENS[TokenSymbol.BSCBUSD] ||
    quoteToken === TOKENS[TokenSymbol.BUSD] ||
    quoteToken === TOKENS[TokenSymbol.DAI]
  ) {
    return new BigNumber(2).times(quoteTokenAmount);
  }
  const quoteTokenPrice = getPrice(prices, quoteToken.SYMBOL);
  if (quoteTokenPrice) {
    return new BigNumber(2).times(quoteTokenPrice).times(quoteTokenAmount);
  }
  console.log("ERROR: CANNOT FIND PRICE FOR QuoteToken");
  console.log(quoteToken);
  console.log(prices);
  return BIG_ZERO;
};

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
const getFarmApr = (
  poolWeight: BigNumber,
  cakePriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber
): number => {
  const yearlyCakeRewardAllocation =
    CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR).times(poolWeight);
  const apr = yearlyCakeRewardAllocation
    .times(cakePriceUsd)
    .div(poolLiquidityUsd)
    .times(100);
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber();
};

export const getFarms = async (
  lpPrices: LpPrices,
): Promise<FarmsResults> => {
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

    const farmCallsMasterchef: FarmCallsMasterchef = [
      {
        address: getMasterChefAddress(),
        name: "poolInfo",
        params: [farmConfig.pid],
      },
      {
        address: getMasterChefAddress(),
        name: "totalAllocPoint",
      },
    ];

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
  for (
    let i = 0;
    i < resultMasterchefFlat.length;
    i += callsPerFarmMasterchef
  ) {
    resultMasterchef.push(
      resultMasterchefFlat.slice(i, i + callsPerFarmMasterchef)
    );
  }

  let foxPriceInUSD: BigNumber;

  const farms = FARM_CONFIGS.map((farmConfig, i) => {
    const [
      tokenBalanceLP,
      quoteTokenBalanceLP,
      lpTokenBalanceMC,
      lpTotalSupply,
    ] = resultErc20[i];

    const [info, totalAllocPoint] = resultMasterchef[i];

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
    let tokenAmount = new BigNumber(tokenBalanceLP.toString()).times(
      lpTokenRatio
    );
    let tokenPriceVsQuote = new BigNumber(0);
    let quoteTokenAmount = new BigNumber(quoteTokenBalanceLP.toString()).times(
      lpTokenRatio
    );

    // handle solo pools
    if (farmConfig.pid === 0) {
      tokenPriceVsQuote = new BigNumber(1);
      tokenPerLp = new BigNumber(1);
      quoteTokenPerLp = new BigNumber(1);
      tokenAmount = new BigNumber(lpTokenBalanceMC.toString());
      quoteTokenAmount = tokenAmount.div(2);
      lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);
    } else {
      tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
    }

    const allocPoint = new BigNumber(info.allocPoint._hex.toString());
    const poolWeight = allocPoint.div(
      new BigNumber(totalAllocPoint.toString())
    );

    if (farmConfig.pid === FOX_USDC_PID) {
      foxPriceInUSD = tokenPriceVsQuote;
    }

    return {
      farmConfig,
      tokenAmount: tokenAmount.toJSON(),
      quoteTokenAmount: quoteTokenAmount,
      lpTotalSupply: new BigNumber(lpTotalSupply.toString()).toJSON(),
      lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
      tokenPriceVsQuote,
      poolWeight: poolWeight,
      multiplier: `${allocPoint.div(100).toString()}X`,
      depositFeeBP: info.depositFeeBP,
      tokenPerLp: tokenPerLp.toJSON(),
      quoteTokenPerLp: quoteTokenPerLp.toJSON(),
    };
  });

  if (foxPriceInUSD == null) {
    throw new Error("foxPriceInUSD is not set");
  }

  return farms.map((farm) => {
    let totalLiquidity;

    if (farm.farmConfig.pid === 0) {
      totalLiquidity = foxPriceInUSD.times(farm.tokenAmount);
      debugger;
    } else {
      totalLiquidity = convertQuoteTokensToUsd(
      farm.quoteTokenAmount,
        farm.farmConfig.quoteToken,
        lpPrices,
      );
    }

    if (farm.farmConfig.lpSymbol === 'FOX') {
      console.log('FOX')
      console.log(farm.poolWeight, foxPriceInUSD, totalLiquidity);
      debugger;
    }
    const apr = getFarmApr(farm.poolWeight, foxPriceInUSD, totalLiquidity);

    // @todo
    // apy, liquidity: totalLiquidity

    return {
      ...farm,
      poolWeight: farm.poolWeight.toJSON(),
      quoteTokenAmount: farm.quoteTokenAmount.toJSON(),
      apr,
    };
  });
};
