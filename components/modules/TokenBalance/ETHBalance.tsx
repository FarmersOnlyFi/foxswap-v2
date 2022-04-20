import type { Web3Provider } from "@ethersproject/providers";
import useONEBalance from "../../../hooks/useONEBalance";
import { parseBalance } from "../../../util";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";

const ETHBalance = () => {
  const { account } = useActiveWeb3React();
  const { data } = useONEBalance(account);

  return <p>Balance: Ξ{parseBalance(data ?? 0)}</p>;
};

export default ETHBalance;
