import {Web3Provider} from "@ethersproject/providers";
import {isAddress} from "@ethersproject/address";
import {Contract} from "@ethersproject/contracts";
import {useWeb3React} from "@web3-react/core";
import useEagerConnect from "@/hooks/useEagerConnect";
import {getAutoFoxAddress} from "@/utils/addressHelpers";
import useVaultFee from "@/hooks/useVaultFee";
import TokenBalance from "@/components/modules/TokenBalance/TokenBalance";
import Account from "@/components/modules/Account/Account";
import * as React from "react";

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

export default function TradeTemplate() {
  const { account, library } = useWeb3React<Web3Provider>();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;
  const vaultAddress = getAutoFoxAddress()
  const { data, error } = useVaultFee(account, vaultAddress)

  if (!!data) console.log(data.toString())

  const FOX_ADDRESS = "0x0159ed2e06ddcd46a25e74eb8e159ce666b28687";

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