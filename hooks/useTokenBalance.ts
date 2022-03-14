import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import { useWeb3React } from '@web3-react/core';
import { getHRC20Contract, getCakeContract, getBarContract } from './web3/helpers/contract-helpers';
import { BIG_ZERO } from './web3/helpers/big-numbers';

import useLastUpdated from './useLastUpdated';

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO);
  const {
    account,
    library
  } = useWeb3React();
  // const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getHRC20Contract(tokenAddress, library?.getSigner());
      const res = await contract.balanceOf(account);
      setBalance(new BigNumber(res.toString()));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress, library]);

  return balance;
};

export const useOneBalance = () => {
  const [balance, setBalance] = useState(BIG_ZERO);
  const {
    account,
    library
  } = useWeb3React();
  // const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await library.getBalance(account);
      setBalance(new BigNumber(res.toString()));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, library]);

  return balance;
};

export const useTotalSupply = (): BigNumber => {
  // const { slowRefresh } = useRefresh();
  const [totalSupply, setTotalSupply] = useState<BigNumber>();

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getCakeContract();
      const supply = await cakeContract.totalSupply();
      setTotalSupply(new BigNumber(supply.toString()));
    }

    fetchTotalSupply();
  }, []);

  return totalSupply;
};

export const useBurnedBalance = (tokenAddress: string): BigNumber => {
  const [balance, setBalance] = useState(BIG_ZERO);
  // const { slowRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getHRC20Contract(tokenAddress);
      const res = await contract.balanceOf('0x000000000000000000000000000000000000dEaD');
      setBalance(new BigNumber(res.toString()));
    };

    fetchBalance();
  }, [tokenAddress]);

  return balance;
};

export const useMochiBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(BIG_ZERO);
  const {
    account,
    library
  } = useWeb3React();
  // const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBarContract(library?.getSigner());
      const res = await contract.balanceOf(account);
      setBalance(new BigNumber(res.toString()));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, library, tokenAddress]);

  return balance;
};

export const useGetBnbBalance = () => {
  const [balance, setBalance] = useState(BIG_ZERO);
  const { lastUpdated, setLastUpdated } = useLastUpdated();
  const {
    account,
    library
  } = useWeb3React();

  useEffect(() => {
    const fetchBalance = async () => {
      const walletBalance = await library.getBalance(account);
      setBalance(new BigNumber(walletBalance.toString()));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, library, lastUpdated, setBalance]);

  return { balance, refresh: setLastUpdated };
};

export default useTokenBalance;
