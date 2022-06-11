
import TOKENS, {
  Token,
  TokenSymbol
} from './tokens';
import { ChainID } from './chains';
import { Addresses } from "../../types/web3/general";

interface Router {
  readonly NAME: string;
  readonly ADDRESSES: Addresses;
  readonly ADD_LIQUIDITY_URL: string;
  readonly SITE_URL: string;
  readonly REWARD_COIN: Token;
  readonly LOGO_FILENAME: string;
  readonly [key: string]: any;
}

enum RouterName {
  SushiSwap = 'SushiSwap',
  Artemis = 'Artemis',
  FuzzSwap = 'FuzzFi',
  OpenSwap = 'OpenSwap',
  Elk = 'Elk',
  DeFiKingdoms = 'DeFiKingdoms',
  ViperSwap = 'ViperSwap',
  FarmersOnly = 'Foxswap',
  Tranquil = 'Tranquil',
  Reverse = 'Reverse',
  PiggyBank = 'PiggyBank',
  WagmiDAO = 'WagmiDAO',
  Quartz = 'Quartz',
  Comfy = 'Comfy',
  HolyGrail = 'HolyGrail'
}

// TODO: should use router addresses for testnet
const ROUTERS: {
  [key: string]: Router;
} = {
  [RouterName.FarmersOnly]: {
    NAME: RouterName.FarmersOnly,
    ADDRESSES: {
      [ChainID.Testnet]: '0x32253394e1C9E33C0dA3ddD54cDEff07E457A687',
      [ChainID.Mainnet]: '0x32253394e1C9E33C0dA3ddD54cDEff07E457A687'
    },
    ADD_LIQUIDITY_URL: 'https://www.foxswap.one/#/add',
    SITE_URL: 'https://app.farmersonly.fi/farms',
    REWARD_COIN: TOKENS[TokenSymbol.FOX],
    LOGO_FILENAME: 'farmers-only.png',
    PATHS: {
      [TOKENS[TokenSymbol.STONE].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.RVRS].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.RAVAX].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.TRANQ].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.COINKX].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.XYA].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet]
    },
    PATH_ONE_USDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_FOX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_XFOX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.XFOX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_LUMEN: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.LUMEN].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_HVILLE: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.HVILLE].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_UST: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_ETH: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_STONE: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.STONE].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_MIS: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_JEWEL: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_RVRS: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.RVRS].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_RAVAX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.RAVAX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_TRANQ: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.TRANQ].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_COINKX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.COINKX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_XYA: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.XYA].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.DeFiKingdoms]: {
    NAME: RouterName.DeFiKingdoms,
    ADDRESSES: {
      [ChainID.Testnet]: '0x24ad62502d1c652cc7684081169d04896ac20f30',
      [ChainID.Mainnet]: '0x24ad62502d1c652cc7684081169d04896ac20f30'
    },
    ADD_LIQUIDITY_URL: 'https://app.defikingdoms.com/#/add',
    SITE_URL: 'https://game.defikingdoms.com/#/gardens',
    REWARD_COIN: TOKENS[TokenSymbol.JEWEL],
    LOGO_FILENAME: 'defi-kingdoms.png',
    PATHS: {
      [TOKENS[TokenSymbol.AVAX].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BNB].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.FTM].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.MATIC].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.XYA].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.WBTC].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.LUNA].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.RAVAX].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.RVRS].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.RFTM].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.COINKX].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.QUARTZ].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet]
    },
    PATH_ONE_COINKX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.COINKX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_FOX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_HLY: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.HLY].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_IMRTL: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.IMRTL].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_LUMEN: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.LUMEN].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_MIS: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet]],
    PATH_ONE_UST: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_TRANQ: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.TRANQ].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_XYA: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.XYA].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_WBTC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.WBTC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_ETH: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_JEWEL: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_USDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_LUNA: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.LUNA].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_RAVAX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.RAVAX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_RFTM: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.RFTM].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_RVRS: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.RVRS].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_QUARTZ: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.JEWEL].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.QUARTZ].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_QSHARE: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.QSHARE].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.SushiSwap]: {
    NAME: RouterName.SushiSwap,
    ADDRESSES: {
      [ChainID.Testnet]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
      [ChainID.Mainnet]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506'
    },
    ADD_LIQUIDITY_URL: 'https://app.sushi.com/add',
    SITE_URL: 'https://app.sushi.com/farm',
    REWARD_COIN: TOKENS[TokenSymbol.SUSHI],
    LOGO_FILENAME: 'sushi-swap.png',
    // TODO: should remove all `PATH_ONE_` variables and replace usage with function to get path from router.PATHS
    PATHS: {
      [TOKENS[TokenSymbol.AXS].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.YGG].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.AAVE].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.FRAX].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.STONE].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BSCBUSD].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet]
    },
    PATH_ONE_STONE: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.STONE].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_MIS: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.STONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MIS].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_UST: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_ETH: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_WBTC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.WBTC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BTC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BTC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_FOX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FOX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_USDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_TRANQ: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.TRANQ].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_RVRS: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.RVRS].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.Artemis]: {
    NAME: RouterName.Artemis,
    ADDRESSES: {
      [ChainID.Testnet]: 'https://app.artemisprotocol.one/earn',
      [ChainID.Mainnet]: 'https://app.artemisprotocol.one/earn'
    },
    ADD_LIQUIDITY_URL: 'https://app.sushi.com/add',
    SITE_URL: 'https://app.sushi.com/farm',
    REWARD_COIN: TOKENS[TokenSymbol.MIS],
    LOGO_FILENAME: 'artemis.png'
  },
  [RouterName.FuzzSwap]: {
    NAME: RouterName.FuzzSwap,
    ADDRESSES: {
      [ChainID.Testnet]: '0xFb53dAEdF7aB2D60D22ca8d0Aa24285A0A486349',
      [ChainID.Mainnet]: '0xFb53dAEdF7aB2D60D22ca8d0Aa24285A0A486349'
    },
    ADD_LIQUIDITY_URL: 'https://fuzz.fi/add',
    SITE_URL: 'https://fuzz.fi/farms',
    REWARD_COIN: TOKENS[TokenSymbol.FUZZ],
    LOGO_FILENAME: 'fuzz-swap.png',
    PATHS: {},
    PATH_ONE_FUZZ: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FUZZ].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_UST: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.UST].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.OpenSwap]: {
    NAME: RouterName.OpenSwap,
    ADDRESSES: {
      [ChainID.Testnet]: '0x2F99992024DCC51324BA4956bB1c510F36FA54F5',
      [ChainID.Mainnet]: '0x2F99992024DCC51324BA4956bB1c510F36FA54F5'
    },
    ADD_LIQUIDITY_URL: 'https://app.openswap.one/liquidity',
    SITE_URL: 'https://app.openswap.one/farm',
    REWARD_COIN: TOKENS[TokenSymbol.OPENX],
    LOGO_FILENAME: 'open-swap.png',
    PATHS: {
      [TOKENS[TokenSymbol.MATIC].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.OPENX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.ADA].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.OPENX].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BSCUSDC].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]
    },
    PATH_ONE_OPENX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.OPENX].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BSCBUSD: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BSCBUSD].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BUSD: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BSCBNB: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BNB].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_USDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_ETH: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_WBTC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.WBTC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_MATIC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.OPENX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.MATIC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_ADA: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.OPENX].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ADA].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BSCUSDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BSCUSDC].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.Elk]: {
    NAME: RouterName.Elk,
    ADDRESSES: {
      [ChainID.Testnet]: '0xbeA02dc919B08b5aE2158a8fBC60D4DA5640737B',
      [ChainID.Mainnet]: '0xbeA02dc919B08b5aE2158a8fBC60D4DA5640737B'
    },
    ADD_LIQUIDITY_URL: 'https://app.elk.finance/#/add/',
    SITE_URL: 'https://app.elk.finance/#/elk/',
    REWARD_COIN: TOKENS[TokenSymbol.ELK],
    LOGO_FILENAME: 'elk.png',
    PATHS: {
      [TOKENS[TokenSymbol.DAI].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.ELK].ADDRESSES[ChainID.Mainnet]
    },
    PATH_ONE_ELK: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ELK].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_DAI: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ELK].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.DAI].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.ViperSwap]: {
    NAME: RouterName.ViperSwap,
    ADDRESSES: {
      [ChainID.Testnet]: '0xf012702a5f0e54015362cBCA26a26fc90AA832a3',
      [ChainID.Mainnet]: '0xf012702a5f0e54015362cBCA26a26fc90AA832a3'
    },
    ADD_LIQUIDITY_URL: 'https://viper.exchange/#/add',
    SITE_URL: 'https://viper.exchange/#/staking/bridge',
    REWARD_COIN: TOKENS[TokenSymbol.VIPER],
    LOGO_FILENAME: 'viper-swap.png',
    PATHS: {
      [TOKENS[TokenSymbol.BSCUSDC].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BSCBUSD].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet]
    },
    PATH_ONE_USDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_COMFY: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.COMFY].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_CSHARE: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.CSHARE].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_COINK: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.COINK].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_XYA: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.XYA].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BSCUSDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BSCUSDC].ADDRESSES[ChainID.Mainnet]],
    PATH_ONE_BSCBUSD: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BSCBUSD].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.WagmiDAO]: {
    NAME: RouterName.WagmiDAO,
    ADDRESSES: {
      [ChainID.Testnet]: '0x06FDB55031a0924789107bD97E366a27bbB3d422',
      [ChainID.Mainnet]: '0x06FDB55031a0924789107bD97E366a27bbB3d422'
    },
    ADD_LIQUIDITY_URL: 'https://app.wagmidao.io/add/',
    SITE_URL: 'https://app.wagmidao.io/farm',
    REWARD_COIN: TOKENS[TokenSymbol.GMI],
    LOGO_FILENAME: 'gmi.png',
    // TODO: should remove all `PATH_ONE_` variables and replace usage with function to get path from router.PATHS
    PATHS: {
      [TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.USDT].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.WBTC].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.BNB].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      [TOKENS[TokenSymbol.AVAX].ADDRESSES[ChainID.Mainnet]]: TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet]
    },
    PATH_ONE_GMI: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.GMI].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_FAM: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_USDC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BUSD: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BUSD].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_USDT: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.USDT].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_ETH: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.ETH].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_WBTC: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.WBTC].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_BNB: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.BNB].ADDRESSES[ChainID.Mainnet]
    ],
    PATH_ONE_AVAX: [
      TOKENS[TokenSymbol.WONE].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.FAM].ADDRESSES[ChainID.Mainnet],
      TOKENS[TokenSymbol.AVAX].ADDRESSES[ChainID.Mainnet]
    ]
  },
  [RouterName.Tranquil]: {
    NAME: RouterName.Tranquil,
    ADDRESSES: {
      [ChainID.Testnet]: '',
      [ChainID.Mainnet]: ''
    },
    ADD_LIQUIDITY_URL: '',
    SITE_URL: '',
    REWARD_COIN: TOKENS[TokenSymbol.TRANQ],
    LOGO_FILENAME: 'tranquil.svg'
  },
  [RouterName.Reverse]: {
    NAME: RouterName.Reverse,
    ADDRESSES: {
      [ChainID.Testnet]: '',
      [ChainID.Mainnet]: ''
    },
    ADD_LIQUIDITY_URL: '',
    SITE_URL: '',
    REWARD_COIN: TOKENS[TokenSymbol.RVRS],
    LOGO_FILENAME: 'reverse.png'
  },
  [RouterName.PiggyBank]: {
    NAME: RouterName.PiggyBank,
    ADDRESSES: {
      // TODO: should add addresses
      [ChainID.Testnet]: '',
      [ChainID.Mainnet]: ''
    },
    ADD_LIQUIDITY_URL: '',
    SITE_URL: 'https://piggybank.farm/#/',
    REWARD_COIN: TOKENS[TokenSymbol.COINK],
    LOGO_FILENAME: 'piggy-bank.png'
  },
  [RouterName.Quartz]: {
    NAME: RouterName.Quartz,
    ADDRESSES: {
      // TODO: should add addresses
      [ChainID.Testnet]: '',
      [ChainID.Mainnet]: ''
    },
    ADD_LIQUIDITY_URL: '',
    SITE_URL: 'https://quartz-defi.one/farm',
    REWARD_COIN: TOKENS[TokenSymbol.QSHARE],
    LOGO_FILENAME: 'quartz.png'
  },
  [RouterName.Comfy]: {
    NAME: RouterName.Comfy,
    ADDRESSES: {
      // TODO: should add addresses
      [ChainID.Testnet]: '',
      [ChainID.Mainnet]: ''
    },
    ADD_LIQUIDITY_URL: '',
    SITE_URL: 'https://comfy.money/farms',
    REWARD_COIN: TOKENS[TokenSymbol.CSHARE],
    LOGO_FILENAME: 'comfy.png'
  },
  [RouterName.HolyGrail]: {
    NAME: RouterName.HolyGrail,
    ADDRESSES: {
      // TODO: should add addresses
      [ChainID.Testnet]: '',
      [ChainID.Mainnet]: ''
    },
    ADD_LIQUIDITY_URL: '',
    SITE_URL: 'https://holygrail.one/',
    REWARD_COIN: TOKENS[TokenSymbol.HLY],
    LOGO_FILENAME: 'hly.png'
  }
};

export type {
  Router
};

export {
  RouterName
};

export default ROUTERS;
