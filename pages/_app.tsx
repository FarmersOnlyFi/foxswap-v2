import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "../getLibrary";
import "../styles/globals.css";
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import mainTheme from '../theme'
import Layout from "@/components/layouts/Layout";
import {Config, Harmony, DAppProvider} from "@usedapp/core";
import {getDefaultProvider} from "ethers";
import {ReactNode} from "react";

const config: Config = {
  readOnlyChainId: Harmony.chainId,
  readOnlyUrls: {
    [Harmony.chainId]: "https://rpc.foxswap.fi"
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <ChakraProvider resetCSS theme={mainTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </DAppProvider>
  );
}

export default App;
