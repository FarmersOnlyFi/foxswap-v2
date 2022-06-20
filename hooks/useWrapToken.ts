import { useContractFunction } from "@usedapp/core";
import { getContractInterface } from "@/hooks/web3/contract-helpers";
import WETH_ABI from "@/config/abi/weth.json";

export default function useWrapToken(tokenAddress: string) {
  const contract = getContractInterface(WETH_ABI, tokenAddress);
  const { state, send } = useContractFunction(contract, "deposit", {
    transactionName: "Wrap",
  });
  return { state, send };
}
