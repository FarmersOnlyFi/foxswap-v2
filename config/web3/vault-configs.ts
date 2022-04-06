
import { SUSHI_SWAP_BUY_LINK, VIPER_SWAP_BUY_LINK } from '@/config/constants/links';
import ROUTERS, { RouterName } from 'config/web3/routers';
import { ChainID } from 'config/web3/chains';
import LP_TOKENS, { LPTokenSymbol } from 'config/web3/lp-tokens';
import TOKENS, { TokenSymbol } from 'config/web3/tokens';
import { VaultConfig } from '../constants/types';
import {
  getAddress,
  getArtemisMasterChefAddress, getComfyMasterChefAddress, getFuzzMasterChefAddress, getHolyGrailMasterChefAddress,
  getMasterChefAddress, getQuartzMasterChefAddress,
  getSushiswapMasterChefAddress
} from "@/utils/addressHelpers";

// TODO: should update code convention for configuration constants (uppercase snake_case)
// TODO: should use router addresses and strat addresses for testnet
// TODO: should configure it with LP token objects instead of redundant fields
// TODO: should use symbol from `LP_TOKENS`

// Vault ordering. 1st burn vaults. Then isHot Vaults
const VAULT_CONFIGS: VaultConfig[] = [
  //
  // Burn vaults
  //
  // {
  //   pid: 113,
  //   farmPid: 0,
  //   lpSymbol: 'Locked TRANQ',
  //   lpAddresses: TOKENS[TokenSymbol.TRANQ].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x9Aa9d2fa97672B8c417900BA000C44d116a94860',
  //     [ChainID.Mainnet]: '0x9Aa9d2fa97672B8c417900BA000C44d116a94860'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x55aE07Bb8Bae1501F9aEBF35801B5699eAE63bb7',
  //     [ChainID.Mainnet]: '0x55aE07Bb8Bae1501F9aEBF35801B5699eAE63bb7'
  //   },
  //   token: TOKENS[TokenSymbol.TRANQ],
  //   quoteToken: TOKENS[TokenSymbol.TRANQ],
  //   isBurn: true,
  //   addLiquidityUrl: '',
  //   chef: RouterName.Tranquil,
  //   chefAddress: '',
  //   burnApr: 66,
  //   router: ROUTERS[RouterName.Tranquil].ADDRESSES
  // },
  {
    pid: 34,
    farmPid: 1,
    lpSymbol: 'USDC-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x8491F1c41AB7a4c5785Ae05AA03FC9D5d799004c',
      [ChainID.Mainnet]: '0x8491F1c41AB7a4c5785Ae05AA03FC9D5d799004c'
    },
    token: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_A,
    isBurn: true,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.NAME,
    chefAddress: getSushiswapMasterChefAddress(),
    burnApr: 11,
    router: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.ADDRESSES
  },
  {
    pid: 35,
    farmPid: 3,
    lpSymbol: '1ETH-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x99317cA257097c59B5044e451D04E88C095B5d37',
      [ChainID.Mainnet]: '0x99317cA257097c59B5044e451D04E88C095B5d37'
    },
    token: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].TOKEN_B,
    isBurn: true,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ROUTER.NAME,
    chefAddress: getSushiswapMasterChefAddress(),
    burnApr: 11,
    router: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ROUTER.ADDRESSES
  },

  //
  // Pinned Hot Vaults
  //
  {
    pid: 73,
    farmPid: 13,
    lpSymbol: 'FOX-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xA3D757269D9b6e5Fad346C5168BAe67FbCe3A51A',
      [ChainID.Mainnet]: '0xA3D757269D9b6e5Fad346C5168BAe67FbCe3A51A'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_WONE_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: []
  },

  //
  // New vaults
  //
  {
    pid: 111,
    farmPid: 29,
    lpSymbol: 'FOX-LUMEN',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x4770fcC014f198ba7C6672e4930f83d28a0BB52d',
      [ChainID.Mainnet]: '0x4770fcC014f198ba7C6672e4930f83d28a0BB52d'
    },
    isNew: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_LUMEN_FOXSWAP].ROUTER.PATH_ONE_LUMEN
  },
  {
    pid: 112,
    farmPid: 30,
    lpSymbol: 'ONE-LUMEN',
    lpToken: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x73A451C0d4f15f0CF1eC2676ce9910c99Af30c85',
      [ChainID.Mainnet]: '0x73A451C0d4f15f0CF1eC2676ce9910c99Af30c85'
    },
    isNew: true,
    token: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP].ROUTER.ADDRESSES,
    path0: [],
    path1: LP_TOKENS[LPTokenSymbol.WONE_LUMEN_FOXSWAP].ROUTER.PATH_ONE_LUMEN
  },
  {
    pid: 104,
    farmPid: 26,
    lpSymbol: 'FOX-xFOX',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x743AC76642971ed4f96bC0B966Ac17FD9c9f90fe',
      [ChainID.Mainnet]: '0x743AC76642971ed4f96bC0B966Ac17FD9c9f90fe'
    },
    isNew: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_XFOX_FOXSWAP].ROUTER.PATH_ONE_XFOX
  },
  {
    pid: 105,
    farmPid: 27,
    lpSymbol: 'FOX-HVILLE',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x3B631805b62C64819b10d80Ad3A3FA267Df6F3c4',
      [ChainID.Mainnet]: '0x3B631805b62C64819b10d80Ad3A3FA267Df6F3c4'
    },
    isNew: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_HVILLE_FOXSWAP].ROUTER.PATH_ONE_HVILLE
  },
  {
    pid: 106,
    farmPid: 28,
    lpSymbol: 'ONE-HVILLE',
    lpToken: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x60058a27E3eFFE3dc42ff6229D5aba161001304F',
      [ChainID.Mainnet]: '0x60058a27E3eFFE3dc42ff6229D5aba161001304F'
    },
    isNew: true,
    token: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP].ROUTER.ADDRESSES,
    path0: [],
    path1: LP_TOKENS[LPTokenSymbol.WONE_HVILLE_FOXSWAP].ROUTER.PATH_ONE_HVILLE
  },
  // {
  //   pid: 103,
  //   lpSymbol: '1BTC',
  //   lpAddresses: TOKENS[TokenSymbol.BTC].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xC35E604b315Bd38Ba6c3c890Db90aB2C2a3dB6f3',
  //     [ChainID.Mainnet]: '0xC35E604b315Bd38Ba6c3c890Db90aB2C2a3dB6f3'
  //   },
  //   token: TOKENS[TokenSymbol.BTC],
  //   quoteToken: TOKENS[TokenSymbol.BTC],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isNew: true,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_BTC,
  //   path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_BTC,
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x481721B918c698ff5f253c56684bAC8dCa84346c',
  //     [ChainID.Mainnet]: '0x481721B918c698ff5f253c56684bAC8dCa84346c'
  //   }
  // },
  // {
  //   pid: 99,
  //   lpSymbol: '1BTC',
  //   lpAddresses: TOKENS[TokenSymbol.BTC].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xd6B530A08D62D5873d6893a7D307989eacf9aDCf',
  //     [ChainID.Mainnet]: '0xd6B530A08D62D5873d6893a7D307989eacf9aDCf'
  //   },
  //   token: TOKENS[TokenSymbol.BTC],
  //   quoteToken: TOKENS[TokenSymbol.BTC],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_BTC,
  //   path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_BTC,
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x481721B918c698ff5f253c56684bAC8dCa84346c',
  //     [ChainID.Mainnet]: '0x481721B918c698ff5f253c56684bAC8dCa84346c'
  //   }
  // },
  // {
  //   pid: 100,
  //   lpSymbol: 'DAI',
  //   lpAddresses: TOKENS[TokenSymbol.DAI].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xf3ac0F7930f253F5dbc2f617B5aFEc1519733A95',
  //     [ChainID.Mainnet]: '0xf3ac0F7930f253F5dbc2f617B5aFEc1519733A95'
  //   },
  //   token: TOKENS[TokenSymbol.DAI],
  //   quoteToken: TOKENS[TokenSymbol.DAI],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isNew: true,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_DAI,
  //   path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_DAI,
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x49d95736FE7f1F32E3ee5deFc26c95bA22834639',
  //     [ChainID.Mainnet]: '0x49d95736FE7f1F32E3ee5deFc26c95bA22834639'
  //   }
  // },
  // {
  //   pid: 97,
  //   lpSymbol: 'DAI',
  //   lpAddresses: TOKENS[TokenSymbol.DAI].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x39640f264EF28192Ee0463ada08e25fB5d9da5d4',
  //     [ChainID.Mainnet]: '0x39640f264EF28192Ee0463ada08e25fB5d9da5d4'
  //   },
  //   token: TOKENS[TokenSymbol.DAI],
  //   quoteToken: TOKENS[TokenSymbol.DAI],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_DAI,
  //   path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_DAI,
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x49d95736FE7f1F32E3ee5deFc26c95bA22834639',
  //     [ChainID.Mainnet]: '0x49d95736FE7f1F32E3ee5deFc26c95bA22834639'
  //   }
  // },
  // {
  //   pid: 107,
  //   lpSymbol: 'xVIPER->VIPER',
  //   lpAddresses: TOKENS[TokenSymbol.XVIPER].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xe9b12F4239ca31efB15E4DBb0859f9bC37F1F9dc',
  //     [ChainID.Mainnet]: '0xe9b12F4239ca31efB15E4DBb0859f9bC37F1F9dc'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x75de75158B0CE2FE38Eaf61632f96ecD713a6FF7',
  //     [ChainID.Mainnet]: '0x75de75158B0CE2FE38Eaf61632f96ecD713a6FF7'
  //   },
  //   token: TOKENS[TokenSymbol.XVIPER],
  //   quoteToken: TOKENS[TokenSymbol.XVIPER],
  //   rewardToken: TOKENS[TokenSymbol.VIPER],
  //   addLiquidityUrl: VIPER_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.ViperSwap].NAME,
  //   farmPid: 0,
  //   zapEnabled: false,
  //   router: ROUTERS[RouterName.ViperSwap].ADDRESSES,
  //   path0: [],
  //   path1: []
  // },
  // {
  //   pid: 108,
  //   lpSymbol: 'xVIPER->wsWAGMI',
  //   lpAddresses: TOKENS[TokenSymbol.XVIPER].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xd6b7af842C7da6a3633AD490CcD1032A59CD7977',
  //     [ChainID.Mainnet]: '0xd6b7af842C7da6a3633AD490CcD1032A59CD7977'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x88b0daAef8e729D415d8AA502915527A9425878C',
  //     [ChainID.Mainnet]: '0x88b0daAef8e729D415d8AA502915527A9425878C'
  //   },
  //   token: TOKENS[TokenSymbol.XVIPER],
  //   quoteToken: TOKENS[TokenSymbol.XVIPER],
  //   rewardToken: TOKENS[TokenSymbol.WSWAGMI],
  //   addLiquidityUrl: VIPER_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.ViperSwap].NAME,
  //   farmPid: 0,
  //   zapEnabled: false,
  //   router: ROUTERS[RouterName.ViperSwap].ADDRESSES,
  //   path0: [],
  //   path1: []
  // },
  // {
  //   pid: 109,
  //   lpSymbol: 'xVIPER->CSHARE',
  //   lpAddresses: TOKENS[TokenSymbol.XVIPER].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xF6CFE4ddB751aADc1A19b6Dd16b0713Afd4808dd',
  //     [ChainID.Mainnet]: '0xF6CFE4ddB751aADc1A19b6Dd16b0713Afd4808dd'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x5D36dE2846134E6bAc2E84042C975e460337538d',
  //     [ChainID.Mainnet]: '0x5D36dE2846134E6bAc2E84042C975e460337538d'
  //   },
  //   token: TOKENS[TokenSymbol.XVIPER],
  //   quoteToken: TOKENS[TokenSymbol.XVIPER],
  //   rewardToken: TOKENS[TokenSymbol.CSHARE],
  //   addLiquidityUrl: VIPER_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.ViperSwap].NAME,
  //   farmPid: 0,
  //   zapEnabled: false,
  //   router: ROUTERS[RouterName.ViperSwap].ADDRESSES,
  //   path0: [],
  //   path1: []
  // },
  // {
  //   pid: 110,
  //   lpSymbol: 'wsWAGMI->VIPER',
  //   lpAddresses: TOKENS[TokenSymbol.WSWAGMI].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x6Ef71578c7A5CcDAd8d992F97E90BAF782950bfa',
  //     [ChainID.Mainnet]: '0x6Ef71578c7A5CcDAd8d992F97E90BAF782950bfa'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x249a360CeC6687e145D76444Af176335F7C2F818',
  //     [ChainID.Mainnet]: '0x249a360CeC6687e145D76444Af176335F7C2F818'
  //   },
  //   token: TOKENS[TokenSymbol.WSWAGMI],
  //   quoteToken: TOKENS[TokenSymbol.WSWAGMI],
  //   rewardToken: TOKENS[TokenSymbol.VIPER],
  //   addLiquidityUrl: VIPER_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.ViperSwap].NAME,
  //   farmPid: 0,
  //   zapEnabled: false,
  //   router: ROUTERS[RouterName.ViperSwap].ADDRESSES,
  //   path0: [],
  //   path1: []
  // },
  {
    pid: 93,
    farmPid: 0,
    lpSymbol: 'COMFY-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.COMFY_WONE],
    lpAddresses: LP_TOKENS[LPTokenSymbol.COMFY_WONE].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xa4EB39b8A3B7CA25147Ba18889aaEC249Cd3954c',
      [ChainID.Mainnet]: '0xa4EB39b8A3B7CA25147Ba18889aaEC249Cd3954c'
    },
    token: LP_TOKENS[LPTokenSymbol.COMFY_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.COMFY_WONE].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.COMFY_WONE].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Comfy].NAME,
    chefAddress: getComfyMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.COMFY_WONE].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.COMFY_WONE].ROUTER.PATH_ONE_COMFY,
    path1: []
  },
  {
    pid: 94,
    farmPid: 1,
    lpSymbol: 'CSHARE-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.CSHARE_WONE],
    lpAddresses: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xf879BCc446F18EaaE14145e8c06b1158f2119889',
      [ChainID.Mainnet]: '0xf879BCc446F18EaaE14145e8c06b1158f2119889'
    },
    token: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Comfy].NAME,
    chefAddress: getComfyMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.CSHARE_WONE].ROUTER.PATH_ONE_CSHARE,
    path1: []
  },
  {
    pid: 88,
    farmPid: 0,
    lpSymbol: 'HLY-USDC',
    lpToken: LP_TOKENS[LPTokenSymbol.HLY_USDC],
    lpAddresses: LP_TOKENS[LPTokenSymbol.HLY_USDC].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xE302A2Cd54Bb7dD50880795998cFcC5b8A9371Cb',
      [ChainID.Mainnet]: '0xE302A2Cd54Bb7dD50880795998cFcC5b8A9371Cb'
    },
    token: LP_TOKENS[LPTokenSymbol.HLY_USDC].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.HLY_USDC].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.HLY_USDC].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.HolyGrail].NAME,
    chefAddress: getHolyGrailMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.HLY_USDC].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.HLY_USDC].ROUTER.PATH_ONE_HLY,
    path1: LP_TOKENS[LPTokenSymbol.HLY_USDC].ROUTER.PATH_ONE_USDC
  },
  {
    pid: 89,
    farmPid: 1,
    lpSymbol: 'HLY-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.HLY_WONE],
    lpAddresses: LP_TOKENS[LPTokenSymbol.HLY_WONE].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x01333c4B1ef41301234d11329e8f05B981Ebb9b3',
      [ChainID.Mainnet]: '0x01333c4B1ef41301234d11329e8f05B981Ebb9b3'
    },
    token: LP_TOKENS[LPTokenSymbol.HLY_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.HLY_WONE].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.HLY_WONE].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.HolyGrail].NAME,
    chefAddress: getHolyGrailMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.HLY_WONE].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.HLY_WONE].ROUTER.PATH_ONE_HLY,
    path1: []
  },
  {
    pid: 90,
    farmPid: 7,
    lpSymbol: 'JEWEL-HLY',
    lpToken: LP_TOKENS[LPTokenSymbol.JEWEL_HLY],
    lpAddresses: LP_TOKENS[LPTokenSymbol.JEWEL_HLY].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x8c8C2f5a4F542a37EF6A7949E34d6EDD06Bc1369',
      [ChainID.Mainnet]: '0x8c8C2f5a4F542a37EF6A7949E34d6EDD06Bc1369'
    },
    token: LP_TOKENS[LPTokenSymbol.JEWEL_HLY].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.JEWEL_HLY].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.JEWEL_HLY].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.HolyGrail].NAME,
    chefAddress: getHolyGrailMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.JEWEL_HLY].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.JEWEL_HLY].ROUTER.PATH_ONE_JEWEL,
    path1: LP_TOKENS[LPTokenSymbol.JEWEL_HLY].ROUTER.PATH_ONE_HLY
  },

  //
  // Hot vaults
  //
  {
    pid: 74,
    farmPid: 14,
    lpSymbol: 'FOX-UST',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xa78d57CafCb0f56832cd65F254A025eC7b2651f0',
      [ChainID.Mainnet]: '0xa78d57CafCb0f56832cd65F254A025eC7b2651f0'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_UST_FOXSWAP].ROUTER.PATH_ONE_UST
  },
  {
    pid: 65,
    lpSymbol: 'USDC',
    lpAddresses: TOKENS[TokenSymbol.USDC].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x522881034b47a907d096329Fb4296A6961b69779',
      [ChainID.Mainnet]: '0x522881034b47a907d096329Fb4296A6961b69779'
    },
    token: TOKENS[TokenSymbol.USDC],
    quoteToken: TOKENS[TokenSymbol.USDC],
    addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
    chef: ROUTERS[RouterName.Tranquil].NAME,
    farmPid: 0,
    isHot: true,
    isSingleAsset: true,
    router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
    chefAddress: getSushiswapMasterChefAddress(),
    path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_USDC,
    path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_USDC,
    tqTokenAddress: {
      [ChainID.Testnet]: '0xCa3e902eFdb2a410C952Fd3e4ac38d7DBDCB8E96',
      [ChainID.Mainnet]: '0xCa3e902eFdb2a410C952Fd3e4ac38d7DBDCB8E96'
    }
  },
  {
    pid: 67,
    lpSymbol: 'ETH',
    lpAddresses: TOKENS[TokenSymbol.ETH].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x47a89d8e0FB9149D405E8b7d52e13Ab95A8690cd',
      [ChainID.Mainnet]: '0x47a89d8e0FB9149D405E8b7d52e13Ab95A8690cd'
    },
    token: TOKENS[TokenSymbol.ETH],
    quoteToken: TOKENS[TokenSymbol.ETH],
    addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
    chef: ROUTERS[RouterName.Tranquil].NAME,
    farmPid: 0,
    isHot: true,
    isSingleAsset: true,
    router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
    chefAddress: getSushiswapMasterChefAddress(),
    path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_ETH,
    path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_ETH,
    tqTokenAddress: {
      [ChainID.Testnet]: '0xc63AB8c72e636C9961c5e9288b697eC5F0B8E1F7',
      [ChainID.Mainnet]: '0xc63AB8c72e636C9961c5e9288b697eC5F0B8E1F7'
    }
  },
  // {
  //   pid: 68,
  //   lpSymbol: 'BTC',
  //   lpAddresses: TOKENS[TokenSymbol.WBTC].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xEc915a5bA226c76Cbb6b122dEac1D82fc14C1c8E',
  //     [ChainID.Mainnet]: '0xEc915a5bA226c76Cbb6b122dEac1D82fc14C1c8E'
  //   },
  //   token: TOKENS[TokenSymbol.WBTC],
  //   quoteToken: TOKENS[TokenSymbol.WBTC],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isHot: true,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_WBTC,
  //   path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_WBTC,
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0xd9c0D8Ad06ABE10aB29655ff98DcAAA0E059184A',
  //     [ChainID.Mainnet]: '0xd9c0D8Ad06ABE10aB29655ff98DcAAA0E059184A'
  //   }
  // },
  // {
  //   pid: 64,
  //   lpSymbol: 'stONE',
  //   lpAddresses: TOKENS[TokenSymbol.STONE].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xa42064295d7b173357Dfff4b841743F44d7C1c17',
  //     [ChainID.Mainnet]: '0xa42064295d7b173357Dfff4b841743F44d7C1c17'
  //   },
  //   token: TOKENS[TokenSymbol.STONE],
  //   quoteToken: TOKENS[TokenSymbol.STONE],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isHot: true,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: [],
  //   path1: [],
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x973f22036A0fF3A93654e7829444ec64CB37BD78',
  //     [ChainID.Mainnet]: '0x973f22036A0fF3A93654e7829444ec64CB37BD78'
  //   }
  // },
  // {
  //   pid: 63,
  //   lpSymbol: 'WONE',
  //   lpAddresses: TOKENS[TokenSymbol.WONE].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xA2722f8A629510922d9D95DF04c90fAdE7Fe259F',
  //     [ChainID.Mainnet]: '0xA2722f8A629510922d9D95DF04c90fAdE7Fe259F'
  //   },
  //   token: TOKENS[TokenSymbol.WONE],
  //   quoteToken: TOKENS[TokenSymbol.WONE],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isHot: true,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: [],
  //   path1: [],
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x34B9aa82D89AE04f0f546Ca5eC9C93eFE1288940',
  //     [ChainID.Mainnet]: '0x34B9aa82D89AE04f0f546Ca5eC9C93eFE1288940'
  //   }
  // },
  // {
  //   pid: 66,
  //   lpSymbol: 'USDT',
  //   lpAddresses: TOKENS[TokenSymbol.USDT].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x72E187d0D8F49B0ed04De8Da17Ac8a703C0341FB',
  //     [ChainID.Mainnet]: '0x72E187d0D8F49B0ed04De8Da17Ac8a703C0341FB'
  //   },
  //   token: TOKENS[TokenSymbol.USDT],
  //   quoteToken: TOKENS[TokenSymbol.USDT],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isHot: true,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_USDT,
  //   path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_USDT,
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x7af2430eFa179dB0e76257E5208bCAf2407B2468',
  //     [ChainID.Mainnet]: '0x7af2430eFa179dB0e76257E5208bCAf2407B2468'
  //   }
  // },

  //
  // Rest of Vaults
  //
  {
    pid: 86,
    farmPid: 0,
    lpSymbol: 'UST-QUARTZ',
    lpToken: LP_TOKENS[LPTokenSymbol.UST_QUARTZ],
    lpAddresses: LP_TOKENS[LPTokenSymbol.UST_QUARTZ].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x2F6AC4679a9fe998420ad072cF48b4F96b4D5318',
      [ChainID.Mainnet]: '0x2F6AC4679a9fe998420ad072cF48b4F96b4D5318'
    },
    token: LP_TOKENS[LPTokenSymbol.UST_QUARTZ].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_QUARTZ].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_QUARTZ].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Quartz].NAME,
    chefAddress: getQuartzMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.UST_QUARTZ].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.UST_QUARTZ].ROUTER.PATH_ONE_UST,
    path1: LP_TOKENS[LPTokenSymbol.UST_QUARTZ].ROUTER.PATH_ONE_QUARTZ
  },
  {
    pid: 87,
    farmPid: 2,
    lpSymbol: 'ONE-QSHARE',
    lpToken: LP_TOKENS[LPTokenSymbol.WONE_QSHARE],
    lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x321059e2b269fc16DFb14B18458c733fFe085AEE',
      [ChainID.Mainnet]: '0x321059e2b269fc16DFb14B18458c733fFe085AEE'
    },
    token: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Quartz].NAME,
    chefAddress: getQuartzMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].ROUTER.ADDRESSES,
    path0: [],
    path1: LP_TOKENS[LPTokenSymbol.WONE_QSHARE].ROUTER.PATH_ONE_QSHARE
  },
  {
    pid: 75,
    farmPid: 15,
    lpSymbol: 'FOX-stONE',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xc7D68924A8D1b5D7164beD7cF4ae591179307466',
      [ChainID.Mainnet]: '0xc7D68924A8D1b5D7164beD7cF4ae591179307466'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_STONE_FOXSWAP].ROUTER.PATH_ONE_STONE
  },
  {
    pid: 76,
    farmPid: 16,
    lpSymbol: 'ETH-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xA87071dA69DE4dF3DaC29544d35E5581a16E6A73',
      [ChainID.Mainnet]: '0xA87071dA69DE4dF3DaC29544d35E5581a16E6A73'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.ETH_WONE_FOXSWAP].ROUTER.PATH_ONE_ETH,
    path1: []
  },
  {
    pid: 77,
    farmPid: 17,
    lpSymbol: 'USDC-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xC2ec6bA940d74fC6447C4710EA4F75273F4aEEC0',
      [ChainID.Mainnet]: '0xC2ec6bA940d74fC6447C4710EA4F75273F4aEEC0'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.USDC_WONE_FOXSWAP].ROUTER.PATH_ONE_USDC,
    path1: []
  },
  {
    pid: 78,
    farmPid: 18,
    lpSymbol: 'UST-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xc98F98602A91C944A2CfEa28B910F242a64EE459',
      [ChainID.Mainnet]: '0xc98F98602A91C944A2CfEa28B910F242a64EE459'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.UST_WONE_FOXSWAP].ROUTER.PATH_ONE_UST,
    path1: []
  },
  {
    pid: 79,
    farmPid: 19,
    lpSymbol: 'FOX-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x31241AEB34C1ea02a9B52053389114fBA93B9953',
      [ChainID.Mainnet]: '0x31241AEB34C1ea02a9B52053389114fBA93B9953'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_MIS_FOXSWAP].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 80,
    farmPid: 20,
    lpSymbol: 'FOX-JEWEL',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xFb8bF34942B03B691A888B0284a9Ca7f5E92c664',
      [ChainID.Mainnet]: '0xFb8bF34942B03B691A888B0284a9Ca7f5E92c664'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_JEWEL_FOXSWAP].ROUTER.PATH_ONE_JEWEL
  },
  {
    pid: 81,
    farmPid: 21,
    lpSymbol: 'FOX-RVRS',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xF5B57d670ad99db60Ea2c1B4944297aB402a6Ce8',
      [ChainID.Mainnet]: '0xF5B57d670ad99db60Ea2c1B4944297aB402a6Ce8'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_RVRS_FOXSWAP].ROUTER.PATH_ONE_RVRS
  },
  {
    pid: 82,
    farmPid: 22,
    lpSymbol: 'FOX-rAVAX',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x171B76D444Cf31f73685Dd56aC455578ED232130',
      [ChainID.Mainnet]: '0x171B76D444Cf31f73685Dd56aC455578ED232130'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_RAVAX_FOXSWAP].ROUTER.PATH_ONE_RAVAX
  },
  {
    pid: 83,
    farmPid: 23,
    lpSymbol: 'FOX-TRANQ',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x38f7b189ea39926bc04b9aa780B5cA783a7DAd10',
      [ChainID.Mainnet]: '0x38f7b189ea39926bc04b9aa780B5cA783a7DAd10'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_TRANQ_FOXSWAP].ROUTER.PATH_ONE_TRANQ
  },
  {
    pid: 84,
    farmPid: 24,
    lpSymbol: 'FOX-COINKX',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xe4Cb443EF89d55988Ba83cAd88752106F80304bB',
      [ChainID.Mainnet]: '0xe4Cb443EF89d55988Ba83cAd88752106F80304bB'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_COINKX_FOXSWAP].ROUTER.PATH_ONE_COINKX
  },
  {
    pid: 85,
    farmPid: 25,
    lpSymbol: 'FOX-XYA',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x6cA0513B7D11f9cB781aAc45454beEf39207170C',
      [ChainID.Mainnet]: '0x6cA0513B7D11f9cB781aAc45454beEf39207170C'
    },
    isHot: true,
    token: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_XYA_FOXSWAP].ROUTER.PATH_ONE_XYA
  },

  // Rest of Vaults
  // {
  //   pid: 54,
  //   lpSymbol: 'WONE (Old)',
  //   lpAddresses: TOKENS[TokenSymbol.WONE].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x11EBd48c564D8A9235260EA20133E53A8dCF811E',
  //     [ChainID.Mainnet]: '0x11EBd48c564D8A9235260EA20133E53A8dCF811E'
  //   },
  //   token: TOKENS[TokenSymbol.WONE],
  //   quoteToken: TOKENS[TokenSymbol.WONE],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: [],
  //   path1: [],
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0x34B9aa82D89AE04f0f546Ca5eC9C93eFE1288940',
  //     [ChainID.Mainnet]: '0x34B9aa82D89AE04f0f546Ca5eC9C93eFE1288940'
  //   }
  // },
  // {
  //   pid: 47,
  //   lpSymbol: 'USDC (Old)',
  //   lpAddresses: TOKENS[TokenSymbol.USDC].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xb3c9A185bC39335787Df6f71498F8FDee46C2eB0',
  //     [ChainID.Mainnet]: '0xb3c9A185bC39335787Df6f71498F8FDee46C2eB0'
  //   },
  //   token: TOKENS[TokenSymbol.USDC],
  //   quoteToken: TOKENS[TokenSymbol.USDC],
  //   addLiquidityUrl: SUSHI_SWAP_BUY_LINK,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   farmPid: 0,
  //   isSingleAsset: true,
  //   router: ROUTERS[RouterName.SushiSwap].ADDRESSES,
  //   path0: ROUTERS[RouterName.SushiSwap].PATH_ONE_USDC,
  //   path1: ROUTERS[RouterName.SushiSwap].PATH_ONE_USDC,
  //   tqTokenAddress: {
  //     [ChainID.Testnet]: '0xCa3e902eFdb2a410C952Fd3e4ac38d7DBDCB8E96',
  //     [ChainID.Mainnet]: '0xCa3e902eFdb2a410C952Fd3e4ac38d7DBDCB8E96'
  //   }
  // },
  // {
  //   pid: 69,
  //   lpSymbol: 'stONE-ONE',
  //   lpToken: LP_TOKENS[LPTokenSymbol.STONE_ONE],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.STONE_ONE].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xFaFaca61ba7Ea155Ac9193Ac9BC0b6cf36Ea854b',
  //     [ChainID.Mainnet]: '0xFaFaca61ba7Ea155Ac9193Ac9BC0b6cf36Ea854b'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x692d8e9990A7624002970E808Dbc9BDFEeEDF702',
  //     [ChainID.Mainnet]: '0x692d8e9990A7624002970E808Dbc9BDFEeEDF702'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.STONE_ONE].TOKEN_A,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.STONE_ONE].TOKEN_B,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.STONE_ONE].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   tag2: LP_TOKENS[LPTokenSymbol.STONE_ONE].ROUTER.NAME,
  //   farmPid: 0,
  //   router: LP_TOKENS[LPTokenSymbol.STONE_ONE].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.STONE_ONE].ROUTER.PATH_ONE_STONE,
  //   path1: []
  // },
  {
    pid: 70,
    farmPid: 15,
    lpSymbol: 'MIS-LUMEN',
    lpToken: LP_TOKENS[LPTokenSymbol.MIS_LUMEN],
    lpAddresses: LP_TOKENS[LPTokenSymbol.MIS_LUMEN].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xf43835d327a94c7c1524d2c7c757074655791389',
      [ChainID.Mainnet]: '0xf43835d327a94c7c1524d2c7c757074655791389'
    },
    token: LP_TOKENS[LPTokenSymbol.MIS_LUMEN].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.MIS_LUMEN].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.MIS_LUMEN].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.MIS_LUMEN].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.MIS_LUMEN].ROUTER.PATH_ONE_MIS,
    path1: LP_TOKENS[LPTokenSymbol.MIS_LUMEN].ROUTER.PATH_ONE_LUMEN
  },
  {
    pid: 71,
    farmPid: 17,
    lpSymbol: 'stONE-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.STONE_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.STONE_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x925790eA137aBeAE8B588d3Befb0D7Ba14039e7E',
      [ChainID.Mainnet]: '0x925790eA137aBeAE8B588d3Befb0D7Ba14039e7E'
    },
    token: LP_TOKENS[LPTokenSymbol.STONE_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.STONE_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.STONE_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.STONE_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.STONE_MIS].ROUTER.PATH_ONE_STONE,
    path1: LP_TOKENS[LPTokenSymbol.STONE_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 72,
    farmPid: 18,
    lpSymbol: 'IMRTL-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.IMRTL_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.IMRTL_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x7805c0086c396470b525C2f3Cf7d7C8Bc7b10045',
      [ChainID.Mainnet]: '0x7805c0086c396470b525C2f3Cf7d7C8Bc7b10045'
    },
    token: LP_TOKENS[LPTokenSymbol.IMRTL_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.IMRTL_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.IMRTL_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.IMRTL_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.IMRTL_MIS].ROUTER.PATH_ONE_IMRTL,
    path1: LP_TOKENS[LPTokenSymbol.IMRTL_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 61,
    farmPid: 13,
    lpSymbol: 'ONE-1BTC',
    lpToken: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x6fF43936E4C28FD16CFB03936281566D231cD55C',
      [ChainID.Mainnet]: '0x6fF43936E4C28FD16CFB03936281566D231cD55C'
    },
    token: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.SushiSwap].NAME,
    chefAddress: getSushiswapMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].ROUTER.ADDRESSES,
    path0: [],
    path1: LP_TOKENS[LPTokenSymbol.WONE_WBTC_SUSHISWAP].ROUTER.PATH_ONE_BTC
  },
  {
    pid: 57,
    farmPid: 1,
    lpSymbol: 'USDC-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x2E4F9a05d1D13804B0725232aa956C263dA8901c',
      [ChainID.Mainnet]: '0x2E4F9a05d1D13804B0725232aa956C263dA8901c'
    },
    token: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.NAME,
    chefAddress: getSushiswapMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.PATH_ONE_USDC,
    path1: []
  },

  //
  // Rest of vaults
  //
  {
    pid: 9,
    farmPid: 2,
    lpSymbol: 'FOX-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x7D5Fe069E1737d6982202aF02ea40b90FCC1B067',
      [ChainID.Mainnet]: '0x7D5Fe069E1737d6982202aF02ea40b90FCC1B067'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_WONE_SUSHISWAP].ROUTER.PATH_ONE_FOX,
    path1: []
  },
  {
    pid: 6,
    lpSymbol: 'FOX-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x4Bb7ADf64eC5e88dE79A0311D02610698e5451B2',
      [ChainID.Mainnet]: '0x4Bb7ADf64eC5e88dE79A0311D02610698e5451B2'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].ROUTER.NAME,
    farmPid: 6,
    router: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_WONE_DEFIKINGDOMS].ROUTER.PATH_ONE_FOX,
    path1: []
  },
  {
    pid: 43,
    lpSymbol: 'FOX-rAVAX',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_RAVAX],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x8aecA1F52BC03A6C1250c7e37E526805bACFd852',
      [ChainID.Mainnet]: '0x8aecA1F52BC03A6C1250c7e37E526805bACFd852'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getSushiswapMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ROUTER.NAME,
    farmPid: 10,
    router: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_RAVAX].ROUTER.PATH_ONE_RAVAX
  },
  {
    pid: 7,
    farmPid: 7,
    lpSymbol: 'FOX-UST',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_UST],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_UST].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x4195Ffd17b99F3456984A7A277EBFe4de43a2549',
      [ChainID.Mainnet]: '0x4195Ffd17b99F3456984A7A277EBFe4de43a2549'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_UST].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_UST].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_UST].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_UST].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.FOX_UST].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_UST].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_UST].ROUTER.PATH_ONE_UST
  },
  {
    pid: 8,
    farmPid: 8,
    lpSymbol: 'FOX-JEWEL',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_JEWEL],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xa9236A025BBADa283B3E713B73f29187fCDd8Eb4',
      [ChainID.Mainnet]: '0xa9236A025BBADa283B3E713B73f29187fCDd8Eb4'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_JEWEL].ROUTER.PATH_ONE_JEWEL
  },
  {
    pid: 10,
    farmPid: 1,
    lpSymbol: 'FOX-USDC',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_USDC],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_USDC].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xfc490ad8e505A1E30E48CDdaB5c56dE231a9ee60',
      [ChainID.Mainnet]: '0xfc490ad8e505A1E30E48CDdaB5c56dE231a9ee60'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_USDC].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_USDC].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_USDC].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_USDC].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.FOX_USDC].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_USDC].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_USDC].ROUTER.PATH_ONE_USDC
  },
  {
    pid: 20,
    farmPid: 9,
    lpSymbol: 'FOX-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x2283402719CF75843c9c3e8eEEc66da41786B3ea',
      [ChainID.Mainnet]: '0x2283402719CF75843c9c3e8eEEc66da41786B3ea'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_MIS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_MIS].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 53,
    lpSymbol: 'FOX-RVRS',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_RVRS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x253C7D72AFC927Aed43E31FCA082E0119bC26871',
      [ChainID.Mainnet]: '0x253C7D72AFC927Aed43E31FCA082E0119bC26871'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_RVRS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_RVRS].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ROUTER.NAME,
    farmPid: 11,
    router: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_RVRS].ROUTER.PATH_ONE_RVRS
  },
  // {
  //   pid: 1,
  //   farmPid: 12,
  //   lpSymbol: 'UST-1ETH',
  //   lpToken: LP_TOKENS[LPTokenSymbol.UST_ETH],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.UST_ETH].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xD325970AB2C4eFabDaf1b4dEA350506F7D38433c',
  //     [ChainID.Mainnet]: '0xD325970AB2C4eFabDaf1b4dEA350506F7D38433c'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.UST_ETH].TOKEN_B,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.UST_ETH].TOKEN_A,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_ETH].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: LP_TOKENS[LPTokenSymbol.UST_ETH].ROUTER.NAME,
  //   router: LP_TOKENS[LPTokenSymbol.UST_ETH].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.UST_ETH].ROUTER.PATH_ONE_UST,
  //   path1: LP_TOKENS[LPTokenSymbol.UST_ETH].ROUTER.PATH_ONE_ETH
  // },
  {
    pid: 58,
    farmPid: 13,
    lpSymbol: 'BTC-ETH',
    lpToken: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xeF51e9931c7D6F6e329c06CfEA31574B0a6CFf28',
      [ChainID.Mainnet]: '0xeF51e9931c7D6F6e329c06CfEA31574B0a6CFf28'
    },
    token: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS].ROUTER.PATH_ONE_WBTC,
    path1: LP_TOKENS[LPTokenSymbol.WBTC_ETH_DEFIKINGDOMS].ROUTER.PATH_ONE_ETH
  },
  {
    pid: 2,
    farmPid: 3,
    lpSymbol: '1ETH-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x13D32982c5a72F9acF82fFC299E755af968b50B7',
      [ChainID.Mainnet]: '0x13D32982c5a72F9acF82fFC299E755af968b50B7'
    },
    token: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ROUTER.NAME,
    chefAddress: getSushiswapMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.ETH_WONE_SUSHISWAP].ROUTER.PATH_ONE_ETH,
    path1: []
  },
  {
    pid: 62,
    farmPid: 14,
    lpSymbol: 'COINKX-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.COINKX_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.COINKX_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x8e4d781289351a0A598eA62a4E7fDb74B6c852B6',
      [ChainID.Mainnet]: '0x8e4d781289351a0A598eA62a4E7fDb74B6c852B6'
    },
    token: LP_TOKENS[LPTokenSymbol.COINKX_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.COINKX_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.COINKX_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.COINKX_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.COINKX_MIS].ROUTER.PATH_ONE_COINKX,
    path1: LP_TOKENS[LPTokenSymbol.COINKX_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 11,
    farmPid: 1,
    lpSymbol: 'FUZZ-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.FUZZ_WONE],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FUZZ_WONE].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x4432df432858F95A424685fDE89C8d07A8dF1AB5',
      [ChainID.Mainnet]: '0x4432df432858F95A424685fDE89C8d07A8dF1AB5'
    },
    token: LP_TOKENS[LPTokenSymbol.FUZZ_WONE].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.FUZZ_WONE].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FUZZ_WONE].ROUTER.ADD_LIQUIDITY_URL,
    chef: LP_TOKENS[LPTokenSymbol.FUZZ_WONE].ROUTER.NAME,
    chefAddress: getFuzzMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.FUZZ_WONE].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FUZZ_WONE].ROUTER.PATH_ONE_FUZZ,
    path1: []
  },
  {
    pid: 12,
    farmPid: 2,
    lpSymbol: 'UST-FUZZ',
    lpToken: LP_TOKENS[LPTokenSymbol.UST_FUZZ],
    lpAddresses: LP_TOKENS[LPTokenSymbol.UST_FUZZ].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x63dA44E0BC05D7515b7387Db850c838E64aEF0f9',
      [ChainID.Mainnet]: '0x63dA44E0BC05D7515b7387Db850c838E64aEF0f9'
    },
    token: LP_TOKENS[LPTokenSymbol.UST_FUZZ].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_FUZZ].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_FUZZ].ROUTER.ADD_LIQUIDITY_URL,
    chef: LP_TOKENS[LPTokenSymbol.UST_FUZZ].ROUTER.NAME,
    chefAddress: getFuzzMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.UST_FUZZ].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.UST_FUZZ].ROUTER.PATH_ONE_UST,
    path1: LP_TOKENS[LPTokenSymbol.UST_FUZZ].ROUTER.PATH_ONE_FUZZ
  },
  {
    pid: 13,
    farmPid: 3,
    lpSymbol: 'UST-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xC9ba0cEaD2483428d22676E196d0Da129fA5e5A7',
      [ChainID.Mainnet]: '0xC9ba0cEaD2483428d22676E196d0Da129fA5e5A7'
    },
    token: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP].ROUTER.NAME,
    chefAddress: getFuzzMasterChefAddress(),
    router: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.UST_WONE_FUZZSWAP].ROUTER.PATH_ONE_UST,
    path1: []
  },
  {
    pid: 21,
    farmPid: 0,
    lpSymbol: 'UST-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.UST_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.UST_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x2d15Fce8b738867b44CcA6E4C95a9fA0e92397e3',
      [ChainID.Mainnet]: '0x2d15Fce8b738867b44CcA6E4C95a9fA0e92397e3'
    },
    token: LP_TOKENS[LPTokenSymbol.UST_MIS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_MIS].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.UST_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.UST_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.UST_MIS].ROUTER.PATH_ONE_UST,
    path1: LP_TOKENS[LPTokenSymbol.UST_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 23,
    farmPid: 2,
    lpSymbol: 'ONE-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.WONE_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x98730e6972a0Edc3919AA964AAe32c7B5F51036B',
      [ChainID.Mainnet]: '0x98730e6972a0Edc3919AA964AAe32c7B5F51036B'
    },
    token: LP_TOKENS[LPTokenSymbol.WONE_MIS].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.WONE_MIS].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WONE_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.WONE_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.WONE_MIS].ROUTER.ADDRESSES,
    path0: [],
    path1: LP_TOKENS[LPTokenSymbol.WONE_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 24,
    farmPid: 3,
    lpSymbol: 'USDC-ONE',
    lpToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP],
    lpAddresses: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x0C8ECa0B4cAB21e1A4bc66172D920D58f1040bc0',
      [ChainID.Mainnet]: '0x0C8ECa0B4cAB21e1A4bc66172D920D58f1040bc0'
    },
    token: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_B,
    quoteToken: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].TOKEN_A,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.FarmersOnly].NAME,
    chefAddress: getMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.USDC_WONE_SUSHISWAP].ROUTER.PATH_ONE_USDC,
    path1: [],
    depositFee: 5
  },
  {
    pid: 25,
    farmPid: 3,
    lpSymbol: 'TRANQ-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.TRANQ_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xFE41F5782c96047B8F9A190325258C2df5E0b130',
      [ChainID.Mainnet]: '0xFE41F5782c96047B8F9A190325258C2df5E0b130'
    },
    token: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].ROUTER.PATH_ONE_TRANQ,
    path1: LP_TOKENS[LPTokenSymbol.TRANQ_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 26,
    farmPid: 4,
    lpSymbol: 'WBTC-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.WBTC_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.WBTC_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xb48383Ad14Bc4965c36c3CEd03f6084AD7E58A45',
      [ChainID.Mainnet]: '0xb48383Ad14Bc4965c36c3CEd03f6084AD7E58A45'
    },
    token: LP_TOKENS[LPTokenSymbol.WBTC_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.WBTC_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WBTC_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.WBTC_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.WBTC_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.WBTC_MIS].ROUTER.PATH_ONE_WBTC,
    path1: LP_TOKENS[LPTokenSymbol.WBTC_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 27,
    farmPid: 5,
    lpSymbol: 'JEWEL-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.JEWEL_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xb98681Eac487739A085B44F30a7Ce7B8F14B457f',
      [ChainID.Mainnet]: '0xb98681Eac487739A085B44F30a7Ce7B8F14B457f'
    },
    token: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].ROUTER.PATH_ONE_JEWEL,
    path1: LP_TOKENS[LPTokenSymbol.JEWEL_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 28,
    farmPid: 6,
    lpSymbol: 'XYA-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.XYA_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.XYA_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x0B378DB8903958F080CC2293AAB1dF91a883A4db',
      [ChainID.Mainnet]: '0x0B378DB8903958F080CC2293AAB1dF91a883A4db'
    },
    token: LP_TOKENS[LPTokenSymbol.XYA_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.XYA_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.XYA_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.XYA_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.XYA_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.XYA_MIS].ROUTER.PATH_ONE_XYA,
    path1: LP_TOKENS[LPTokenSymbol.XYA_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 29,
    farmPid: 7,
    lpSymbol: 'FOX-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.FOX_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.FOX_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x2e1483f123Fd19614f531f524427a2F89d2238a7',
      [ChainID.Mainnet]: '0x2e1483f123Fd19614f531f524427a2F89d2238a7'
    },
    token: LP_TOKENS[LPTokenSymbol.FOX_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.FOX_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.PATH_ONE_FOX,
    path1: LP_TOKENS[LPTokenSymbol.FOX_MIS].ROUTER.PATH_ONE_MIS
  },
  {
    pid: 30,
    farmPid: 8,
    lpSymbol: 'UST-USDC',
    lpToken: LP_TOKENS[LPTokenSymbol.UST_USDC],
    lpAddresses: LP_TOKENS[LPTokenSymbol.UST_USDC].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0x4Da1Da9aBC25E239614ae053E17349d426238588',
      [ChainID.Mainnet]: '0x4Da1Da9aBC25E239614ae053E17349d426238588'
    },
    token: LP_TOKENS[LPTokenSymbol.UST_USDC].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.UST_USDC].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_USDC].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.UST_USDC].ROUTER.NAME,
    router: LP_TOKENS[LPTokenSymbol.UST_USDC].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.UST_USDC].ROUTER.PATH_ONE_UST,
    path1: LP_TOKENS[LPTokenSymbol.UST_USDC].ROUTER.PATH_ONE_USDC
  },
  // {
  //   pid: 32,
  //   lpSymbol: 'ONE-ELK',
  //   lpToken: LP_TOKENS[LPTokenSymbol.WONE_ELK],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_ELK].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xbFf66412b430c85Db7De153a56004ff7550f0836',
  //     [ChainID.Mainnet]: '0xbFf66412b430c85Db7De153a56004ff7550f0836'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0xB37910e0daA452dE7f69Bd7D2BAde86c4fba982d',
  //     [ChainID.Mainnet]: '0xB37910e0daA452dE7f69Bd7D2BAde86c4fba982d'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.WONE_ELK].TOKEN_B,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.WONE_ELK].TOKEN_A,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WONE_ELK].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: LP_TOKENS[LPTokenSymbol.WONE_ELK].ROUTER.NAME,
  //   farmPid: 0,
  //   router: LP_TOKENS[LPTokenSymbol.WONE_ELK].ROUTER.ADDRESSES,
  //   path0: [],
  //   path1: LP_TOKENS[LPTokenSymbol.WONE_ELK].ROUTER.PATH_ONE_ELK
  // },
  // {
  //   pid: 33,
  //   lpSymbol: 'ELK-DAI',
  //   lpToken: LP_TOKENS[LPTokenSymbol.ELK_DAI],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.ELK_DAI].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xEc560037A8aD182169AA29737fd9A33c54F2Bb02',
  //     [ChainID.Mainnet]: '0xEc560037A8aD182169AA29737fd9A33c54F2Bb02'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x296CF20137fD77B6C6D7ef43120528Fc3eDfC7fd',
  //     [ChainID.Mainnet]: '0x296CF20137fD77B6C6D7ef43120528Fc3eDfC7fd'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.ELK_DAI].TOKEN_A,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.ELK_DAI].TOKEN_B,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.ELK_DAI].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: LP_TOKENS[LPTokenSymbol.ELK_DAI].ROUTER.NAME,
  //   farmPid: 0,
  //   router: LP_TOKENS[LPTokenSymbol.ELK_DAI].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.ELK_DAI].ROUTER.PATH_ONE_ELK,
  //   path1: LP_TOKENS[LPTokenSymbol.ELK_DAI].ROUTER.PATH_ONE_DAI
  // },
  // {
  //   pid: 36,
  //   lpSymbol: 'OPENX-ONE',
  //   lpToken: LP_TOKENS[LPTokenSymbol.OPENX_WONE],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.OPENX_WONE].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xE855993C656eEE34C1d6746a4d96888383978694',
  //     [ChainID.Mainnet]: '0xE855993C656eEE34C1d6746a4d96888383978694'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.OPENX_WONE].TOKEN_A,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.OPENX_WONE].TOKEN_B,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.OPENX_WONE].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: LP_TOKENS[LPTokenSymbol.OPENX_WONE].ROUTER.NAME,
  //   farmPid: 0,
  //   router: LP_TOKENS[LPTokenSymbol.OPENX_WONE].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.OPENX_WONE].ROUTER.PATH_ONE_OPENX,
  //   path1: []
  // },
  // {
  //   pid: 37,
  //   lpSymbol: 'OPENX-bscBUSD',
  //   lpToken: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x1239a0AA6F1e516BC991f5ab32794a951CCDAeb6',
  //     [ChainID.Mainnet]: '0x1239a0AA6F1e516BC991f5ab32794a951CCDAeb6'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].TOKEN_A,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].TOKEN_B,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].ROUTER.NAME,
  //   farmPid: 1,
  //   router: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].ROUTER.PATH_ONE_OPENX,
  //   path1: LP_TOKENS[LPTokenSymbol.OPENX_BSCBUSD].ROUTER.PATH_ONE_BSCBUSD
  // },
  // {
  //   pid: 45,
  //   lpSymbol: 'bscBUSD-BTC',
  //   lpToken: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xae64fF1d33168684fAf0Cc1927907962600db6b6',
  //     [ChainID.Mainnet]: '0xae64fF1d33168684fAf0Cc1927907962600db6b6'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].TOKEN_B,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].TOKEN_A,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].ROUTER.NAME,
  //   farmPid: 4,
  //   router: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].ROUTER.PATH_ONE_BSCBUSD,
  //   path1: LP_TOKENS[LPTokenSymbol.BSCBUSD_WBTC].ROUTER.PATH_ONE_WBTC
  // },
  // {
  //   pid: 41,
  //   lpSymbol: 'BTC-BUSD',
  //   lpToken: LP_TOKENS[LPTokenSymbol.WBTC_BUSD],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x09004477Baff93EA16262e887aa498C994cf557d',
  //     [ChainID.Mainnet]: '0x09004477Baff93EA16262e887aa498C994cf557d'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].TOKEN_A,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].TOKEN_B,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].ROUTER.NAME,
  //   farmPid: 5,
  //   router: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].ROUTER.PATH_ONE_WBTC,
  //   path1: LP_TOKENS[LPTokenSymbol.WBTC_BUSD].ROUTER.PATH_ONE_BUSD
  // },
  // {
  //   pid: 42,
  //   lpSymbol: 'TRANQ-ONE',
  //   lpToken: LP_TOKENS[LPTokenSymbol.TRANQ_WONE],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x6A07B4119185619328727008c7f9db3583c3923A',
  //     [ChainID.Mainnet]: '0x6A07B4119185619328727008c7f9db3583c3923A'
  //   },
  //   stakingPoolAddress: {
  //     [ChainID.Testnet]: '0x40E73D483412DBb1cACAfc04a87ae1544C9571A9',
  //     [ChainID.Mainnet]: '0x40E73D483412DBb1cACAfc04a87ae1544C9571A9'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].TOKEN_A,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].TOKEN_B,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: ROUTERS[RouterName.Tranquil].NAME,
  //   tag2: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].ROUTER.NAME,
  //   farmPid: 0,
  //   router: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.TRANQ_WONE].ROUTER.PATH_ONE_TRANQ,
  //   path1: []
  // },
  {
    pid: 44,
    lpSymbol: 'rFTM-MIS',
    lpToken: LP_TOKENS[LPTokenSymbol.RFTM_MIS],
    lpAddresses: LP_TOKENS[LPTokenSymbol.RFTM_MIS].ADDRESSES,
    stratAddresses: {
      [ChainID.Testnet]: '0xbAD0a431801ECD35986629c01CaD18ECd48F7A13',
      [ChainID.Mainnet]: '0xbAD0a431801ECD35986629c01CaD18ECd48F7A13'
    },
    token: LP_TOKENS[LPTokenSymbol.RFTM_MIS].TOKEN_A,
    quoteToken: LP_TOKENS[LPTokenSymbol.RFTM_MIS].TOKEN_B,
    addLiquidityUrl: LP_TOKENS[LPTokenSymbol.RFTM_MIS].ROUTER.ADD_LIQUIDITY_URL,
    chef: ROUTERS[RouterName.Artemis].NAME,
    chefAddress: getArtemisMasterChefAddress(),
    tag2: LP_TOKENS[LPTokenSymbol.RFTM_MIS].ROUTER.NAME,
    farmPid: 10,
    router: LP_TOKENS[LPTokenSymbol.RFTM_MIS].ROUTER.ADDRESSES,
    path0: LP_TOKENS[LPTokenSymbol.RFTM_MIS].ROUTER.PATH_ONE_RFTM,
    path1: LP_TOKENS[LPTokenSymbol.RFTM_MIS].ROUTER.PATH_ONE_MIS
  },

  //
  // PAUSED VAULTS BELOW
  //
  // {
  //   pid: 31,
  //   farmPid: 9,
  //   lpSymbol: 'LUNA-MIS',
  //   lpToken: LP_TOKENS[LPTokenSymbol.LUNA_MIS],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.LUNA_MIS].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x7429a097ae99f91a5e195b9DB0600837bCDDa8CE',
  //     [ChainID.Mainnet]: '0x7429a097ae99f91a5e195b9DB0600837bCDDa8CE'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.LUNA_MIS].TOKEN_A,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.LUNA_MIS].TOKEN_B,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.LUNA_MIS].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: ROUTERS[RouterName.Artemis].NAME,
  //   tag2: LP_TOKENS[LPTokenSymbol.LUNA_MIS].ROUTER.NAME,
  //   router: LP_TOKENS[LPTokenSymbol.LUNA_MIS].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.LUNA_MIS].ROUTER.PATH_ONE_LUNA,
  //   path1: LP_TOKENS[LPTokenSymbol.LUNA_MIS].ROUTER.PATH_ONE_MIS
  // },
  // {
  //   pid: 22,
  //   farmPid: 1,
  //   lpSymbol: 'UST-ONE',
  //   lpToken: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x38d8bD3365bbE925b9bd7261a55968193e591b21',
  //     [ChainID.Mainnet]: '0x38d8bD3365bbE925b9bd7261a55968193e591b21'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS].TOKEN_B,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS].TOKEN_A,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: ROUTERS[RouterName.Artemis].NAME,
  //   tag2: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS].ROUTER.NAME,
  //   router: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.UST_WONE_DEFIKINGDOMS].ROUTER.PATH_ONE_UST,
  //   path1: [],
  //   depositFee: 4
  // },
  // {
  //   pid: 52,
  //   lpSymbol: 'MIS-RVRS',
  //   lpToken: LP_TOKENS[LPTokenSymbol.MIS_RVRS],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.MIS_RVRS].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0xeBa469c3dfaeb1e39224C5FBF6a5ba2a1736cD16',
  //     [ChainID.Mainnet]: '0xeBa469c3dfaeb1e39224C5FBF6a5ba2a1736cD16'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.MIS_RVRS].TOKEN_B,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.MIS_RVRS].TOKEN_A,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.MIS_RVRS].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: ROUTERS[RouterName.Artemis].NAME,
  //   tag2: LP_TOKENS[LPTokenSymbol.MIS_RVRS].ROUTER.NAME,
  //   farmPid: 11,
  //   router: LP_TOKENS[LPTokenSymbol.MIS_RVRS].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.MIS_RVRS].ROUTER.PATH_ONE_MIS,
  //   path1: LP_TOKENS[LPTokenSymbol.MIS_RVRS].ROUTER.PATH_ONE_RVRS
  // },
  // {
  //   pid: 55,
  //   lpSymbol: 'ONE-RVRS',
  //   lpToken: LP_TOKENS[LPTokenSymbol.WONE_RVRS],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.WONE_RVRS].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x56eE9963eA5058dF4c99Ac4f396128c39E1CEa31',
  //     [ChainID.Mainnet]: '0x56eE9963eA5058dF4c99Ac4f396128c39E1CEa31'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.WONE_RVRS].TOKEN_B,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.WONE_RVRS].TOKEN_A,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.WONE_RVRS].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: ROUTERS[RouterName.Reverse].NAME,
  //   tag2: LP_TOKENS[LPTokenSymbol.WONE_RVRS].ROUTER.NAME,
  //   farmPid: 1,
  //   router: LP_TOKENS[LPTokenSymbol.WONE_RVRS].ROUTER.ADDRESSES,
  //   path0: [],
  //   path1: LP_TOKENS[LPTokenSymbol.WONE_RVRS].ROUTER.PATH_ONE_RVRS
  // },
  // {
  //   pid: 56,
  //   lpSymbol: 'UST-RVRS',
  //   lpToken: LP_TOKENS[LPTokenSymbol.UST_RVRS],
  //   lpAddresses: LP_TOKENS[LPTokenSymbol.UST_RVRS].ADDRESSES,
  //   stratAddresses: {
  //     [ChainID.Testnet]: '0x04e34e10D123b9551437e9Fa7341e6fFF168413a',
  //     [ChainID.Mainnet]: '0x04e34e10D123b9551437e9Fa7341e6fFF168413a'
  //   },
  //   token: LP_TOKENS[LPTokenSymbol.UST_RVRS].TOKEN_B,
  //   quoteToken: LP_TOKENS[LPTokenSymbol.UST_RVRS].TOKEN_A,
  //   addLiquidityUrl: LP_TOKENS[LPTokenSymbol.UST_RVRS].ROUTER.ADD_LIQUIDITY_URL,
  //   chef: ROUTERS[RouterName.Reverse].NAME,
  //   tag2: LP_TOKENS[LPTokenSymbol.UST_RVRS].ROUTER.NAME,
  //   farmPid: 3,
  //   router: LP_TOKENS[LPTokenSymbol.UST_RVRS].ROUTER.ADDRESSES,
  //   path0: LP_TOKENS[LPTokenSymbol.UST_RVRS].ROUTER.PATH_ONE_UST,
  //   path1: LP_TOKENS[LPTokenSymbol.UST_RVRS].ROUTER.PATH_ONE_RVRS
  // }
];

export default VAULT_CONFIGS;
