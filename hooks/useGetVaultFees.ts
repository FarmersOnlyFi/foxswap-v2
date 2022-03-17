import { useEffect, useState } from 'react';
import { useFoxVaultContract } from "./web3/use-contract";
import makeBatchRequest from "../utils/makeBatchRequest";
import {Web3Provider} from "@ethersproject/providers";
import {useWeb3React} from "@web3-react/core";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import {getCakeVaultAddress} from "../utils/addressHelpers";
interface VaultFees {
  performanceFee: string;
  callFee: string;
  withdrawalFee: string;
  withdrawalFeePeriod: string;
}

const getVaultFees = (library: Web3Provider) => {
    const getFees = async () => {
      const cakeVaultContract = useFoxVaultContract();
      const [fees, setFees] = useState({
        performanceFee: null,
        callFee: null,
        withdrawalFee: null,
        withdrawalFeePeriod: null
      });
      const [
        contractPerformanceFee,
        contractWithdrawalFeeTimePeriod,
        contractCallFee,
        contractWithdrawalFee
      ] = await makeBatchRequest([
        cakeVaultContract.performanceFee(),
        cakeVaultContract.withdrawFeePeriod(),
        cakeVaultContract.callFee(),
        cakeVaultContract.withdrawFee()
      ]);

      setFees({
        performanceFee: contractPerformanceFee.toString(),
        callFee: contractCallFee.toString(),
        withdrawalFee: contractWithdrawalFee.toString(),
        withdrawalFeePeriod: contractWithdrawalFeeTimePeriod.toString()
      });
      return fees;
    };
};


const useGetVaultFees = (suspense = false) => {

  const address = getCakeVaultAddress()
  const { library, chainId } = useWeb3React();

  const shouldFetch = typeof address === "string" && !!library;

  // @ts-ignore
  const result = useSWR(
    shouldFetch ? ["VaultFees", address, chainId] : null,
    getVaultFees(library),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;

};

export type {
  VaultFees
};

export default useGetVaultFees;