import ERC_20_ABI from "config/abi/hrc20.json";

import { BIG_TEN } from "@/hooks/web3/helpers/big-numbers";
import { getAddress } from "@/utils/addressHelpers";
import multicall, { Call } from "@/utils/multicall";
import BigNumber from "bignumber.js";
import { LP_PRICES } from "../../config/constants/lpPrices";
import { Token } from "@/config/web3/tokens";
import { Addresses } from "@/types/web3/general";

interface LpPrice {
  tokenAmount: string;
  quoteTokenAmount: string;
  price: string;
  name: string;
  token: Token;
  quoteToken: Token;
  lpAddress: Addresses;
}

export type LpPrices = Array<LpPrice>;

type LpPriceCalls = [Call, Call, Call, Call];
const LpPricesCallsMock: LpPriceCalls = [, , , ,];

export const getPrices = async (): Promise<LpPrices> => {
  console.count('getPrices');
  const calls: Array<Call> = []
  LP_PRICES.map(async (lpConfig) => {
    const lpAddress = getAddress(lpConfig.lpAddress);
    const farmCalls: LpPriceCalls = [
      // Balance of token in the LP contract
      {
        address: getAddress(lpConfig.token.ADDRESSES),
        name: "balanceOf",
        params: [lpAddress],
      },
      // Balance of quote token on LP contract
      {
        address: getAddress(lpConfig.quoteToken.ADDRESSES),
        name: "balanceOf",
        params: [lpAddress],
      },
      {
        address: getAddress(lpConfig.token.ADDRESSES),
        name: "decimals",
      },
      // Quote token decimals
      {
        address: getAddress(lpConfig.quoteToken.ADDRESSES),
        name: "decimals",
      },
    ];

    calls.push(...farmCalls);
  });

  const resultsFlat = await multicall(ERC_20_ABI, calls);
  const results: Array<any> = [];
  const callsPerLp = LpPricesCallsMock.length;
  for (let i = 0; i < resultsFlat.length; i += callsPerLp) {
    results.push(resultsFlat.slice(i, i + callsPerLp));
  }

  const lpPrices = LP_PRICES.map((lpConfig, i) => {
    const [
      tokenBalanceLP,
      quoteTokenBalanceLP,
      tokenDecimals,
      quoteTokenDecimals,
    ] = results[i];

    const tokenAmount = new BigNumber(tokenBalanceLP.toString()).div(
      BIG_TEN.pow(tokenDecimals.toString())
    );
    const quoteTokenAmount = new BigNumber(quoteTokenBalanceLP.toString()).div(
      BIG_TEN.pow(quoteTokenDecimals.toString())
    );

    return {
      ...lpConfig,
      tokenAmount: tokenAmount.toJSON(),
      quoteTokenAmount: quoteTokenAmount.toJSON(),
      price: quoteTokenAmount.div(tokenAmount).toJSON(),
    };
  });

  console.count('getPrices results');
  console.log(lpPrices);
  return lpPrices;
}