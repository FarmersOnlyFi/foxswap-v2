import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import { useHRC20Contract } from "@/hooks/web3/use-contract";
import { Contract } from "@ethersproject/contracts";

function getTokenBalance(contract: Contract) {
  return async (_: string, address: string) => {
    const balance = await contract.balanceOf(address);

    return balance;
  };
}

export default function useTokenBalance(
  address: string | null | undefined,
  tokenAddress: string,
  suspense = false
) {
  const contract = useHRC20Contract(tokenAddress);

  const result = useSWR(
    !!contract ? ["TokenBalance", address, tokenAddress] : null,
    getTokenBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}