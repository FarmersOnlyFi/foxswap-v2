import type { Web3Provider } from "@ethersproject/providers";
import useSWR from "swr";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";

function getBlockNumber(library: Web3Provider) {
  return async () => {
    return library.getBlockNumber();
  };
}

export default function useBlockNumber() {
  const { library } = useActiveWeb3React();
  const shouldFetch = !!library;

  return useSWR(shouldFetch ? ["BlockNumber"] : null, getBlockNumber(library), {
    refreshInterval: 10 * 1000,
  });
}
