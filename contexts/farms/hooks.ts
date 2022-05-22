import erc20 from "config/abi/hrc20.json";
import masterchefABI from "config/abi/masterchef.json";

import FARM_CONFIGS, { FOX_USDC_PID } from "@/config/web3/farm-configs";
import { getAddress, getMasterChefAddress } from "@/utils/addressHelpers";
import multicall, { Call } from "@/utils/multicall";
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, DEFAULT_TOKEN_DECIMAL, BIG_ONE, BIG_ZERO } from "config";
import { FarmConfig } from "@/config/constants/types";
import TOKENS, { Token, TokenSymbol } from "@/config/web3/tokens";
import { LpPrices } from "./lpPrices";
import { BigNumber } from "ethers";

// mocks to enforce correct chunk size when aggregating results
type FarmCallsErc20 = [Call, Call, Call, Call];
const mockCall: Call = {address: '', name: 'mock' }
const farmCallsErc20Mock: FarmCallsErc20 = [mockCall, mockCall, mockCall, mockCall,];
type FarmCallsMasterchef = [Call, Call];
const FarmCallsMasterchefMock: FarmCallsMasterchef = [mockCall, mockCall];

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
  apr: number | null,
}>;

type BalanceResult = [BigNumber] & {
  balance: BigNumber;
}
type LpTotalSupply = [BigNumber];
type Ecr20Result = [BalanceResult, BalanceResult, BalanceResult, LpTotalSupply];

type LpToken = string;
type AllocPoint = BigNumber;
type LastRewardBlock = BigNumber;
type AccFoxPerShare = BigNumber;
type DepositFeeBP = number;
type PoolInfo = [LpToken, AllocPoint, LastRewardBlock, DepositFeeBP] & {
  lpToken: LpToken,
  allocPoint: AllocPoint,
  lastRewardBlock: LastRewardBlock,
  accFoxPerShare: AccFoxPerShare,
  depositFeeBP: DepositFeeBP,
}
type MasterChefResult = [PoolInfo, [BigNumber]];
// @TODO add a check if number of calls and number of results matches

