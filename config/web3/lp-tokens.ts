
import TOKENS, {
  Token,
  TokenSymbol
} from './tokens';
import ROUTERS, {
  Router,
  RouterName
} from './routers';
import { ChainID } from './chains';
import { Addresses } from "@/types/web3/general";

interface LPToken {
  readonly SYMBOL: string;
  readonly TOKEN_A: Token;
  readonly TOKEN_B: Token;
  readonly ROUTER: Router;
  readonly ADDRESSES: Addresses;
  readonly DECIMALS: number;
  // TODO: should use specific token logos (tokenA & tokenB) instead of LP logo
  readonly LOGO_FILENAME: string;
}

enum LPTokenSymbol {
  WBTC_MIS = 'WBTC-MIS',
  UST_RVRS = 'UST-RVRS',
  FOX_RVRS = 'FOX-RVRS',
  WONE_RVRS = 'ONE-RVRS',
  FOX_JEWEL = 'FOX-JEWEL',
  FOX_MIS = 'FOX-MIS',
  FOX_RAVAX = 'FOX-RAVAX',
  FOX_UST = 'FOX-UST',
  FOX_WONE_DEFIKINGDOMS = 'FOX-ONE (DFK)',
  MIS_RVRS = 'MIS-RVRS',
  JEWEL_MIS = 'JEWEL-MIS',
  LUNA_MIS = 'LUNA-MIS',
  RFTM_MIS = 'RFTM-MIS',
  TRANQ_MIS = 'TRANQ-MIS',
  UST_USDC = 'UST-USDC',
  UST_MIS = 'UST-MIS',
  UST_WONE_DEFIKINGDOMS = 'UST-ONE (DFK)',
  WONE_MIS = 'ONE-MIS',
  XYA_MIS = 'XYA-MIS',
  ELK_DAI = 'ELK-DAI',
  WONE_ELK = 'ONE-ELK',
  FUZZ_WONE = 'FUZZ-ONE',
  UST_FUZZ = 'UST-FUZZ',
  UST_WONE_FUZZSWAP = 'UST-ONE (Fuzz)',
  WBTC_BUSD = 'WBTC-BUSD',
  WBTC_WONE_OPENSWAP = 'WBTC-ONE (OPENSWAP)',
  BSCBUSD_WBTC = 'BSCBUSD-WBTC',
  BSCBUSD_WONE = 'BSCBUSD-ONE',
  OPENX_BSCBUSD = 'OPENX-BSCBUSD',
  OPENX_WONE = 'OPENX-ONE',
  ETH_WONE_SUSHISWAP = 'ETH-ONE (SLP)',
  USDC_WONE_SUSHISWAP = 'USDC-ONE (SLP)',
  FOX_USDC = 'FOX-USDC',
  FOX_WONE_SUSHISWAP = 'FOX-ONE (SLP)',
  TRANQ_WONE = 'TRANQ-ONE',
  UST_ETH = 'UST-ETH',
  BSCBUSD_COINK = 'BSCBUSD-COINK',
  BSCUSDC_USDC = 'BSCUSDC-USDC',
  COINK_WONE = 'COINK-ONE',
  COINK_XYA = 'COINK-XYA',
  COINKX_MIS = 'COINKX-MIS',
  FOX_BJEWEL = 'FOX-BJEWEL',
  FOX_AME = 'FOX-AME',
  WBTC_ETH_DEFIKINGDOMS = 'WBTC-ETH (DFK)',
  WONE_WBTC_SUSHISWAP = 'ONE-1BTC (SLP)',
  GMI_WONE = 'GMI-ONE',
  GMI_USDC = 'GMI-USDC',
  FAM_WONE = 'FAM-ONE',
  FAM_USDC = 'FAM-USDC',
  FAM_BUSD = 'FAM-BUSD',
  USDT_FAM = 'USDT-FAM',
  FAM_ETH = 'FAM-ETH',
  WBTC_FAM = 'WBTC-FAM',
  FAM_BNB = 'FAM-BNB',
  FAM_AVAX = 'FAM-AVAX',
  ETH_JEWEL = 'ETH-JEWEL',
  ETH_WONE_DEFIKINGDOMS = 'ETH-ONE (DFK)',
  SUPERBID_JEWEL = 'SUPERBID-JEWEL',
  SUPERBID_WONE = 'SUPERBID-ONE',
  USDC_WONE_DEFIKINGDOMS = 'USDC-ONE (DFK)',
  WBTC_JEWEL = 'WBTC-JEWEL',
  JEWEL_USDC = 'JEWEL-USDC',
  JEWEL_AVAX = 'JEWEL-AVAX',
  JEWEL_BSCBNB = 'JEWEL-BSCBNB',
  JEWEL_BUSD = 'JEWEL-BUSD',
  JEWEL_FTM = 'JEWEL-FTM',
  JEWEL_LUNA = 'JEWEL-LUNA',
  JEWEL_WMATIC = 'JEWEL-WMATIC',
  JEWEL_WONE = 'JEWEL-ONE',
  JEWEL_XYA = 'JEWEL-XYA',
  UST_JEWEL = 'UST-JEWEL',
  WONE_BUSD = 'ONE-BUSD',
  AXS_ETH = 'AXS-ETH',
  ETH_AAVE = 'ETH-AAVE',
  ETH_DAI = 'ETH-DAI',
  ETH_FRAX = 'ETH-FRAX',
  ETH_USDC = 'ETH-USDC',
  SUSHI_WONE = 'SUSHI-ONE',
  USDT_ETH = 'USDT-ETH',
  USDT_USDC = 'USDT-USDC',
  USDT_WONE = 'USDT-ONE',
  WBTC_ETH = 'WBTC-ETH',
  WBTC_WONE_SUSHISWAP = 'WBTC-ONE (SLP)',
  YGG_ETH = 'YGG-ETH',
  BIFI_WONE = 'BIFI-ONE',
  BSCBUSD_BUSD = 'BSCBUSD-BUSD',
  UST_WONE = 'UST-ONE',
  WONE_WBTC = 'ONE-WBTC',
  WONE_DAI = 'ONE-DAI',
  STONE_ONE = 'stONE-ONE',
  MIS_LUMEN = 'MIS-LUMEN',
  STONE_MIS = 'stONE-MIS',
  IMRTL_MIS = 'IMRTL-MIS',
  FOX_XFOX_FOXSWAP = 'FOX-xFOX (FoxLP)',
  FOX_HVILLE_FOXSWAP = 'FOX-HVILLE (FoxLP)',
  WONE_HVILLE_FOXSWAP = 'ONE-HVILLE (FoxLP)',
  FOX_WONE_FOXSWAP = 'FOX-ONE (FoxLP)',
  FOX_UST_FOXSWAP = 'FOX-UST (FoxLP)',
  FOX_STONE_FOXSWAP = 'FOX-stONE (FoxLP)',
  ETH_WONE_FOXSWAP = 'ETH-ONE (FoxLP)',
  USDC_WONE_FOXSWAP = 'USDC-ONE (FoxLP)',
  UST_WONE_FOXSWAP = 'UST-ONE (FoxLP)',
  FOX_MIS_FOXSWAP = 'FOX-MIS (FoxLP)',
  FOX_JEWEL_FOXSWAP = 'FOX-JEWEL (FoxLP)',
  FOX_RVRS_FOXSWAP = 'FOX-RVRS (FoxLP)',
  FOX_RAVAX_FOXSWAP = 'FOX-rAVAX (FoxLP)',
  FOX_TRANQ_FOXSWAP = 'FOX-TRANQ (FoxLP)',
  FOX_COINKX_FOXSWAP = 'FOX-COINKX (FoxLP)',
  FOX_XYA_FOXSWAP = 'FOX-XYA (FoxLP)',
  COMFY_WONE = 'COMFY-ONE',
  CSHARE_WONE = 'CSHARE-ONE',
  UST_QUARTZ = 'UST-QUARTZ',
  WONE_QSHARE = 'ONE-QSHARE',
  HLY_USDC = 'HLY-USDC',
  HLY_WONE = 'HLY-ONE',
  JEWEL_HLY = 'JEWEL-HLY',
  WONE_XVIPER = 'ONE-XVIPER',
  WSWAGMI_WONE = 'wsWAGMI-ONE',
  BUSD_VIPER = 'BUSD-VIPER',
  FOX_LUMEN_FOXSWAP = 'FOX-LUMEN',
  WONE_LUMEN_FOXSWAP = 'ONE-LUMEN',
  FIRA_WONE = 'FIRA-ONE'
}

