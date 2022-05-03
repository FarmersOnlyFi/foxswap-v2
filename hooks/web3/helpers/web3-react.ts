
// MEMO: inspired by pancakeswap project
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { ConnectorNames } from '@fox/uikit';
import { Web3Provider } from '@ethersproject/providers';
import { BscConnector } from '@binance-chain/bsc-connector';
import {ChainID, RPC_URL} from '@/config/web3/chains';

const POLLING_INTERVAL = 12000;
const chainID = ChainID.Mainnet;

const injected = new InjectedConnector({ supportedChainIds: [chainID] });

const walletConnectConnector = new WalletConnectConnector({
  rpc: RPC_URL,
  // TODO: double-check
  bridge: 'https://pancakeswap.bridge.walletconnect.org/',
  qrcode: true
});

const bscConnector = new BscConnector({ supportedChainIds: [chainID] });

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.BSC]: bscConnector,
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
