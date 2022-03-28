import * as React from "react";
import {TableContainer, TableProps} from "@chakra-ui/react";
import { VaultTable } from "../components/Table/VaultTable";
import { VaultHeader } from "../components/VaultHeader";
import ETHBalance from "../components/ETHBalance";
import { useWeb3React } from "@web3-react/core";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "../components/Account";
import {getAutoFoxAddress, getFoxVaultAddress} from "../utils/addressHelpers";
import useGetVaultFees from "../hooks/useGetVaultFees";
import {useState} from "react";
import useSWR from "swr";
import VaultABI from "../config/abi/autofox.json";
import {Web3Provider} from "@ethersproject/providers";
import {isAddress} from "@ethersproject/address";
import {Contract} from "@ethersproject/contracts";
import useVaultFee from "../hooks/useVaultFee";
import useTokenBalance from "../hooks/useTokenBalance";


const fetcher = (library: Web3Provider, abi?: any) => (...args) => {
  const [arg1, arg2, ...params] = args
  // it's a contract
  if (isAddress(arg1)) {
    const address = arg1;
    const method = arg2;
    const contract = new Contract(address, abi, library.getSigner());
    console.log(contract[method])
    return contract[method];
  }
  // it's a eth call
  const method = arg1
  return library[method](arg2, ...params)
}

export const VaultStuff = () => {


}

export default function Swap() {
  const { account, library } = useWeb3React<Web3Provider>();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;
  const vaultAddress = getAutoFoxAddress()
  const { data, error } = useVaultFee(account, vaultAddress)
  
  if (!!data) console.log(data.toString())

  const FOX_ADDRESS = "0xcf1709ad76a79d5a60210f23e81ce2460542a836";
  // const { data } = useTokenBalance(account, FOX_ADDRESS)


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