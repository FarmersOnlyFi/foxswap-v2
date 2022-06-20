import { getPriceCalls } from "@/state/farms/lpPrices";
import { Call, CallResult, useCalls } from "@usedapp/core";
import { LP_PRICES } from "@/config/constants/lpPrices";
import { getAddress } from "@/hooks/web3/address-helpers";
import { Contract } from "@ethersproject/contracts";
import ERC_20_ABI from "@/config/abi/hrc20.json";
import { BigNumber } from "ethers";
import { BIG_TEN, BIG_ZERO } from "@/config/index";

export default function usePrices() {
  const calls: Array<Call> = [];
  LP_PRICES.map((lpConfig) => {
    const lpAddress = getAddress(lpConfig.lpAddress);
    const farmCalls: Array<Call> = [
      {
        contract: new Contract(
          getAddress(lpConfig.token.ADDRESSES),
          ERC_20_ABI
        ) as any,
        method: "balanceOf",
        args: [lpAddress],
      },
      {
        contract: new Contract(
          getAddress(lpConfig.quoteToken.ADDRESSES),
          ERC_20_ABI
        ) as any,
        method: "balanceOf",
        args: [lpAddress],
      },
      {
        contract: new Contract(
          getAddress(lpConfig.token.ADDRESSES),
          ERC_20_ABI
        ) as any,
        method: "decimals",
        args: [],
      },
      {
        contract: new Contract(
          getAddress(lpConfig.quoteToken.ADDRESSES),
          ERC_20_ABI
        ) as any,
        method: "decimals",
        args: [],
      },
    ];
    calls.push(...farmCalls);
  });
  const resultsFlat = useCalls(calls);
  const results: Array<any> = [];

  for (let i = 0; i < resultsFlat.length; i += 4) {
    results.push(resultsFlat.slice(i, i + 4));
  }

  const lpPrices = LP_PRICES.map((lpConfig, i) => {
    const [
      tokenBalanceLP,
      quoteTokenBalanceLP,
      tokenDecimals,
      quoteTokenDecimals,
    ] = results[i];

    const tokenAmount =
      tokenBalanceLP !== undefined
        ? BigNumber.from(tokenBalanceLP.value.toString()).div(
            BIG_TEN.pow(tokenDecimals.value.toString())
          )
        : BIG_ZERO;
    const quoteTokenAmount =
      quoteTokenBalanceLP !== undefined
        ? BigNumber.from(quoteTokenBalanceLP.value.toString()).div(
            BIG_TEN.pow(quoteTokenDecimals.value.toString())
          )
        : BIG_ZERO;

    return {
      ...lpConfig,
      tokenAmount: tokenAmount.toJSON(),
      quoteTokenAmount: quoteTokenAmount.toJSON(),
      price: tokenAmount.isZero()
        ? 0
        : quoteTokenAmount.div(tokenAmount).toJSON(),
    };
  });

  return lpPrices;
}