const getPrice = (prices: LpPrices, token: TokenSymbol): BigNumber => {
  if (token === TokenSymbol.USDC || token === TokenSymbol.UST || token === TokenSymbol.USDT ||
      token === TokenSymbol.BSCBUSD || token === TokenSymbol.BUSD || token === TokenSymbol.DAI) {
    return BigNumber.from(1);
  }
  const tokenPrice = prices.find(f => f.name === token);
  if (tokenPrice) {
    if (tokenPrice.quoteToken === TOKENS[TokenSymbol.WONE]) {
      const onePrice = prices.find(f => f.name === TokenSymbol.WONE);
      return BigNumber.from(onePrice!.price).mul(tokenPrice.price);
    }
    return BigNumber.from(tokenPrice.price);
  }
  console.log('ERROR: CANNOT FIND PRICE FOR token');
  console.log(token);
  console.log(prices);
  return BIG_ZERO;
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
    return BigNumber.from(2).mul(quoteTokenAmount);
  }
  const quoteTokenPrice = getPrice(prices, quoteToken.SYMBOL);
  if (quoteTokenPrice) {
    return BigNumber.from(2).mul(quoteTokenPrice).mul(quoteTokenAmount);
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
): BigNumber | null => {
  const yearlyCakeRewardAllocation =
    CAKE_PER_BLOCK.mul(BLOCKS_PER_YEAR).mul(poolWeight);
  if (poolLiquidityUsd.isZero()) {
    return null;
  }
  const apr = yearlyCakeRewardAllocation
    .mul(cakePriceUsd)
    .div(poolLiquidityUsd)
    .mul(100);
  // return apr.isNaN() || !apr.isFinite() ? null : apr;
  return apr;
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
    multicall<Array<any>>(erc20, callsErc20),
    multicall<Array<any>>(masterchefABI, callsMasterchef),
  ]);
  const callsPerFarmErc20 = farmCallsErc20Mock.length;
  const resultErc20: Array<Ecr20Result> = [];
  for (let i = 0; i < resultErc20Flat.length; i += callsPerFarmErc20) {
    // @ts-expect-error
    resultErc20.push(resultErc20Flat.slice(i, i + callsPerFarmErc20));
  }

  const callsPerFarmMasterchef = FarmCallsMasterchefMock.length;
  const resultMasterchef: Array<MasterChefResult> = [];
  for (
    let i = 0;
    i < resultMasterchefFlat.length;
    i += callsPerFarmMasterchef
  ) {
    resultMasterchef.push(
      // @ts-expect-error
      resultMasterchefFlat.slice(i, i + callsPerFarmMasterchef)
    );
  }

  let foxPriceInUSD: BigNumber | null = null;

  const farms = FARM_CONFIGS.map((farmConfig, i) => {
    const [
      tokenBalanceLPTmp,
      quoteTokenBalanceLPTmp,
      lpTokenBalanceMCTmp,
      lpTotalSupplyTmp,
    ] = resultErc20[i];
    const tokenBalanceLP = tokenBalanceLPTmp.balance;
    const quoteTokenBalanceLP = quoteTokenBalanceLPTmp.balance;
    const lpTokenBalanceMCD = lpTokenBalanceMCTmp.balance;
    const lpTotalSupply = lpTotalSupplyTmp[0];

    const [poolInfo, totalAllocPointTmp] = resultMasterchef[i];
    const totalAllocPoint = totalAllocPointTmp[0];

    // Ratio in % a LP tokens that are in staking, vs the total number in circulation
    const lpTokenRatio = BigNumber.from(lpTokenBalanceMCD.toString()).div(
      BigNumber.from(lpTotalSupply.toString())
    );

    // Amount of token0 in 1 LP token
    const perc1LpOfTotal = DEFAULT_TOKEN_DECIMAL.div(
      BigNumber.from(lpTotalSupply.toString())
    );
    let tokenPerLp = perc1LpOfTotal.mul(tokenBalanceLP.toString());
    let quoteTokenPerLp = perc1LpOfTotal.mul(quoteTokenBalanceLP.toString());

    // Total value in staking in quote token value
    let lpTotalInQuoteToken = BigNumber.from(quoteTokenBalanceLP.toString())
      .div(DEFAULT_TOKEN_DECIMAL)
      .mul(BigNumber.from(2))
      .mul(lpTokenRatio);

    // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
    let tokenAmount = BigNumber.from(tokenBalanceLP.toString()).mul(
      lpTokenRatio
    );
    let tokenPriceVsQuote = BIG_ZERO;
    let quoteTokenAmount = BigNumber.from(quoteTokenBalanceLP.toString()).mul(
      lpTokenRatio
    );

    // handle solo pools
    if (farmConfig.pid === 0) {
      tokenPriceVsQuote = BigNumber.from(1);
      tokenPerLp = BigNumber.from(1);
      quoteTokenPerLp = BigNumber.from(1);
      tokenAmount = BigNumber.from(lpTokenBalanceMCD.toString());
      quoteTokenAmount = tokenAmount.div(2);
      lpTotalInQuoteToken = tokenAmount.mul(tokenPriceVsQuote);
    } else {
      tokenPriceVsQuote = tokenAmount.isZero() ? BIG_ONE : quoteTokenAmount.div(tokenAmount);
    }

    const allocPoint = BigNumber.from(poolInfo.allocPoint._hex.toString());
    const poolWeight = allocPoint.div(
      BigNumber.from(totalAllocPoint.toString())
    );

    if (farmConfig.pid === FOX_USDC_PID) {
      foxPriceInUSD = tokenPriceVsQuote;
    }

    return {
      farmConfig,
      tokenAmount: tokenAmount.toJSON(),
      quoteTokenAmount: quoteTokenAmount,
      lpTotalSupply: BigNumber.from(lpTotalSupply.toString()).toJSON(),
      lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
      tokenPriceVsQuote,
      poolWeight,
      multiplier: `${allocPoint.div(100).toString()}X`,
      depositFeeBP: poolInfo.depositFeeBP,
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
      totalLiquidity = foxPriceInUSD!.mul(farm.tokenAmount);
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
    }
    const apr = getFarmApr(farm.poolWeight, foxPriceInUSD!, totalLiquidity);
    // const aprr = parseBalance(apr);

    // @todo
    // apy, liquidity: totalLiquidity

    return {
      ...farm,
      poolWeight: farm.poolWeight.toJSON(),
      quoteTokenAmount: farm.quoteTokenAmount.toJSON(),
      apr: apr?.toNumber() ?? null,
    };
  });
};
