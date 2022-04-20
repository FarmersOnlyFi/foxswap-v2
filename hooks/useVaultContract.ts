import Vault_ABI from "@/config/abi/autofox.json";
import type { Autofox } from "../contracts/types";
import useContract from "./useContract";

export default function useVaultContract(vaultAddress: string) {
  // @ts-expect-error
  return useContract<Autofox>(vaultAddress, Vault_ABI);
}