import type { Web3Provider } from "@ethersproject/providers";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useActiveWeb3React, {Web3ReactContextProvider} from "@/hooks/web3/use-active-web3-react";
import {StaticJsonRpcProvider} from "@ethersproject/providers";

function getONEBalance(library: StaticJsonRpcProvider | Web3Provider) {
  return async (_: string, address: string) => {
    const balance = await library.getBalance(address);

    return balance;
  };
}

export default function useONEBalance(address: string | null, suspense = false) {
  const { library, chainId } = useActiveWeb3React();

  const result = useSWR(
    !!library ? ["ONEBalance", address, chainId] : null,
    getONEBalance(library),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