const LP_TOKENS: {
  [key in LPTokenSymbol]: LPToken;
} = {
  // Tranquil LPs
  [LPTokenSymbol.FIRA_WONE]: {
    SYMBOL: LPTokenSymbol.FIRA_WONE,
    TOKEN_A: TOKENS[TokenSymbol.FIRA],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.Tranquil],
    ADDRESSES: {
      [ChainID.Testnet]: '0x08De72C31eCf51dDa637624d1e767578d1914dca',
      [ChainID.Mainnet]: '0x08De72C31eCf51dDa637624d1e767578d1914dca'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  // FoxSwap LPs
  [LPTokenSymbol.WONE_LUMEN_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.WONE_LUMEN_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.LUMEN],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x7817CAF89385946075B0673fC47014c512031c87',
      [ChainID.Mainnet]: '0x7817CAF89385946075B0673fC47014c512031c87'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_LUMEN_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_LUMEN_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.LUMEN],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x3451e9c6C8643F3684c5d9b4f623Cb5B8a63bF71',
      [ChainID.Mainnet]: '0x3451e9c6C8643F3684c5d9b4f623Cb5B8a63bF71'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_XFOX_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_XFOX_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.XFOX],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x907EdA1592049fb9102786D79Fe64C67BBbb57E1',
      [ChainID.Mainnet]: '0x907EdA1592049fb9102786D79Fe64C67BBbb57E1'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_HVILLE_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_HVILLE_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.HVILLE],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0xe977aEF3DA54d02aE742eB97B4f0Da0846edf764',
      [ChainID.Mainnet]: '0xe977aEF3DA54d02aE742eB97B4f0Da0846edf764'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WONE_HVILLE_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.WONE_HVILLE_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.HVILLE],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x63cD1cD3e3B5475CCF095b4DD1F7199DC77F5D1e',
      [ChainID.Mainnet]: '0x63cD1cD3e3B5475CCF095b4DD1F7199DC77F5D1e'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_WONE_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_WONE_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x670240Cd8f514EBaD7e375EcBa7e9e6b761e893A',
      [ChainID.Mainnet]: '0x670240Cd8f514EBaD7e375EcBa7e9e6b761e893A'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_UST_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_UST_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.UST],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0xffd9aFb0b9Fc5B50cA5b831D0A4f49bC35EbA572',
      [ChainID.Mainnet]: '0xffd9aFb0b9Fc5B50cA5b831D0A4f49bC35EbA572'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_STONE_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_STONE_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.STONE],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x36AA0748125c754705884DF7c85B13f74BcC4273',
      [ChainID.Mainnet]: '0x36AA0748125c754705884DF7c85B13f74BcC4273'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },

  [LPTokenSymbol.ETH_WONE_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.ETH_WONE_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x4958b21B5b183B990995641c1189c2fE3E32E8bd',
      [ChainID.Mainnet]: '0x4958b21B5b183B990995641c1189c2fE3E32E8bd'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.USDC_WONE_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.USDC_WONE_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.USDC],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x956D6cBC3cd41F436fE279564FeCA53b5a7B66EE',
      [ChainID.Mainnet]: '0x956D6cBC3cd41F436fE279564FeCA53b5a7B66EE'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.UST_WONE_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.UST_WONE_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x29fc4D7D55a3Cd08F0971E3b009642f56Efb8C60',
      [ChainID.Mainnet]: '0x29fc4D7D55a3Cd08F0971E3b009642f56Efb8C60'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_MIS_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_MIS_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x658526095C20C37462A2b765ECFe3568c38995c5',
      [ChainID.Mainnet]: '0x658526095C20C37462A2b765ECFe3568c38995c5'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_JEWEL_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_JEWEL_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.JEWEL],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0xE9039D09B4D9C8E95084e86d92b657bA73b2E2c6',
      [ChainID.Mainnet]: '0xE9039D09B4D9C8E95084e86d92b657bA73b2E2c6'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_RVRS_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_RVRS_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.RVRS],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x0A35A7A236f37FfA748E500E2d3355c767705C07',
      [ChainID.Mainnet]: '0x0A35A7A236f37FfA748E500E2d3355c767705C07'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_RAVAX_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_RAVAX_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.RAVAX],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0xfDEdd44F90174420979C2E573A1c82eD03fe1883',
      [ChainID.Mainnet]: '0xfDEdd44F90174420979C2E573A1c82eD03fe1883'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_TRANQ_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_TRANQ_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.TRANQ],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0xFd22e57cC20440E2A22a4e7D7C62b6F1730b074A',
      [ChainID.Mainnet]: '0xFd22e57cC20440E2A22a4e7D7C62b6F1730b074A'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_COINKX_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_COINKX_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.COINKX],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x67B1168AA0079Ee766bD3AB6706B26A9345308F9',
      [ChainID.Mainnet]: '0x67B1168AA0079Ee766bD3AB6706B26A9345308F9'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FOX_XYA_FOXSWAP]: {
    SYMBOL: LPTokenSymbol.FOX_XYA_FOXSWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.XYA],
    ROUTER: ROUTERS[RouterName.FarmersOnly],
    ADDRESSES: {
      [ChainID.Testnet]: '0x914415c8f8965EDec3ABEd415753DBf066300a8a',
      [ChainID.Mainnet]: '0x914415c8f8965EDec3ABEd415753DBf066300a8a'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  // End FoxSwap LPs

  // DFK
  [LPTokenSymbol.HLY_USDC]: {
    SYMBOL: LPTokenSymbol.HLY_USDC,
    TOKEN_A: TOKENS[TokenSymbol.HLY],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x387D00b1C74E60e7627b7048818372b1b4eC2e3f',
      [ChainID.Mainnet]: '0x387D00b1C74E60e7627b7048818372b1b4eC2e3f'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.HLY_WONE]: {
    SYMBOL: LPTokenSymbol.HLY_WONE,
    TOKEN_A: TOKENS[TokenSymbol.HLY],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x3e478ED607F79A50f286A5A6ce52A049897291B2',
      [ChainID.Mainnet]: '0x3e478ED607F79A50f286A5A6ce52A049897291B2'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_HLY]: {
    SYMBOL: LPTokenSymbol.JEWEL_HLY,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.HLY],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x7b886d19e5EE9E3188Eb29037dE21Dce944aE0Ef',
      [ChainID.Mainnet]: '0x7b886d19e5EE9E3188Eb29037dE21Dce944aE0Ef'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.UST_QUARTZ]: {
    SYMBOL: LPTokenSymbol.UST_QUARTZ,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.QUARTZ],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x90A48CB3A724Ef6f8e6240f4788559f6370b6925',
      [ChainID.Mainnet]: '0x90A48CB3A724Ef6f8e6240f4788559f6370b6925'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WONE_QSHARE]: {
    SYMBOL: LPTokenSymbol.WONE_QSHARE,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.QSHARE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x157e2E205b8d307501F1AAd1C5C96c562e6f07c5',
      [ChainID.Mainnet]: '0x157e2E205b8d307501F1AAd1C5C96c562e6f07c5'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.MIS_LUMEN]: {
    SYMBOL: LPTokenSymbol.MIS_LUMEN,
    TOKEN_A: TOKENS[TokenSymbol.MIS],
    TOKEN_B: TOKENS[TokenSymbol.LUMEN],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xFD3AB633de7a747cEacAfDad6575df1D737D659E',
      [ChainID.Mainnet]: '0xFD3AB633de7a747cEacAfDad6575df1D737D659E'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.IMRTL_MIS]: {
    SYMBOL: LPTokenSymbol.IMRTL_MIS,
    TOKEN_A: TOKENS[TokenSymbol.IMRTL],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x3b200557A1884Ff3ee21486d4250A9571bE6F81e',
      [ChainID.Mainnet]: '0x3b200557A1884Ff3ee21486d4250A9571bE6F81e'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.COINKX_MIS]: {
    SYMBOL: LPTokenSymbol.COINKX_MIS,
    TOKEN_A: TOKENS[TokenSymbol.COINKX],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xC593893ED4b5F97CB64808c640E48B18A80E61Ff',
      [ChainID.Mainnet]: '0xC593893ED4b5F97CB64808c640E48B18A80E61Ff'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS]: {
    SYMBOL: LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.ETH],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x997f00485B238c83f7e58C2Ea1866DFD79f04A4b',
      [ChainID.Mainnet]: '0x997f00485B238c83f7e58C2Ea1866DFD79f04A4b'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'btc-eth.png'
  },
  [LPTokenSymbol.WBTC_MIS]: {
    SYMBOL: LPTokenSymbol.WBTC_MIS,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x40E10c0eDF8D412Ce9d62cfe98cC0958eeFaea94',
      [ChainID.Mainnet]: '0x40E10c0eDF8D412Ce9d62cfe98cC0958eeFaea94'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'wbtc-mis.svg'
  },
  [LPTokenSymbol.MIS_RVRS]: {
    SYMBOL: LPTokenSymbol.MIS_RVRS,
    TOKEN_A: TOKENS[TokenSymbol.MIS],
    TOKEN_B: TOKENS[TokenSymbol.RVRS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x14eC453656Ce925C969eafFcD76d62ACA2468Eb6',
      [ChainID.Mainnet]: '0x14eC453656Ce925C969eafFcD76d62ACA2468Eb6'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'mis-rvrs.svg'
  },
  [LPTokenSymbol.JEWEL_MIS]: {
    SYMBOL: LPTokenSymbol.JEWEL_MIS,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x751606585FcAa73bf92Cf823b7b6D8A0398a1c99',
      [ChainID.Mainnet]: '0x751606585FcAa73bf92Cf823b7b6D8A0398a1c99'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'jewel-mis.svg'
  },
  [LPTokenSymbol.LUNA_MIS]: {
    SYMBOL: LPTokenSymbol.LUNA_MIS,
    TOKEN_A: TOKENS[TokenSymbol.LUNA],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x5456FD0CFBC4cDd9a08C89dA9Cf09a6Afc73dC28',
      [ChainID.Mainnet]: '0x5456FD0CFBC4cDd9a08C89dA9Cf09a6Afc73dC28'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'luna-mis.png'
  },
  [LPTokenSymbol.RFTM_MIS]: {
    SYMBOL: LPTokenSymbol.RFTM_MIS,
    TOKEN_A: TOKENS[TokenSymbol.RFTM],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x3F5965Eeece3a56FB499B8E41b26040806E1A2f7',
      [ChainID.Mainnet]: '0x3F5965Eeece3a56FB499B8E41b26040806E1A2f7'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'rftm-mis.png'
  },
  [LPTokenSymbol.TRANQ_MIS]: {
    SYMBOL: LPTokenSymbol.TRANQ_MIS,
    TOKEN_A: TOKENS[TokenSymbol.TRANQ],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xfA45e64Adf9BF3caDC65b737b2B0151C750f414C',
      [ChainID.Mainnet]: '0xfA45e64Adf9BF3caDC65b737b2B0151C750f414C'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'tranq-mis.svg'
  },
  [LPTokenSymbol.UST_USDC]: {
    SYMBOL: LPTokenSymbol.UST_USDC,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x7A16B6d01f96FDC5Dd085C686806ba20AECE99Ea',
      [ChainID.Mainnet]: '0x7A16B6d01f96FDC5Dd085C686806ba20AECE99Ea'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'ust-usdc.png'
  },
  [LPTokenSymbol.UST_MIS]: {
    SYMBOL: LPTokenSymbol.UST_MIS,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xfC417a0368263140C59B7Aab646d4A270c37d8cb',
      [ChainID.Mainnet]: '0xfC417a0368263140C59B7Aab646d4A270c37d8cb'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'ust-mis.svg'
  },
  [LPTokenSymbol.UST_WONE_DEFIKINGDOMS]: {
    SYMBOL: LPTokenSymbol.UST_WONE_DEFIKINGDOMS,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x61356C852632813f3d71D57559B06cdFf70E538B',
      [ChainID.Mainnet]: '0x61356C852632813f3d71D57559B06cdFf70E538B'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'ust-one.png'
  },
  [LPTokenSymbol.WONE_MIS]: {
    SYMBOL: LPTokenSymbol.WONE_MIS,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x60e0d939D4b0C71918088278bCf600470A6c8f26',
      [ChainID.Mainnet]: '0x60e0d939D4b0C71918088278bCf600470A6c8f26'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'one-mis.svg'
  },
  [LPTokenSymbol.XYA_MIS]: {
    SYMBOL: LPTokenSymbol.XYA_MIS,
    TOKEN_A: TOKENS[TokenSymbol.XYA],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xE22297CC3452aae66cEE6ED1cb437e96219c3319',
      [ChainID.Mainnet]: '0xE22297CC3452aae66cEE6ED1cb437e96219c3319'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'xya-mis.svg'
  },
  [LPTokenSymbol.FOX_MIS]: {
    SYMBOL: LPTokenSymbol.FOX_MIS,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xe9425769e13d3f928C483726de841999648e9CFd',
      [ChainID.Mainnet]: '0xe9425769e13d3f928C483726de841999648e9CFd'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-mis.png'
  },
  [LPTokenSymbol.FOX_RVRS]: {
    SYMBOL: LPTokenSymbol.FOX_RVRS,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.RVRS],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xe52e3f81b0D21E42Ab33E5a7dad908713f48621f',
      [ChainID.Mainnet]: '0xe52e3f81b0D21E42Ab33E5a7dad908713f48621f'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-rvrs.svg'
  },
  [LPTokenSymbol.FOX_JEWEL]: {
    SYMBOL: LPTokenSymbol.FOX_JEWEL,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.JEWEL],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xE2E34C07754C4CAb2b6D585C06D418628f8ba553',
      [ChainID.Mainnet]: '0xE2E34C07754C4CAb2b6D585C06D418628f8ba553'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-jewel.png'
  },
  [LPTokenSymbol.FOX_RAVAX]: {
    SYMBOL: LPTokenSymbol.FOX_RAVAX,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.RAVAX],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x82a850c644Fbdba85eeb553B464fc57E69134C1E',
      [ChainID.Mainnet]: '0x82a850c644Fbdba85eeb553B464fc57E69134C1E'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-ravax.png'
  },
  [LPTokenSymbol.FOX_UST]: {
    SYMBOL: LPTokenSymbol.FOX_UST,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.UST],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x0E638FeDe85b808E5Da25F35ce7aA90706a86e24',
      [ChainID.Mainnet]: '0x0E638FeDe85b808E5Da25F35ce7aA90706a86e24'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-ust.png'
  },
  [LPTokenSymbol.FOX_WONE_DEFIKINGDOMS]: {
    SYMBOL: LPTokenSymbol.FOX_WONE_DEFIKINGDOMS,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x7f64A21c72590497208273Dadba0814a6762685e',
      [ChainID.Mainnet]: '0x7f64A21c72590497208273Dadba0814a6762685e'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-one.png'
  },

  // Elk
  [LPTokenSymbol.ELK_DAI]: {
    SYMBOL: LPTokenSymbol.ELK_DAI,
    TOKEN_A: TOKENS[TokenSymbol.ELK],
    TOKEN_B: TOKENS[TokenSymbol.DAI],
    ROUTER: ROUTERS[RouterName.Elk],
    ADDRESSES: {
      [ChainID.Testnet]: '0xAFe716B0b1285b27795B80ceDDd105de689c464d',
      [ChainID.Mainnet]: '0xAFe716B0b1285b27795B80ceDDd105de689c464d'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'elk-dai.png'
  },
  [LPTokenSymbol.WONE_ELK]: {
    SYMBOL: LPTokenSymbol.WONE_ELK,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.ELK],
    ROUTER: ROUTERS[RouterName.Elk],
    ADDRESSES: {
      [ChainID.Testnet]: '0x6efAFaD928704cD059569448B0902177217589b2',
      [ChainID.Mainnet]: '0x6efAFaD928704cD059569448B0902177217589b2'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'one-elk.png'
  },

  // Fuzz
  [LPTokenSymbol.FUZZ_WONE]: {
    SYMBOL: LPTokenSymbol.FUZZ_WONE,
    TOKEN_A: TOKENS[TokenSymbol.FUZZ],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.FuzzSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x6EF6c5f316F70B9FCEfb753A4b004b8Ee9506EB1',
      [ChainID.Mainnet]: '0x6EF6c5f316F70B9FCEfb753A4b004b8Ee9506EB1'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fuzz-one.png'
  },
  [LPTokenSymbol.UST_FUZZ]: {
    SYMBOL: LPTokenSymbol.UST_FUZZ,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.FUZZ],
    ROUTER: ROUTERS[RouterName.FuzzSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x01DB22CA783Bca2d96cDc4eeD07A2F19f3d11E5C',
      [ChainID.Mainnet]: '0x01DB22CA783Bca2d96cDc4eeD07A2F19f3d11E5C'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'ust-fuzz.png'
  },
  [LPTokenSymbol.UST_WONE_FUZZSWAP]: {
    SYMBOL: LPTokenSymbol.UST_WONE_FUZZSWAP,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.FuzzSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xe0ABC0253A8654c2d217f931Df2c9616e30A4573',
      [ChainID.Mainnet]: '0xe0ABC0253A8654c2d217f931Df2c9616e30A4573'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'ust-one.png'
  },

  // OpenSwap
  [LPTokenSymbol.WBTC_BUSD]: {
    SYMBOL: LPTokenSymbol.WBTC_BUSD,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.BUSD],
    ROUTER: ROUTERS[RouterName.OpenSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xCf13B1885C880251b83C30E245c8b313b329D02E',
      [ChainID.Mainnet]: '0xCf13B1885C880251b83C30E245c8b313b329D02E'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'btc-busd.png'
  },
  [LPTokenSymbol.WBTC_WONE_OPENSWAP]: {
    SYMBOL: LPTokenSymbol.WBTC_WONE_OPENSWAP,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.OpenSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x7e634AD011C48F686Cd58a124Dd2EFc7A6A660Ae',
      [ChainID.Mainnet]: '0x7e634AD011C48F686Cd58a124Dd2EFc7A6A660Ae'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'btc-one.png'
  },
  [LPTokenSymbol.BSCBUSD_WBTC]: {
    SYMBOL: LPTokenSymbol.BSCBUSD_WBTC,
    TOKEN_A: TOKENS[TokenSymbol.BSCBUSD],
    TOKEN_B: TOKENS[TokenSymbol.WBTC],
    ROUTER: ROUTERS[RouterName.OpenSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x701df8cb10bc265A07c6ef93B8E834F2F007a24f',
      [ChainID.Mainnet]: '0x701df8cb10bc265A07c6ef93B8E834F2F007a24f'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'bscbusd-btc.png'
  },
  [LPTokenSymbol.BSCBUSD_WONE]: {
    SYMBOL: LPTokenSymbol.BSCBUSD_WONE,
    TOKEN_A: TOKENS[TokenSymbol.BSCBUSD],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.OpenSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xEcDB517093fEAC5f686B20FC51e43604B5f40982',
      [ChainID.Mainnet]: '0xEcDB517093fEAC5f686B20FC51e43604B5f40982'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'bscbusd-one.png'
  },
  [LPTokenSymbol.OPENX_BSCBUSD]: {
    SYMBOL: LPTokenSymbol.OPENX_BSCBUSD,
    TOKEN_A: TOKENS[TokenSymbol.OPENX],
    TOKEN_B: TOKENS[TokenSymbol.BSCBUSD],
    ROUTER: ROUTERS[RouterName.OpenSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x6f850edCE1E3Ea86e6c24317709430cdE3C2e0C4',
      [ChainID.Mainnet]: '0x6f850edCE1E3Ea86e6c24317709430cdE3C2e0C4'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'oo-bscbusd.png'
  },
  [LPTokenSymbol.OPENX_WONE]: {
    SYMBOL: LPTokenSymbol.OPENX_WONE,
    TOKEN_A: TOKENS[TokenSymbol.OPENX],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.OpenSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xF237c4Ffc7F761eD07D665567DcCF6522B96C1E7',
      [ChainID.Mainnet]: '0xF237c4Ffc7F761eD07D665567DcCF6522B96C1E7'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'oo-one.png'
  },

  // SushiSwap
  [LPTokenSymbol.STONE_MIS]: {
    SYMBOL: LPTokenSymbol.STONE_MIS,
    TOKEN_A: TOKENS[TokenSymbol.STONE],
    TOKEN_B: TOKENS[TokenSymbol.MIS],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x281ced1A3Ee6d454DDa3D212235a6fe5c834E28f',
      [ChainID.Mainnet]: '0x281ced1A3Ee6d454DDa3D212235a6fe5c834E28f'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.TRANQ_WONE]: {
    SYMBOL: LPTokenSymbol.TRANQ_WONE,
    TOKEN_A: TOKENS[TokenSymbol.TRANQ],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x643f94fC0a804EA13Adb88B9e17244Bf94022a25',
      [ChainID.Mainnet]: '0x643f94fC0a804EA13Adb88B9e17244Bf94022a25'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'tranq-one.svg'
  },
  [LPTokenSymbol.STONE_ONE]: {
    SYMBOL: LPTokenSymbol.STONE_ONE,
    TOKEN_A: TOKENS[TokenSymbol.STONE],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x6b53CA1ed597Ed7ccd5664EC9e03329992c2Ba87',
      [ChainID.Mainnet]: '0x6b53CA1ed597Ed7ccd5664EC9e03329992c2Ba87'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.ETH_WONE_SUSHISWAP]: {
    SYMBOL: LPTokenSymbol.ETH_WONE_SUSHISWAP,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xeb049F1eD546F8efC3AD57f6c7D22F081CcC7375',
      [ChainID.Mainnet]: '0xeb049F1eD546F8efC3AD57f6c7D22F081CcC7375'
    },
    DECIMALS: 18,
    LOGO_FILENAME: '1eth-one.png'
  },
  [LPTokenSymbol.USDC_WONE_SUSHISWAP]: {
    SYMBOL: LPTokenSymbol.USDC_WONE_SUSHISWAP,
    TOKEN_A: TOKENS[TokenSymbol.USDC],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x24119A214363F0AbC81f1D07CaE90A7b35689a31',
      [ChainID.Mainnet]: '0xBf255d8c30DbaB84eA42110EA7DC870F01c0013A'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'usdc-one.png'
  },
  [LPTokenSymbol.FOX_USDC]: {
    SYMBOL: LPTokenSymbol.FOX_USDC,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x18e0381A0140E09ebcAAff3848074f79aBD554d4',
      [ChainID.Mainnet]: '0xe52b3038800eE067B8C8c1f548BB915Ab7AA8Bc2'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-usdc.png'
  },
  [LPTokenSymbol.WONE_WBTC_SUSHISWAP]: {
    SYMBOL: LPTokenSymbol.WONE_WBTC_SUSHISWAP,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.BTC],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x4F3d9ac088CDF31b1831db3AaF5803aB35c200c4',
      [ChainID.Mainnet]: '0x4F3d9ac088CDF31b1831db3AaF5803aB35c200c4'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'one-btc.png'
  },
  [LPTokenSymbol.UST_RVRS]: {
    SYMBOL: LPTokenSymbol.UST_RVRS,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.RVRS],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xF8838fcC026d8e1F40207AcF5ec1DA0341c37fe2',
      [ChainID.Mainnet]: '0xF8838fcC026d8e1F40207AcF5ec1DA0341c37fe2'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'ust-rvrs.svg'
  },
  [LPTokenSymbol.WONE_RVRS]: {
    SYMBOL: LPTokenSymbol.WONE_RVRS,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.RVRS],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xCDe0A00302CF22B3Ac367201FBD114cEFA1729b4',
      [ChainID.Mainnet]: '0xCDe0A00302CF22B3Ac367201FBD114cEFA1729b4'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'one-rvrs.svg'
  },
  [LPTokenSymbol.FOX_WONE_SUSHISWAP]: {
    SYMBOL: LPTokenSymbol.FOX_WONE_SUSHISWAP,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x97aEB4e8ee9c1f28CbF6d3e20B771677Dc836051',
      [ChainID.Mainnet]: '0xa9C5000616F9C9B73a27999657e99B8990c85162'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-one.png'
  },
  [LPTokenSymbol.UST_ETH]: {
    SYMBOL: LPTokenSymbol.UST_ETH,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.ETH],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x9293DFDd719eE2163f2e158E66Ef75722Ed712B4',
      [ChainID.Mainnet]: '0x9293DFDd719eE2163f2e158E66Ef75722Ed712B4'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'ust-1eth.png'
  },

  // ViperSwap
  [LPTokenSymbol.COMFY_WONE]: {
    SYMBOL: LPTokenSymbol.COMFY_WONE,
    TOKEN_A: TOKENS[TokenSymbol.COMFY],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xF2d9E493a280545699E3C07aEe22eaE9EF24DDb7',
      [ChainID.Mainnet]: '0xF2d9E493a280545699E3C07aEe22eaE9EF24DDb7'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.CSHARE_WONE]: {
    SYMBOL: LPTokenSymbol.CSHARE_WONE,
    TOKEN_A: TOKENS[TokenSymbol.CSHARE],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x8fd44A4fB89e26A97B0eDf99535236D415D03E50',
      [ChainID.Mainnet]: '0x8fd44A4fB89e26A97B0eDf99535236D415D03E50'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.BSCBUSD_COINK]: {
    SYMBOL: LPTokenSymbol.BSCBUSD_COINK,
    TOKEN_A: TOKENS[TokenSymbol.BSCBUSD],
    TOKEN_B: TOKENS[TokenSymbol.COINK],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xE0C74F3a50CB444535B701B374cd094e585Dd196',
      [ChainID.Mainnet]: '0xE0C74F3a50CB444535B701B374cd094e585Dd196'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'bscbusd-coink.png'
  },
  [LPTokenSymbol.BSCUSDC_USDC]: {
    SYMBOL: LPTokenSymbol.BSCUSDC_USDC,
    TOKEN_A: TOKENS[TokenSymbol.BSCUSDC],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xA0E4f1f65e80A7aFb07cB43956DC8b91C7dBC640',
      [ChainID.Mainnet]: '0xA0E4f1f65e80A7aFb07cB43956DC8b91C7dBC640'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'bscbusd-usdc.png'
  },
  [LPTokenSymbol.COINK_WONE]: {
    SYMBOL: LPTokenSymbol.COINK_WONE,
    TOKEN_A: TOKENS[TokenSymbol.COINK],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x082e3bc57ae5a401A4F16Ce85Cabb5C6EfC57Cf2',
      [ChainID.Mainnet]: '0x082e3bc57ae5a401A4F16Ce85Cabb5C6EfC57Cf2'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'coink-one.png'
  },
  [LPTokenSymbol.WONE_XVIPER]: {
    SYMBOL: LPTokenSymbol.WONE_XVIPER,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.XVIPER],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x52b9449A26357F893257901341253B89D6CA0c4a',
      [ChainID.Mainnet]: '0x52b9449A26357F893257901341253B89D6CA0c4a'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },

  [LPTokenSymbol.BUSD_VIPER]: {
    SYMBOL: LPTokenSymbol.BUSD_VIPER,
    TOKEN_A: TOKENS[TokenSymbol.BUSD],
    TOKEN_B: TOKENS[TokenSymbol.VIPER],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x8Dc5549e4c7B71652664468f7086Ccae0171F31d',
      [ChainID.Mainnet]: '0x8Dc5549e4c7B71652664468f7086Ccae0171F31d'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WSWAGMI_WONE]: {
    SYMBOL: LPTokenSymbol.WSWAGMI_WONE,
    TOKEN_A: TOKENS[TokenSymbol.WSWAGMI],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x1cb93763241e0EEe22B098F7d26BaA0562F688E7',
      [ChainID.Mainnet]: '0x1cb93763241e0EEe22B098F7d26BaA0562F688E7'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.COINK_XYA]: {
    SYMBOL: LPTokenSymbol.COINK_XYA,
    TOKEN_A: TOKENS[TokenSymbol.COINK],
    TOKEN_B: TOKENS[TokenSymbol.XYA],
    ROUTER: ROUTERS[RouterName.ViperSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x92711504B415ac0c4d53b1C38b6314E118a9E3BA',
      [ChainID.Mainnet]: '0x92711504B415ac0c4d53b1C38b6314E118a9E3BA'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'coink-xya.png'
  },
  [LPTokenSymbol.FOX_BJEWEL]: {
    SYMBOL: LPTokenSymbol.FOX_BJEWEL,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.BJEWEL],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x0A68d01ed30979D8EBDc8C065E002EAb4c393FfF',
      [ChainID.Mainnet]: '0x0A68d01ed30979D8EBDc8C065E002EAb4c393FfF'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-bjewel.png'
  },
  [LPTokenSymbol.FOX_AME]: {
    SYMBOL: LPTokenSymbol.FOX_AME,
    TOKEN_A: TOKENS[TokenSymbol.FOX],
    TOKEN_B: TOKENS[TokenSymbol.AME],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xA9Ae89Fc743891a7166a884F25abaC50615C9BaD',
      [ChainID.Mainnet]: '0xA9Ae89Fc743891a7166a884F25abaC50615C9BaD'
    },
    DECIMALS: 18,
    LOGO_FILENAME: 'fox-ame.png'
  },
  // WAGMIDAO
  [LPTokenSymbol.GMI_WONE]: {
    SYMBOL: LPTokenSymbol.GMI_WONE,
    TOKEN_A: TOKENS[TokenSymbol.GMI],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0x82010F032DC952Af5FEb4E58ac8bfE1684876af5',
      [ChainID.Mainnet]: '0x82010F032DC952Af5FEb4E58ac8bfE1684876af5'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.GMI_USDC]: {
    SYMBOL: LPTokenSymbol.GMI_USDC,
    TOKEN_A: TOKENS[TokenSymbol.GMI],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0x73919726cC9d988cEa1a378772e5f775dF33C049',
      [ChainID.Mainnet]: '0x73919726cC9d988cEa1a378772e5f775dF33C049'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FAM_WONE]: {
    SYMBOL: LPTokenSymbol.FAM_WONE,
    TOKEN_A: TOKENS[TokenSymbol.FAM],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0xf9904B02fc1f2ea7cE723f770196bcC0dd61E3Ac',
      [ChainID.Mainnet]: '0xf9904B02fc1f2ea7cE723f770196bcC0dd61E3Ac'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FAM_USDC]: {
    SYMBOL: LPTokenSymbol.FAM_USDC,
    TOKEN_A: TOKENS[TokenSymbol.FAM],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0x34B1F30835cC95382BDa5E089caD25b771a82598',
      [ChainID.Mainnet]: '0x34B1F30835cC95382BDa5E089caD25b771a82598'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FAM_BUSD]: {
    SYMBOL: LPTokenSymbol.FAM_BUSD,
    TOKEN_A: TOKENS[TokenSymbol.FAM],
    TOKEN_B: TOKENS[TokenSymbol.BUSD],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0xA3B82D4C50868CE45968Cf1B4FFd10D7cb63c28c',
      [ChainID.Mainnet]: '0xA3B82D4C50868CE45968Cf1B4FFd10D7cb63c28c'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.USDT_FAM]: {
    SYMBOL: LPTokenSymbol.USDT_FAM,
    TOKEN_A: TOKENS[TokenSymbol.USDT],
    TOKEN_B: TOKENS[TokenSymbol.FAM],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0xFDD70bEF99AF112001D4460B68368604FB9E8A42',
      [ChainID.Mainnet]: '0xFDD70bEF99AF112001D4460B68368604FB9E8A42'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FAM_ETH]: {
    SYMBOL: LPTokenSymbol.FAM_ETH,
    TOKEN_A: TOKENS[TokenSymbol.FAM],
    TOKEN_B: TOKENS[TokenSymbol.ETH],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0xa2044a3134D995e85915b924976F7AFb4452eE7E',
      [ChainID.Mainnet]: '0xa2044a3134D995e85915b924976F7AFb4452eE7E'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WBTC_FAM]: {
    SYMBOL: LPTokenSymbol.WBTC_FAM,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.FAM],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0x59b488bBb876f701BF993FE91B24859E1727dFb9',
      [ChainID.Mainnet]: '0x59b488bBb876f701BF993FE91B24859E1727dFb9'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FAM_BNB]: {
    SYMBOL: LPTokenSymbol.FAM_BNB,
    TOKEN_A: TOKENS[TokenSymbol.FAM],
    TOKEN_B: TOKENS[TokenSymbol.BNB],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0x67339294695b35Dad2624b43BfB3aBDfd9Fe1f78',
      [ChainID.Mainnet]: '0x67339294695b35Dad2624b43BfB3aBDfd9Fe1f78'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.FAM_AVAX]: {
    SYMBOL: LPTokenSymbol.FAM_AVAX,
    TOKEN_A: TOKENS[TokenSymbol.FAM],
    TOKEN_B: TOKENS[TokenSymbol.AVAX],
    ROUTER: ROUTERS[RouterName.WagmiDAO],
    ADDRESSES: {
      [ChainID.Testnet]: '0xe656b29Ea70D95E144D43C002BfBCf2b519EBAD1',
      [ChainID.Mainnet]: '0xe656b29Ea70D95E144D43C002BfBCf2b519EBAD1'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.ETH_JEWEL]: {
    SYMBOL: LPTokenSymbol.ETH_JEWEL,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.JEWEL],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xEaB84868f6c8569E14263a5326ECd62F5328a70f',
      [ChainID.Mainnet]: '0xEaB84868f6c8569E14263a5326ECd62F5328a70f'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.ETH_WONE_DEFIKINGDOMS]: {
    SYMBOL: LPTokenSymbol.ETH_WONE_DEFIKINGDOMS,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x864fcd9a42a5f6e0f76BC309Ee26c8fab473FC3e',
      [ChainID.Mainnet]: '0x864fcd9a42a5f6e0f76BC309Ee26c8fab473FC3e'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.SUPERBID_JEWEL]: {
    SYMBOL: LPTokenSymbol.SUPERBID_JEWEL,
    TOKEN_A: TOKENS[TokenSymbol.SUPERBID],
    TOKEN_B: TOKENS[TokenSymbol.JEWEL],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x95f2409a44a9B989F8C5601037C513890E90cd06',
      [ChainID.Mainnet]: '0x95f2409a44a9B989F8C5601037C513890E90cd06'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.SUPERBID_WONE]: {
    SYMBOL: LPTokenSymbol.SUPERBID_WONE,
    TOKEN_A: TOKENS[TokenSymbol.SUPERBID],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x68a73f563ba14d51f070A6ddD073177FB794190A',
      [ChainID.Mainnet]: '0x68a73f563ba14d51f070A6ddD073177FB794190A'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.USDC_WONE_DEFIKINGDOMS]: {
    SYMBOL: LPTokenSymbol.USDC_WONE_DEFIKINGDOMS,
    TOKEN_A: TOKENS[TokenSymbol.USDC],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x66C17f5381d7821385974783BE34c9b31f75Eb78',
      [ChainID.Mainnet]: '0x66C17f5381d7821385974783BE34c9b31f75Eb78'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WBTC_JEWEL]: {
    SYMBOL: LPTokenSymbol.WBTC_JEWEL,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.JEWEL],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x997f00485B238c83f7e58C2Ea1866DFD79f04A4b',
      [ChainID.Mainnet]: '0x997f00485B238c83f7e58C2Ea1866DFD79f04A4b'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_USDC]: {
    SYMBOL: LPTokenSymbol.JEWEL_USDC,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xA1221A5BBEa699f507CC00bDedeA05b5d2e32Eba',
      [ChainID.Mainnet]: '0xA1221A5BBEa699f507CC00bDedeA05b5d2e32Eba'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_AVAX]: {
    SYMBOL: LPTokenSymbol.JEWEL_AVAX,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.AVAX],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x093956649D43f23fe4E7144fb1C3Ad01586cCf1e',
      [ChainID.Mainnet]: '0x093956649D43f23fe4E7144fb1C3Ad01586cCf1e'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_BSCBNB]: {
    SYMBOL: LPTokenSymbol.JEWEL_BSCBNB,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.BNB],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xE7d0116Dd1DBBBA2EFBAd58f097D1FFbbeDc4923',
      [ChainID.Mainnet]: '0xE7d0116Dd1DBBBA2EFBAd58f097D1FFbbeDc4923'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_BUSD]: {
    SYMBOL: LPTokenSymbol.JEWEL_BUSD,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.BUSD],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xE01502Db14929b7733e7112E173C3bCF566F996E',
      [ChainID.Mainnet]: '0xE01502Db14929b7733e7112E173C3bCF566F996E'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_FTM]: {
    SYMBOL: LPTokenSymbol.JEWEL_FTM,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.FTM],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x7f89b5F33138C89FAd4092a7C079973C95362D53',
      [ChainID.Mainnet]: '0x7f89b5F33138C89FAd4092a7C079973C95362D53'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_LUNA]: {
    SYMBOL: LPTokenSymbol.JEWEL_LUNA,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.LUNA],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xB6e9754b90b338ccB2a74fA31de48ad89f65ec5e',
      [ChainID.Mainnet]: '0xB6e9754b90b338ccB2a74fA31de48ad89f65ec5e'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_WMATIC]: {
    SYMBOL: LPTokenSymbol.JEWEL_WMATIC,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.WMATIC],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x3E81154912E5E2Cc9B10Ad123BF14aeb93aE5318',
      [ChainID.Mainnet]: '0x3E81154912E5E2Cc9B10Ad123BF14aeb93aE5318'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_WONE]: {
    SYMBOL: LPTokenSymbol.JEWEL_WONE,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xEb579ddcD49A7beb3f205c9fF6006Bb6390F138f',
      [ChainID.Mainnet]: '0xEb579ddcD49A7beb3f205c9fF6006Bb6390F138f'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.JEWEL_XYA]: {
    SYMBOL: LPTokenSymbol.JEWEL_XYA,
    TOKEN_A: TOKENS[TokenSymbol.JEWEL],
    TOKEN_B: TOKENS[TokenSymbol.XYA],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x3733062773B24F9bAfa1e8f2e5A352976f008A95',
      [ChainID.Mainnet]: '0x3733062773B24F9bAfa1e8f2e5A352976f008A95'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.UST_JEWEL]: {
    SYMBOL: LPTokenSymbol.UST_JEWEL,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.JEWEL],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0xb91A0dFA0178500FEDC526f26A89803C387772E8',
      [ChainID.Mainnet]: '0xb91A0dFA0178500FEDC526f26A89803C387772E8'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WONE_BUSD]: {
    SYMBOL: LPTokenSymbol.WONE_BUSD,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.BUSD],
    ROUTER: ROUTERS[RouterName.DeFiKingdoms],
    ADDRESSES: {
      [ChainID.Testnet]: '0x3a0C4D87BdE442150779d63c1c695d003184dF52',
      [ChainID.Mainnet]: '0x3a0C4D87BdE442150779d63c1c695d003184dF52'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.AXS_ETH]: {
    SYMBOL: LPTokenSymbol.AXS_ETH,
    TOKEN_A: TOKENS[TokenSymbol.AXS],
    TOKEN_B: TOKENS[TokenSymbol.ETH],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xbB680Ba75F7e3e404923D04D484af5ce96b4A4bF',
      [ChainID.Mainnet]: '0xbB680Ba75F7e3e404923D04D484af5ce96b4A4bF'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.ETH_AAVE]: {
    SYMBOL: LPTokenSymbol.ETH_AAVE,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.AAVE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x913De0F91169680c32C8F27212361272Ef4FDfd9',
      [ChainID.Mainnet]: '0x913De0F91169680c32C8F27212361272Ef4FDfd9'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.ETH_DAI]: {
    SYMBOL: LPTokenSymbol.ETH_DAI,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.DAI],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xc5B8129B411EF5f5BE22e74De6fE86C3b69e641d',
      [ChainID.Mainnet]: '0xc5B8129B411EF5f5BE22e74De6fE86C3b69e641d'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.ETH_FRAX]: {
    SYMBOL: LPTokenSymbol.ETH_FRAX,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.FRAX],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xa46BBA980512E328E344Ce12BB969563f3429F05',
      [ChainID.Mainnet]: '0xa46BBA980512E328E344Ce12BB969563f3429F05'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.ETH_USDC]: {
    SYMBOL: LPTokenSymbol.ETH_USDC,
    TOKEN_A: TOKENS[TokenSymbol.ETH],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xf74dBC6B2cC589542551BAd527f4E6b20d746724',
      [ChainID.Mainnet]: '0xf74dBC6B2cC589542551BAd527f4E6b20d746724'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.SUSHI_WONE]: {
    SYMBOL: LPTokenSymbol.SUSHI_WONE,
    TOKEN_A: TOKENS[TokenSymbol.SUSHI],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x468dc50884962D6F81733aC0c23c04611aC219F9',
      [ChainID.Mainnet]: '0x468dc50884962D6F81733aC0c23c04611aC219F9'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.USDT_ETH]: {
    SYMBOL: LPTokenSymbol.USDT_ETH,
    TOKEN_A: TOKENS[TokenSymbol.USDT],
    TOKEN_B: TOKENS[TokenSymbol.ETH],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x02f4d0021E3cb8736108E11C8DF02FbBd6EEEDBf',
      [ChainID.Mainnet]: '0x02f4d0021E3cb8736108E11C8DF02FbBd6EEEDBf'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.USDT_USDC]: {
    SYMBOL: LPTokenSymbol.USDT_USDC,
    TOKEN_A: TOKENS[TokenSymbol.USDT],
    TOKEN_B: TOKENS[TokenSymbol.USDC],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x0c51171b913Db10ade3fd625548E69C9C63aFb96',
      [ChainID.Mainnet]: '0x0c51171b913Db10ade3fd625548E69C9C63aFb96'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.USDT_WONE]: {
    SYMBOL: LPTokenSymbol.USDT_WONE,
    TOKEN_A: TOKENS[TokenSymbol.USDT],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x2c7862b408bb3DBFF277110FFdE1B4EAa45C692a',
      [ChainID.Mainnet]: '0x2c7862b408bb3DBFF277110FFdE1B4EAa45C692a'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WBTC_ETH]: {
    SYMBOL: LPTokenSymbol.WBTC_ETH,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.ETH],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x39bE7c95276954a6f7070F9BAa38db2123691Ed0',
      [ChainID.Mainnet]: '0x39bE7c95276954a6f7070F9BAa38db2123691Ed0'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WBTC_WONE_SUSHISWAP]: {
    SYMBOL: LPTokenSymbol.WBTC_WONE_SUSHISWAP,
    TOKEN_A: TOKENS[TokenSymbol.WBTC],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xc3670b927eF42eed252e483e2446352C238D9905',
      [ChainID.Mainnet]: '0xc3670b927eF42eed252e483e2446352C238D9905'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.YGG_ETH]: {
    SYMBOL: LPTokenSymbol.YGG_ETH,
    TOKEN_A: TOKENS[TokenSymbol.YGG],
    TOKEN_B: TOKENS[TokenSymbol.ETH],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x40112850EFd90e9e17b56de35d86BdFf9f4d07Fd',
      [ChainID.Mainnet]: '0x40112850EFd90e9e17b56de35d86BdFf9f4d07Fd'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.BIFI_WONE]: {
    SYMBOL: LPTokenSymbol.BIFI_WONE,
    TOKEN_A: TOKENS[TokenSymbol.BIFI],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x27f3b2Df4a81382202E87EE40429e0212ecc7d3F',
      [ChainID.Mainnet]: '0x27f3b2Df4a81382202E87EE40429e0212ecc7d3F'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.BSCBUSD_BUSD]: {
    SYMBOL: LPTokenSymbol.BSCBUSD_BUSD,
    TOKEN_A: TOKENS[TokenSymbol.BSCBUSD],
    TOKEN_B: TOKENS[TokenSymbol.BUSD],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0xDA64F9053A971531a75071A729A6432FB65ed60D',
      [ChainID.Mainnet]: '0xDA64F9053A971531a75071A729A6432FB65ed60D'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.UST_WONE]: {
    SYMBOL: LPTokenSymbol.UST_WONE,
    TOKEN_A: TOKENS[TokenSymbol.UST],
    TOKEN_B: TOKENS[TokenSymbol.WONE],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x4dABF6C57A8beA012F1EAa1259Ceed2a62AC7df2',
      [ChainID.Mainnet]: '0x4dABF6C57A8beA012F1EAa1259Ceed2a62AC7df2'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WONE_WBTC]: {
    SYMBOL: LPTokenSymbol.WONE_WBTC,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.BTC],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x4F3d9ac088CDF31b1831db3AaF5803aB35c200c4',
      [ChainID.Mainnet]: '0x4F3d9ac088CDF31b1831db3AaF5803aB35c200c4'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WONE_DAI]: {
    SYMBOL: LPTokenSymbol.WONE_DAI,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.DAI],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x194f4a320cbda15a0910d1AE20E0049Cdc50916e',
      [ChainID.Mainnet]: '0x194f4a320cbda15a0910d1AE20E0049Cdc50916e'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  },
  [LPTokenSymbol.WONE_BUSD]: {
    SYMBOL: LPTokenSymbol.WONE_BUSD,
    TOKEN_A: TOKENS[TokenSymbol.WONE],
    TOKEN_B: TOKENS[TokenSymbol.BUSD],
    ROUTER: ROUTERS[RouterName.SushiSwap],
    ADDRESSES: {
      [ChainID.Testnet]: '0x8c36Ede15c5E4B0E1f9764351a7A7A0037c5e103',
      [ChainID.Mainnet]: '0x8c36Ede15c5E4B0E1f9764351a7A7A0037c5e103'
    },
    DECIMALS: 18,
    LOGO_FILENAME: ''
  }
};

export {
  LPTokenSymbol
};

export type {
  LPToken
};

export default LP_TOKENS;
