import ERC_20_ABI from "config/abi/hrc20.json";

import {BIG_TEN} from "@/config/index";
import { getAddress } from "@/utils/addressHelpers";
import multicall, { Call as MCall } from "@/utils/multicall";
import {Call, useCalls} from "@usedapp/core"
import { LP_PRICES } from "@/config/constants/lpPrices";
import { Token } from "@/config/web3/tokens";
import { Addresses } from "@/types/web3/general";
import { BigNumber } from "ethers";
import {Contract} from "@ethersproject/contracts";

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

const mockCallFiller: MCall = {
  address: '',
  name: "balanceOf",
  params: []
}

type LpPriceCalls = [MCall, MCall, MCall, MCall];

const LpPricesCallsMock: LpPriceCalls = [mockCallFiller, mockCallFiller, mockCallFiller, mockCallFiller];

export const getPriceCalls = () => {
  const calls: Array<Call> = []
  LP_PRICES.map(async (lpConfig) => {
    const lpAddress = getAddress(lpConfig.lpAddress)
    const farmCalls: Array<Call> = [
      {
        contract: new Contract(getAddress(lpConfig.token.ADDRESSES), ERC_20_ABI) as any,
        method: 'balanceOf',
        args: [lpAddress]
      },
      {
        contract: new Contract(getAddress(lpConfig.quoteToken.ADDRESSES), ERC_20_ABI) as any,
        method: 'balanceOf',
        args: [lpAddress]
      },
      {
        contract: new Contract(getAddress(lpConfig.token.ADDRESSES), ERC_20_ABI) as any,
        method: 'decimals',
        args: []
      },
      {
        contract: new Contract(getAddress(lpConfig.quoteToken.ADDRESSES), ERC_20_ABI) as any,
        method: 'decimals',
        args: []
      }
    ]
    calls.push(...farmCalls);
  })
  return calls
}

export const getPrices = async (): Promise<any> => {
  // console.count('getPrices');
  const calls: Array<MCall> = []
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
  // return calls

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

    const tokenAmount = BigNumber.from(tokenBalanceLP.toString()).div(
      BIG_TEN.pow(tokenDecimals.toString())
    );
    const quoteTokenAmount = BigNumber.from(quoteTokenBalanceLP.toString()).div(
      BIG_TEN.pow(quoteTokenDecimals.toString())
    );

    return {
      ...lpConfig,
      tokenAmount: tokenAmount.toJSON(),
      quoteTokenAmount: quoteTokenAmount.toJSON(),
      price: tokenAmount.isZero() ? 0 : quoteTokenAmount.div(tokenAmount).toJSON(),
    };
  });

  // console.count('getPrices results');
  // console.log(lpPrices);
  return lpPrices;
}
