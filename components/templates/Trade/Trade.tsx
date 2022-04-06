import {Web3Provider} from "@ethersproject/providers";
import {isAddress} from "@ethersproject/address";
import {Contract} from "@ethersproject/contracts";
import {useWeb3React} from "@web3-react/core";
import useEagerConnect from "@/hooks/useEagerConnect";
import {getAddress, getFoxVaultAddress, getMasterChefAddress, getVaultChefAddress} from "@/utils/addressHelpers";
import TokenBalance from "@/components/modules/TokenBalance/TokenBalance";
import Account from "@/components/modules/Account/Account";
import * as React from "react";
import {ethers} from "ethers";
import VaultABI from '@/config/abi/autofox.json'
import useSWR from "swr";
import {parseBalance} from "../../../util";
import {VaultConfig} from "@/config/constants/types";
import {getMulticallContract} from "@/hooks/web3/helpers/contract-helpers";
import multicall, {Call} from "@/utils/multicall";
import VaultchefABI from "@/config/abi/vaultChef.json"
import VAULT_CONFIGS from "@/config/web3/vault-configs";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import HRC20ABI from '@/contracts/HRC20.json'
import {BigNumber} from "ethers";
import useVaultUserData from "@/hooks/useVaultUserData";

const fetcher = (library: Web3Provider, abi?: any) => (...args) => {
  if (!library) return

  const [arg1, arg2, ...params] = args
  // it's a contract
  if (isAddress(arg1)) {
    const address = arg1
    const method = arg2
    const contract = new Contract(address, abi, library.getSigner())
    return contract[method](...params)
  }
  // it's a eth call
  const method = arg1
  return library[method](arg2, ...params)
}

export const fetchVaultTokenBalanceInContract = async (account: string) => {
  const vaultToFetch = VAULT_CONFIGS
  const calls = vaultToFetch.map(vault => {
    let masterchefAddress = vault.chefAddress ? vault.chefAddress : getMasterChefAddress()
    const lpAddress = getAddress(vault.lpAddresses);
    return [
      // Balance of token in the LP contract
      {
        address: getAddress(vault.token.ADDRESSES),
        name: 'balanceOf',
        params: [lpAddress]
      },
      // Balance of quote token on LP contract
      {
        address: getAddress(vault.quoteToken.ADDRESSES),
        name: 'balanceOf',
        params: [lpAddress]
      },
      // Balance of LP tokens in the master chef contract
      {
        address: lpAddress,
        name: 'balanceOf',
        params: [masterchefAddress]
      }
    ];
  })
  const allCalls = [].concat(...calls)
  const result = await multicall(HRC20ABI, allCalls);

  return result

}

export const fetchVaultUserStakedToken = async (account: string) => {
  const vaultsToFetch = VAULT_CONFIGS
  const vaultChefAddress = getVaultChefAddress();
  const calls = vaultsToFetch.map(vault => {
    return {
      address: vaultChefAddress,
      name: 'stakedWantTokens',
      params: [vault.pid, account] };
  });

  const rawStakedBalances = await multicall(VaultchefABI, calls);
  // console.log(rawStakedBalances)

  return rawStakedBalances
}



export default function TradeTemplate() {
  const { account, library } = useWeb3React<Web3Provider>();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;
  const vaultAddress = getFoxVaultAddress()
  const [userData, setUserData] = useState([]);

  useEffect((): any => {
    const setVaultTokens = async () => {
      const data = await fetchVaultTokenBalanceInContract(account)
      setUserData(data)
    };
    setVaultTokens()
  }, [account]);

  for (let item of userData) {
    const test = BigNumber.from(item.balance)
    console.log(test)
  }

  // const { data } = useVaultUserData(account, vaultAddress)
  // const { data, error } = useSWR([vaultAddress, 'userInfo', account], {
  //   fetcher: fetcher(library, VaultABI)
  // })
  //
  // console.log(data)

  // @ts-ignore

  const FOX_ADDRESS = "0xcf1709ad76a79d5a60210f23e81ce2460542a836";

  return (
    <div>
      <h1>
        <TokenBalance tokenAddress={FOX_ADDRESS} symbol={'FOX'} />
        <Account triedToEagerConnect={triedToEagerConnect} />
      </h1>
      {isConnected && (
        <section>
          <h5>
            hello
          </h5>
        </section>
      )}
    </div>
  );
}