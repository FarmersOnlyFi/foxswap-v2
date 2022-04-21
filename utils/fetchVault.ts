
import VAULT_CONFIGS from "@/config/web3/vault-configs";
import { getAddress, getMasterChefAddress } from "@/utils/addressHelpers";
import {Call} from "@/utils/multicall";

interface CallMetadata {
  symbol: string;
}

type VaultCall = Call & CallMetadata;

type VaultCallResult = VaultCall & { balance: number; }

export const getVaultCalls = (): VaultCall[] => {
  const vaults = VAULT_CONFIGS
  let masterchefAddress = getMasterChefAddress();

  const calls: Array<VaultCall> = [];

  vaults.map(vault => {
    if (vault.stakingPoolAddress) {
      masterchefAddress = getAddress(vault.stakingPoolAddress)
    }
    let lpAddress = getAddress(vault.lpAddresses)
    const tokenCalls = [
      // Balance (amount) of token in the LP contract
      {
        address: getAddress(vault.token.ADDRESSES),
        name: 'balanceOf',
        params: [lpAddress],
        symbol: vault.lpSymbol,
      },
      // Balance of quote token on LP contract
      {
        address: getAddress(vault.quoteToken.ADDRESSES),
        name: 'balanceOf',
        params: [lpAddress],
        symbol: vault.lpSymbol,
      },
      // Balance of LP tokens in the master chef contract
      {
        address: lpAddress,
        name: 'balanceOf',
        params: [masterchefAddress],
        symbol: vault.lpSymbol,
      }
    ];
    calls.push(...tokenCalls)
  })
  return calls;
}

// export const augmentVaultsResults = (calls: Array<VaultCall>, results: Array<any>): Array<VaultCallResult> => {
//   const response: Array<VaultCallResult> = []
//   for (let i = 0; i < results.length; i++) {
//     response.push({
//       ...calls[i],
//       balance: results[i].balance,
//     })
//   }
//   return response;
// }