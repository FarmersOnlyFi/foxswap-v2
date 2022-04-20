import useEagerConnect from "@/hooks/useEagerConnect";
import { Dashboard } from "@/components/templates/Dashboard/Dashboard";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";

// const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useActiveWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return <Dashboard />
}

export default Home;
