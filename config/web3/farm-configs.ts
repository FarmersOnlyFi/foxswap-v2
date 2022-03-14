
import TOKENS, { TokenSymbol } from 'config/web3/tokens';
import ROUTERS, { RouterName } from 'config/web3/routers';
import { ChainID } from 'config/web3/chains';
import LP_TOKENS, { LPTokenSymbol } from 'config/web3/lp-tokens';
import { FarmConfig } from '../constants/types';

// TODO: should update code convention for configuration constants (uppercase snake_case)
// TODO: should configure it with LP token objects instead of redundant fields
// TODO: should use symbol from `LP_TOKENS`
const FARM_CONFIGS: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'FOX',
    lpAddresses: {
      [ChainID.Testnet]: '0x41bBe49B4e294B18D4472225244DC75aB45819f7',
      [ChainID.Mainnet]: '0x0159ed2e06ddcd46a25e74eb8e159ce666b28687'
    },
    token: TOKENS[TokenSymbol.FOX],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.DeFiKingdoms].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 10001
  },
  {
    pid: 29,
    lpSymbol: 'FOX-LUMEN',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.LUMEN],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 1002
  },
  {
    pid: 30,
    lpSymbol: 'ONE-LUMEN',
    lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.LUMEN],
    quoteToken: TOKENS[TokenSymbol.WONE],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 1002
  },
  {
    pid: 26,
    lpSymbol: 'FOX-xFOX',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.XFOX],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 1002
  },
  {
    pid: 27,
    lpSymbol: 'FOX-HVILLE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.HVILLE],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 1001
  },
  {
    pid: 28,
    lpSymbol: 'ONE-HVILLE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.HVILLE],
    quoteToken: TOKENS[TokenSymbol.WONE],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 1000
  },
  {
    pid: 13,
    lpSymbol: 'FOX-ONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.FOX],
    quoteToken: TOKENS[TokenSymbol.WONE],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 999
  },
  {
    pid: 14,
    lpSymbol: 'FOX-UST',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.FOX],
    quoteToken: TOKENS[TokenSymbol.UST],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 998
  },
  {
    pid: 15,
    lpSymbol: 'FOX-stONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.STONE],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 997
  },
  {
    pid: 16,
    lpSymbol: 'ETH-ONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.ETH],
    quoteToken: TOKENS[TokenSymbol.WONE],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 996
  },
  {
    pid: 17,
    lpSymbol: 'USDC-ONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.USDC],
    quoteToken: TOKENS[TokenSymbol.WONE],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 995
  },
  {
    pid: 18,
    lpSymbol: 'UST-ONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.WONE],
    quoteToken: TOKENS[TokenSymbol.UST],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 994
  },
  {
    pid: 19,
    lpSymbol: 'FOX-MIS',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.MIS],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 993
  },
  {
    pid: 20,
    lpSymbol: 'FOX-JEWEL',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.JEWEL],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 992
  },
  {
    pid: 21,
    lpSymbol: 'FOX-RVRS',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.RVRS],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 991
  },
  {
    pid: 22,
    lpSymbol: 'FOX-rAVAX',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.RAVAX],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 990
  },
  {
    pid: 23,
    lpSymbol: 'FOX-TRANQ',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.TRANQ],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 989
  },
  {
    pid: 24,
    lpSymbol: 'FOX-COINKX',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.COINKX],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 987
  },
  {
    pid: 25,
    lpSymbol: 'FOX-XYA',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].ADDRESSES,
    token: TOKENS[TokenSymbol.XYA],
    quoteToken: TOKENS[TokenSymbol.FOX],
    addLiquidityURL: ROUTERS[RouterName.FarmersOnly].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.FarmersOnly].NAME,
    hot: 986
  },
  {
    pid: 1,
    lpSymbol: 'FOX-USDC',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_USDC].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_USDC].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_USDC].TOKEN_B,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.FOX_USDC].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.FOX_USDC].ROUTER.NAME
  },
  {
    pid: 2,
    lpSymbol: 'FOX-ONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].TOKEN_A,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ROUTER.NAME
  },
  {
    pid: 3,
    lpSymbol: 'USDC-ONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_A,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.NAME
  },
  {
    pid: 6,
    lpSymbol: 'FOX-ONE',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].TOKEN_A,
    addLiquidityURL: ROUTERS[RouterName.DeFiKingdoms].ADD_LIQUIDITY_URL,
    router: ROUTERS[RouterName.DeFiKingdoms].NAME,
    isCommunity: true,
    hot: 99
  },
  {
    pid: 7,
    lpSymbol: 'FOX-UST',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_UST].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_UST].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_UST].TOKEN_A,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.FOX_UST].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.FOX_UST].ROUTER.NAME,
    isCommunity: true,
    hot: 97
  },
  {
    pid: 8,
    lpSymbol: 'FOX-JEWEL',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].TOKEN_A,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ROUTER.NAME,
    isCommunity: true,
    hot: 90
  },
  {
    pid: 9,
    lpSymbol: 'FOX-MIS',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_MIS].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_MIS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_MIS].TOKEN_A,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.NAME,
    isCommunity: true,
    hot: 98
  },
  {
    pid: 10,
    lpSymbol: 'FOX-rAVAX',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].TOKEN_A,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ROUTER.NAME,
    isCommunity: true,
    hot: 98
  },
  {
    pid: 11,
    lpSymbol: 'FOX-RVRS',
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ADDRESSES,
    token: LP_TOKENS[LPTokenSymbol.FOX_RVRS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_RVRS].TOKEN_A,
    addLiquidityURL: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ROUTER.ADD_LIQUIDITY_URL,
    router: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ROUTER.NAME,
    isCommunity: true,
    hot: 98
  }
];

export default FARM_CONFIGS;
