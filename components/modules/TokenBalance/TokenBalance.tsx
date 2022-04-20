import type { Web3Provider } from "@ethersproject/providers";
import useTokenBalance from "../../../hooks/useTokenBalance";
import { parseBalance } from "../../../util";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";

type TokenBalanceProps = {
  tokenAddress: string;
  symbol: string;
};

const TokenBalance = ({ tokenAddress, symbol }: TokenBalanceProps) => {
  const { account } = useActiveWeb3React();
  const { data } = useTokenBalance(account, tokenAddress);

  return (
    <p>
      {`${symbol} Balance`}: {parseBalance(data ?? 0)}
    </p>
  );
};

export default TokenBalance;
