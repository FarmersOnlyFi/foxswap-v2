import TOKENS, { TokenSymbol } from "../data/tokens";
import { PoolConfig, PoolCategory } from "./types";

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: TOKENS[TokenSymbol.FOX],
    earningToken: TOKENS[TokenSymbol.FOX],
    contractAddress: {
      1666700000: "0xA68E643e1942fA8635776b718F6EeD5cEF2a3F15",
      1666600000: "0xA68E643e1942fA8635776b718F6EeD5cEF2a3F15",
    },

    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: "0.008298",
    sortOrder: 1,
    isFinished: false,
  },
];

export default pools;
