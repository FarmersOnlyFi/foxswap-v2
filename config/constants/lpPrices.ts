import { LpPrices } from "@/types/types";
import LP_TOKENS, { LPTokenSymbol } from '../web3/lp-tokens';

export const LP_PRICES: LpPrices[] = [
  {
    name: 'FUZZ',
    token: LP_TOKENS[LPTokenSymbol.UST_FUZZ].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_FUZZ].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.UST_FUZZ].ADDRESSES
  },
  {
    name: 'wsWAGMI',
    token: LP_TOKENS[LPTokenSymbol.WSWAGMI_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.WSWAGMI_WONE].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.WSWAGMI_WONE].ADDRESSES
  },
  {
    name: 'xVIPER',
    token: LP_TOKENS[LPTokenSymbol.WONE_XVIPER].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_XVIPER].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.WONE_XVIPER].ADDRESSES
  },
  {
    name: 'VIPER',
    token: LP_TOKENS[LPTokenSymbol.BUSD_VIPER].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.BUSD_VIPER].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.BUSD_VIPER].ADDRESSES
  },
  {
    name: 'HLY',
    token: LP_TOKENS[LPTokenSymbol.HLY_USDC].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.HLY_USDC].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.HLY_USDC].ADDRESSES
  },
  {
    name: 'QSHARE',
    token: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].ADDRESSES
  },
  {
    name: 'CSHARE',
    token: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].ADDRESSES
  },
  {
    name: 'FIRA',
    token: LP_TOKENS[LPTokenSymbol.FIRA_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.FIRA_WONE].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.FIRA_WONE].ADDRESSES
  },
  {
    name: 'WBTC',
    token: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].ADDRESSES
  },
  {
    name: 'SUSHI',
    token: LP_TOKENS[LPTokenSymbol.SUSHI_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.SUSHI_WONE].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.SUSHI_WONE].ADDRESSES
  },
  {
    name: 'ETH',
    token: LP_TOKENS[LPTokenSymbol.UST_ETH].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_ETH].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.UST_ETH].ADDRESSES
  },
  {
    name: 'COINK',
    token: LP_TOKENS[LPTokenSymbol.BSCBUSD_COINK].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.BSCBUSD_COINK].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.BSCBUSD_COINK].ADDRESSES
  },
  {
    name: 'TRANQ',
    token: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].ADDRESSES
  },
  {
    name: 'OPENX',
    token: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].ADDRESSES
  },
  {
    name: 'ONE',
    token: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ADDRESSES
  },
  {
    name: 'stONE',
    token: LP_TOKENS[LPTokenSymbol.STONE_ONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.STONE_ONE].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.STONE_ONE].ADDRESSES
  },
  {
    name: 'FOX',
    token: LP_TOKENS[LPTokenSymbol.FOX_UST].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_UST].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.FOX_UST].ADDRESSES
  },
  {
    name: 'MIS',
    token: LP_TOKENS[LPTokenSymbol.UST_MIS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_MIS].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.UST_MIS].ADDRESSES
  },
  {
    name: 'ELK',
    token: LP_TOKENS[LPTokenSymbol.ELK_DAI].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.ELK_DAI].TOKEN_B,
    lpAddress: LP_TOKENS[LPTokenSymbol.ELK_DAI].ADDRESSES
  },
  {
    name: 'RVRS',
    token: LP_TOKENS[LPTokenSymbol.UST_RVRS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_RVRS].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.UST_RVRS].ADDRESSES
  },
  {
    name: '1BTC',
    token: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].TOKEN_A,
    lpAddress: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].ADDRESSES
  }
];
