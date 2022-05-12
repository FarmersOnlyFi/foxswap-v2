import type { Web3Provider } from "@ethersproject/providers";
import useSWR from "swr";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";
import {StaticJsonRpcProvider} from "@ethersproject/providers";

function getBlockNumber(library: Web3Provider | StaticJsonRpcProvider) {
  return async () => {
    return library.getBlockNumber();
  };
}

export default function useBlockNumber() {
  const { library } = useActiveWeb3React();

  return useSWR(!!library ? ["BlockNumber"] : null, getBlockNumber(library), {
    refreshInterval: 10 * 1000,
  });
}
