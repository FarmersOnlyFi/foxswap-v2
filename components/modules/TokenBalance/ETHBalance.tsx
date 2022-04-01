import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useONEBalance from "../../../hooks/useONEBalance";
import { parseBalance } from "../../../util";

const ETHBalance = () => {
  const { account } = useWeb3React<Web3Provider>();
  const { data } = useONEBalance(account);

  return <p>Balance: Ξ{parseBalance(data ?? 0)}</p>;
};

export default ETHBalance;
