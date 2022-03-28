import useSWR from "swr";
import type { Autofox } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useVaultContract from "./useVaultContract";

function getVaultFee(contract: Autofox) {
  return async (_: string) => {
    const balance = await contract.callFee();
    console.log(balance)

    return balance;
  };
}

export default function useVaultFee(
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
    shouldFetch ? ["VaultFee", address, vaultAddress] : null,
    getVaultFee(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}