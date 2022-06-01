import { Contract } from "ethers";
import { ERC20Interface, useCalls, CallResult } from "@usedapp/core";

// TODO: Create type for tokenList arg
export default function useTokenBalances(
  tokenList?: any[],
  account?: string | null
): CallResult<Contract, string>[] {
  const calls: any = tokenList?.map(token => ({
    contract: new Contract(token.address, ERC20Interface),
    method: 'balanceOf',
    args: [account]
  }))
  return useCalls(calls)
}