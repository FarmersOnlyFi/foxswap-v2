import { Contract } from "ethers";
import { ERC20Interface, useCalls } from "@usedapp/core";
import DEFAULT_TOKEN_LIST from '@foxswap/default-token-list'
import {CallResult} from "@usedapp/core/dist/esm/src/helpers";

export default function useTokenListBalance(
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