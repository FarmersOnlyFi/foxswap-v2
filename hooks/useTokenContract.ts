import ERC20_ABI from "../contracts/ERC20.json";
import type { ERC20 } from "../contracts/types";
import useContract from "./useContract";

export default function useTokenContract(tokenAddress?: string) {
  // @ts-expect-error
  return useContract<ERC20>(tokenAddress, ERC20_ABI);
}