import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import { useWeb3React } from '@web3-react/core';
import { BIG_ZERO } from "./web3/helpers/big-numbers";
import { useFoxVaultContract, useCake } from './web3/use-contract';
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import {getCakeContract, getCakeVaultContract} from "./web3/helpers/contract-helpers";

const fetchUserVaultInfo = async (account: any, cakeContract: any, cakeVaultContract: any) => {
  const userContractInfo = await cakeVaultContract.userInfo(account);
  const userStakingTokenBalance = await cakeContract.balanceOf(account);

  return {
    contractInfo: userContractInfo,
    stakingBalance: userStakingTokenBalance
  }

};


const useGetVaultUserInfo = (lastUpdated?: number, suspense: boolean = false) => {
  const { account, chainId, library } = useWeb3React();
  const cakeVaultContract = getCakeVaultContract();
  const cakeContract = getCakeContract();
  const shouldFetch = typeof account === "string" && !!library;

  // @ts-ignore
  const result = useSWR(
    shouldFetch ? ["VaultFees", account, chainId] : null,
    fetchUserVaultInfo('0xe36093669f8d05f555323E9F0Aee6A2BC41097C1', cakeContract, cakeVaultContract),
    {
      suspense,
    }
  );

  return result

};

export default useGetVaultUserInfo;
