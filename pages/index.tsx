import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Nav from "../components/Nav";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import { Dashboard } from "../components/Dashboard";

// const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <>
      <Dashboard />
    </>
  );
}

export default Home;
