import useSWR from "swr";
import type { Autofox } from "@/contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useVaultContract from "./useVaultContract";

function getVaultUserData(contract: Autofox) {
  return async (_: string, address: string) => {
    const userInfo = await contract.userInfo(address);

    return userInfo;
  };
}

export default function useVaultUserData(
  address: string,
  vaultAddress: string,
  suspense = false
) {
  const contract = useVaultContract(vaultAddress);
  const shouldFetch =
    typeof address === "string" &&
    typeof vaultAddress === "string" &&
    !!contract;

  const result = useSWR(
    ["VaultUserData", address, vaultAddress],
    getVaultUserData(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}