import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

const ETHERSCAN_PREFIXES = {
  1: "",
  3: "ropsten.",
  4: "rinkeby.",
  5: "goerli.",
  42: "kovan.",
  1666600000: "harmony"
};

export function formatEtherscanLink(
  type: "Account" | "Transaction",
  data: [number, string]
) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      return chainId !== 1666600000
        ? `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`
        : `https://explorer.harmony.one/address/${address}`;

    }
    case "Transaction": {
      const [chainId, hash] = data;
      return chainId !== 1666600000
        ? `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`
        : `https://explorer.harmony.one/tx/${hash}`;
    }
  }
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);
