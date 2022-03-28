import Vault_ABI from "../contracts/Autofox.json";
import type { Autofox } from "../contracts/types";
import useContract from "./useContract";

export default function useVaultContract(vaultAddress: string) {
  return useContract<Autofox>(vaultAddress, Vault_ABI);
}