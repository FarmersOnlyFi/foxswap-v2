import type { Web3Provider } from "@ethersproject/providers";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";

function getETHBalance(library: Web3Provider) {
  return async (_: string, address: string) => {
    const balance = await library.getBalance(address);

    return balance;
  };
}

export default function useONEBalance(address: string, suspense = false) {
  const { library, chainId } = useActiveWeb3React();

  const shouldFetch = typeof address === "string" && !!library;

  const result = useSWR(
    shouldFetch ? ["ONEBalance", address, chainId] : null,
    getETHBalance(library),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
