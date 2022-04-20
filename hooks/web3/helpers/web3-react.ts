
// MEMO: inspired by pancakeswap project
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { ConnectorNames } from '@fox/uikit';
import { Web3Provider } from '@ethersproject/providers';

import getNodeURL from './get-rpc-url';
import { ChainID } from '@/config/web3/chains';

const POLLING_INTERVAL = 12000;
const rpcURL = getNodeURL();
const chainID = ChainID.Mainnet;

const injected = new InjectedConnector({ supportedChainIds: [chainID] });

const walletConnectConnector = new WalletConnectConnector({
  rpc: { [chainID]: rpcURL },
  // TODO: double-check
  bridge: 'https://pancakeswap.bridge.walletconnect.org/',
  qrcode: true
});

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletConnectConnector,
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
