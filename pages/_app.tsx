import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import mainTheme from '../theme'
import Layout from "@/components/layouts/Layout";
import { Config, Harmony, DAppProvider } from "@usedapp/core";
import {SwapProvider} from "@/contexts/swap/context";

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
        <SwapProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SwapProvider>
      </ChakraProvider>
    </DAppProvider>
  );
}

export default App;
