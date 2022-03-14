
// MEMO: inspired by pancakeswap project
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { ConnectorNames } from '@fox/uikit';
import { Web3Provider } from '@ethersproject/providers';

import getNodeURL from './get-rpc-url';

const POLLING_INTERVAL = 12000;
const rpcURL = getNodeURL();
const chainID = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

const injected = new InjectedConnector({ supportedChainIds: [chainID] });

const walletConnectConnector = new WalletConnectConnector({
  rpc: { [chainID]: rpcURL },
  // TODO: double-check
  bridge: 'https://pancakeswap.bridge.walletconnect.org/',
  qrcode: true
});

const bscConnector = new BscConnector({ supportedChainIds: [chainID] });

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletConnectConnector,
  [ConnectorNames.BSC]: bscConnector
};

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export {
  connectorsByName,
  getLibrary
};
