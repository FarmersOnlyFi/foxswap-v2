import { Contract } from "@ethersproject/contracts";
import { ERC20Interface, useCalls } from "@usedapp/core";

export default function useTokenListBalance(tokenList?: any[], account?: string | null) {
  const calls: any = tokenList?.map(token => ({
    contract: new Contract(token.address, ERC20Interface),
    method: 'balanceOf',
    args: [account]
  }))
  return useCalls(calls)
}