
// MEMO: inspired by pancakeswap project
import { StaticJsonRpcProvider } from '@ethersproject/providers';

import getRPCURL from './get-rpc-url';

const rpcURL = getRPCURL();

const simpleRPCProvider = new StaticJsonRpcProvider(rpcURL);

export {
  simpleRPCProvider
};
