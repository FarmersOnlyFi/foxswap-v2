import { Addresses } from "config/constants/types";
import { ChainID } from "./chains";

interface Token {
  readonly SYMBOL: TokenSymbol;
  readonly ADDRESSES: Addresses;
  readonly DECIMALS: number;
  readonly PROJECT_LINK: string;
  readonly LOGO_FILENAME: string;
}

enum TokenSymbol {
  MATIC = "MATIC",
  MAGIC = "MAGIC",
  RVRS = "RVRS",
  ADA = "ADA",
  OPENX = "OPENX",
  WBTC = "WBTC",
  BTC = "1BTC",
  ELK = "ELK",
  DAI = "DAI",
  LUNA = "LUNA",
  TRANQ = "TRANQ",
  VIPER = "VIPER",
  RFTM = "rFTM",
  RAVAX = "rAVAX",
  AVAX = "AVAX",
  MIS = "MIS",
  FUZZ = "FUZZ",
  COINK = "COINK",
  BSCBUSD = "bscBUSD",
  XYA = "XYA",
  JEWEL = "JEWEL",
  WONE = "ONE",
  STONE = "stONE",
  BNB = "BNB",
  AME = "AME",
  BSCUSDC = "bscUSDC",
  USDC = "USDC",
  USDT = "USDT",
  BJEWEL = "BJEWEL",
  FOX = "FOX",
  SUSHI = "SUSHI",
  BUSD = "BUSD",
  UST = "UST",
  ETH = "ETH",
  FAM = "FAM",
  GMI = "GMI",
  COINKX = "COINKX",
  SUPERBID = "SUPERBID",
  BIFI = "BIFI",
  YGG = "YGG",
  FRAX = "FRAX",
  AXS = "AXS",
  WMATIC = "WMATIC",
  FTM = "FTM",
  AAVE = "AAVE",
  LUMEN = "LUMEN",
  IMRTL = "IMRTL",
  LOOT = "LOOT",
  QSHARE = "QSHARE",
  QUARTZ = "QUARTZ",
  COMFY = "COMFY",
  CSHARE = "CSHARE",
  HLY = "HLY",
  XFOX = "xFOX",
  HVILLE = "HVILLE",
  XVIPER = "xVIPER",
  WSWAGMI = "wsWAGMI",
  FIRA = "FIRA",
}

// TODO: should use router addresses for testnet
const TOKENS: {
  [key in TokenSymbol]: Token;
} = {
  [TokenSymbol.XFOX]: {
    SYMBOL: TokenSymbol.XFOX,
    ADDRESSES: {
      [ChainID.Testnet]: "0x02f667745A77C376Db5b232846D4b2454e533699",
      [ChainID.Mainnet]: "0x02f667745A77C376Db5b232846D4b2454e533699",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "xfox.png",
  },
  [TokenSymbol.FIRA]: {
    SYMBOL: TokenSymbol.FIRA,
    ADDRESSES: {
      [ChainID.Testnet]: "0x2A719aF848bf365489E548BE5edbEC1D65858e59",
      [ChainID.Mainnet]: "0x2A719aF848bf365489E548BE5edbEC1D65858e59",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "fira.png",
  },
  [TokenSymbol.HVILLE]: {
    SYMBOL: TokenSymbol.HVILLE,
    ADDRESSES: {
      [ChainID.Testnet]: "0xf9565e8c4e13862f677f144b3cdc8700d9c4ba31",
      [ChainID.Mainnet]: "0xf9565e8c4e13862f677f144b3cdc8700d9c4ba31",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "hville-dark.png",
  },
  [TokenSymbol.HLY]: {
    SYMBOL: TokenSymbol.HLY,
    ADDRESSES: {
      [ChainID.Testnet]: "0x8D760497554eecC3B9036fb0364156ef2F0D02BC",
      [ChainID.Mainnet]: "0x8D760497554eecC3B9036fb0364156ef2F0D02BC",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "hly.png",
  },
  [TokenSymbol.COMFY]: {
    SYMBOL: TokenSymbol.COMFY,
    ADDRESSES: {
      [ChainID.Testnet]: "0x702f78E81Cf3DfaE89648b5a9e2e1aa8db1De546",
      [ChainID.Mainnet]: "0x702f78E81Cf3DfaE89648b5a9e2e1aa8db1De546",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "comfy.png",
  },
  [TokenSymbol.CSHARE]: {
    SYMBOL: TokenSymbol.CSHARE,
    ADDRESSES: {
      [ChainID.Testnet]: "0x3CB98cacd44Ee77eb35E99EB74Ace91bF550c964",
      [ChainID.Mainnet]: "0x3CB98cacd44Ee77eb35E99EB74Ace91bF550c964",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "cshare.png",
  },
  [TokenSymbol.QSHARE]: {
    SYMBOL: TokenSymbol.QSHARE,
    ADDRESSES: {
      [ChainID.Testnet]: "0xFa4b16b0f63F5A6D0651592620D585D308F749A4",
      [ChainID.Mainnet]: "0xFa4b16b0f63F5A6D0651592620D585D308F749A4",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "qshare.png",
  },
  [TokenSymbol.QUARTZ]: {
    SYMBOL: TokenSymbol.QUARTZ,
    ADDRESSES: {
      [ChainID.Testnet]: "0xb9E05B4C168B56F73940980aE6EF366354357009",
      [ChainID.Mainnet]: "0xb9E05B4C168B56F73940980aE6EF366354357009",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "quartz.png",
  },
  [TokenSymbol.LUMEN]: {
    SYMBOL: TokenSymbol.LUMEN,
    ADDRESSES: {
      [ChainID.Testnet]: "0xDA7fE71960cd1C19E1b86D6929efD36058F60a03",
      [ChainID.Mainnet]: "0xDA7fE71960cd1C19E1b86D6929efD36058F60a03",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "lumen.svg",
  },
  [TokenSymbol.LOOT]: {
    SYMBOL: TokenSymbol.LOOT,
    ADDRESSES: {
      [ChainID.Testnet]: "0xbDa99C8695986B45a0dD3979cC6f3974D9753D30",
      [ChainID.Mainnet]: "0xbDa99C8695986B45a0dD3979cC6f3974D9753D30",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "loot.png",
  },
  [TokenSymbol.MAGIC]: {
    SYMBOL: TokenSymbol.MAGIC,
    ADDRESSES: {
      [ChainID.Testnet]: "0x892D81221484F690C0a97d3DD18B9144A3ECDFB7",
      [ChainID.Mainnet]: "0x892D81221484F690C0a97d3DD18B9144A3ECDFB7",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "magic.png",
  },
  [TokenSymbol.IMRTL]: {
    SYMBOL: TokenSymbol.IMRTL,
    ADDRESSES: {
      [ChainID.Testnet]: "0x550D9923693998A6FE20801ABe3f1A78e0d75089",
      [ChainID.Mainnet]: "0x550D9923693998A6FE20801ABe3f1A78e0d75089",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "imrtl.png",
  },
  [TokenSymbol.STONE]: {
    SYMBOL: TokenSymbol.STONE,
    ADDRESSES: {
      [ChainID.Testnet]: "0x22D62b19b7039333ad773b7185BB61294F3AdC19",
      [ChainID.Mainnet]: "0x22D62b19b7039333ad773b7185BB61294F3AdC19",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "stone.png",
  },
  [TokenSymbol.MATIC]: {
    SYMBOL: TokenSymbol.MATIC,
    ADDRESSES: {
      [ChainID.Testnet]: "0x6E7bE5B9B4C9953434CD83950D61408f1cCc3bee",
      [ChainID.Mainnet]: "0x6E7bE5B9B4C9953434CD83950D61408f1cCc3bee",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "matic.png",
  },
  [TokenSymbol.RVRS]: {
    SYMBOL: TokenSymbol.RVRS,
    ADDRESSES: {
      [ChainID.Testnet]: "0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE",
      [ChainID.Mainnet]: "0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "rvrs.png",
  },
  [TokenSymbol.ADA]: {
    SYMBOL: TokenSymbol.ADA,
    ADDRESSES: {
      [ChainID.Testnet]: "0x582617bD8Ca80d22D4432E63Fda52D74dcDCEe4c",
      [ChainID.Mainnet]: "0x582617bD8Ca80d22D4432E63Fda52D74dcDCEe4c",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "",
  },
  [TokenSymbol.OPENX]: {
    SYMBOL: TokenSymbol.OPENX,
    ADDRESSES: {
      [ChainID.Testnet]: "0x01A4b054110d57069c1658AFBC46730529A3E326",
      [ChainID.Mainnet]: "0x01A4b054110d57069c1658AFBC46730529A3E326",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "oo.png",
  },
  [TokenSymbol.WBTC]: {
    SYMBOL: TokenSymbol.WBTC,
    ADDRESSES: {
      [ChainID.Testnet]: "0x3095c7557bCb296ccc6e363DE01b760bA031F2d9",
      [ChainID.Mainnet]: "0x3095c7557bCb296ccc6e363DE01b760bA031F2d9",
    },
    DECIMALS: 8,
    PROJECT_LINK: "",
    LOGO_FILENAME: "btc.png",
  },
  [TokenSymbol.BTC]: {
    SYMBOL: TokenSymbol.BTC,
    ADDRESSES: {
      [ChainID.Testnet]: "0xdc54046c0451f9269FEe1840aeC808D36015697d",
      [ChainID.Mainnet]: "0xdc54046c0451f9269FEe1840aeC808D36015697d",
    },
    DECIMALS: 8,
    PROJECT_LINK: "",
    LOGO_FILENAME: "1btc.png",
  },
  [TokenSymbol.ELK]: {
    SYMBOL: TokenSymbol.ELK,
    ADDRESSES: {
      [ChainID.Testnet]: "0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C",
      [ChainID.Mainnet]: "0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "elk.png",
  },
  [TokenSymbol.DAI]: {
    SYMBOL: TokenSymbol.DAI,
    ADDRESSES: {
      [ChainID.Testnet]: "0xEf977d2f931C1978Db5F6747666fa1eACB0d0339",
      [ChainID.Mainnet]: "0xEf977d2f931C1978Db5F6747666fa1eACB0d0339",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "dai.png",
  },
  [TokenSymbol.LUNA]: {
    SYMBOL: TokenSymbol.LUNA,
    ADDRESSES: {
      [ChainID.Testnet]: "0x95CE547D730519A90dEF30d647F37D9E5359B6Ae",
      [ChainID.Mainnet]: "0x95CE547D730519A90dEF30d647F37D9E5359B6Ae",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "luna.png",
  },
  [TokenSymbol.TRANQ]: {
    SYMBOL: TokenSymbol.TRANQ,
    ADDRESSES: {
      [ChainID.Testnet]: "0xCf1709Ad76A79d5a60210F23e81cE2460542A836",
      [ChainID.Mainnet]: "0xCf1709Ad76A79d5a60210F23e81cE2460542A836",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "tranq.svg",
  },
  [TokenSymbol.VIPER]: {
    SYMBOL: TokenSymbol.VIPER,
    ADDRESSES: {
      [ChainID.Testnet]: "0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79",
      [ChainID.Mainnet]: "0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "viper.png",
  },
  [TokenSymbol.XVIPER]: {
    SYMBOL: TokenSymbol.XVIPER,
    ADDRESSES: {
      [ChainID.Testnet]: "0xE064a68994e9380250CfEE3E8C0e2AC5C0924548",
      [ChainID.Mainnet]: "0xE064a68994e9380250CfEE3E8C0e2AC5C0924548",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "viper.png",
  },
  [TokenSymbol.WSWAGMI]: {
    SYMBOL: TokenSymbol.WSWAGMI,
    ADDRESSES: {
      [ChainID.Testnet]: "0xBb948620Fa9cD554eF9A331B13eDeA9B181F9D45",
      [ChainID.Mainnet]: "0xBb948620Fa9cD554eF9A331B13eDeA9B181F9D45",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "wswagmi.png",
  },
  [TokenSymbol.RFTM]: {
    SYMBOL: TokenSymbol.RFTM,
    ADDRESSES: {
      [ChainID.Testnet]: "0xD647090c1cdcdbB72De411B1bA16f03d4A7bba02",
      [ChainID.Mainnet]: "0xD647090c1cdcdbB72De411B1bA16f03d4A7bba02",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "ftm.png",
  },
  [TokenSymbol.RAVAX]: {
    SYMBOL: TokenSymbol.RAVAX,
    ADDRESSES: {
      [ChainID.Testnet]: "0x53BA62dDD5a9A6B6d97C7a496D7832D13A9218c4",
      [ChainID.Mainnet]: "0x53BA62dDD5a9A6B6d97C7a496D7832D13A9218c4",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "avax.png",
  },
  [TokenSymbol.AVAX]: {
    SYMBOL: TokenSymbol.AVAX,
    ADDRESSES: {
      [ChainID.Testnet]: "0xb12c13e66AdE1F72f71834f2FC5082Db8C091358",
      [ChainID.Mainnet]: "0xb12c13e66AdE1F72f71834f2FC5082Db8C091358",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "avax.png",
  },
  [TokenSymbol.MIS]: {
    SYMBOL: TokenSymbol.MIS,
    ADDRESSES: {
      [ChainID.Testnet]: "0xD74433B187Cf0ba998Ad9Be3486B929c76815215",
      [ChainID.Mainnet]: "0xD74433B187Cf0ba998Ad9Be3486B929c76815215",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "mis.png",
  },
  [TokenSymbol.FUZZ]: {
    SYMBOL: TokenSymbol.FUZZ,
    ADDRESSES: {
      [ChainID.Testnet]: "0x984b969a8E82F5cE1121CeB03f96fF5bB3f71FEe",
      [ChainID.Mainnet]: "0x984b969a8E82F5cE1121CeB03f96fF5bB3f71FEe",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "fuzz.png",
  },
  [TokenSymbol.COINK]: {
    SYMBOL: TokenSymbol.COINK,
    ADDRESSES: {
      [ChainID.Testnet]: "0x4970417a897Cc7ae812b9b8Db34bb44833C26739",
      [ChainID.Mainnet]: "0x4970417a897Cc7ae812b9b8Db34bb44833C26739",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "coink.png",
  },
  [TokenSymbol.COINKX]: {
    SYMBOL: TokenSymbol.COINKX,
    ADDRESSES: {
      [ChainID.Testnet]: "0x7ca9C1D0bb11F1b7C31ee5538D7a75aAF2d8E2FC",
      [ChainID.Mainnet]: "0x7ca9C1D0bb11F1b7C31ee5538D7a75aAF2d8E2FC",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "coink.png",
  },
  [TokenSymbol.BSCBUSD]: {
    SYMBOL: TokenSymbol.BSCBUSD,
    ADDRESSES: {
      [ChainID.Testnet]: "0x0aB43550A6915F9f67d0c454C2E90385E6497EaA",
      [ChainID.Mainnet]: "0x0aB43550A6915F9f67d0c454C2E90385E6497EaA",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "busd.png",
  },
  [TokenSymbol.XYA]: {
    SYMBOL: TokenSymbol.XYA,
    ADDRESSES: {
      [ChainID.Testnet]: "0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4",
      [ChainID.Mainnet]: "0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "xya.png",
  },
  [TokenSymbol.JEWEL]: {
    SYMBOL: TokenSymbol.JEWEL,
    ADDRESSES: {
      [ChainID.Testnet]: "0x72Cb10C6bfA5624dD07Ef608027E366bd690048F",
      [ChainID.Mainnet]: "0x72Cb10C6bfA5624dD07Ef608027E366bd690048F",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "jewel.png",
  },
  [TokenSymbol.WONE]: {
    SYMBOL: TokenSymbol.WONE,
    ADDRESSES: {
      [ChainID.Testnet]: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
      [ChainID.Mainnet]: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "one.svg",
  },
  [TokenSymbol.BNB]: {
    SYMBOL: TokenSymbol.BNB,
    ADDRESSES: {
      [ChainID.Testnet]: "0xb1f6E61E1e113625593a22fa6aa94F8052bc39E0",
      [ChainID.Mainnet]: "0xb1f6E61E1e113625593a22fa6aa94F8052bc39E0",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "bnb.png",
  },
  [TokenSymbol.AME]: {
    SYMBOL: TokenSymbol.AME,
    ADDRESSES: {
      [ChainID.Testnet]: "0x7BF379FcB16b4a6F648371cD72D9D443EF24168F",
      [ChainID.Mainnet]: "0x7BF379FcB16b4a6F648371cD72D9D443EF24168F",
    },
    DECIMALS: 18,
    PROJECT_LINK: "https://www.thevalleys.one/",
    LOGO_FILENAME: "ame.png",
  },
  [TokenSymbol.BSCUSDC]: {
    SYMBOL: TokenSymbol.BSCUSDC,
    ADDRESSES: {
      [ChainID.Testnet]: "0x44cED87b9F1492Bf2DCf5c16004832569f7f6cBa",
      [ChainID.Mainnet]: "0x44cED87b9F1492Bf2DCf5c16004832569f7f6cBa",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "usdc.svg",
  },
  [TokenSymbol.USDC]: {
    SYMBOL: TokenSymbol.USDC,
    ADDRESSES: {
      [ChainID.Testnet]: "0x985458E523dB3d53125813eD68c274899e9DfAb4",
      [ChainID.Mainnet]: "0x985458E523dB3d53125813eD68c274899e9DfAb4",
    },
    DECIMALS: 6,
    PROJECT_LINK: "",
    LOGO_FILENAME: "usdc.svg",
  },
  [TokenSymbol.USDT]: {
    SYMBOL: TokenSymbol.USDT,
    ADDRESSES: {
      [ChainID.Testnet]: "0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f",
      [ChainID.Mainnet]: "0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f",
    },
    DECIMALS: 6,
    PROJECT_LINK: "",
    LOGO_FILENAME: "usdt.png",
  },
  [TokenSymbol.BJEWEL]: {
    SYMBOL: TokenSymbol.BJEWEL,
    ADDRESSES: {
      [ChainID.Testnet]: "0x70831eE5F8A0434BD2dDB1e45ED24cBca8B41fec",
      [ChainID.Mainnet]: "0x70831eE5F8A0434BD2dDB1e45ED24cBca8B41fec",
    },
    DECIMALS: 18,
    PROJECT_LINK: "https://www.thevalleys.one/",
    LOGO_FILENAME: "bjewel.png",
  },
  [TokenSymbol.FOX]: {
    SYMBOL: TokenSymbol.FOX,
    ADDRESSES: {
      [ChainID.Testnet]: "0x0159ed2e06ddcd46a25e74eb8e159ce666b28687",
      [ChainID.Mainnet]: "0x0159ed2e06ddcd46a25e74eb8e159ce666b28687",
    },
    DECIMALS: 18,
    PROJECT_LINK: "https://foxswap.one/",
    LOGO_FILENAME: "foxswap.png",
  },
  [TokenSymbol.SUSHI]: {
    SYMBOL: TokenSymbol.SUSHI,
    ADDRESSES: {
      [ChainID.Testnet]: "0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A",
      [ChainID.Mainnet]: "0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A",
    },
    DECIMALS: 18,
    PROJECT_LINK: "https://tixl.org/",
    LOGO_FILENAME: "sushi.png",
  },
  [TokenSymbol.BUSD]: {
    SYMBOL: TokenSymbol.BUSD,
    ADDRESSES: {
      [ChainID.Testnet]: "0xE176EBE47d621b984a73036B9DA5d834411ef734",
      [ChainID.Mainnet]: "0xE176EBE47d621b984a73036B9DA5d834411ef734",
    },
    DECIMALS: 18,
    PROJECT_LINK: "https://tixl.org/",
    LOGO_FILENAME: "busd.png",
  },
  [TokenSymbol.UST]: {
    SYMBOL: TokenSymbol.UST,
    ADDRESSES: {
      [ChainID.Testnet]: "0x224e64ec1BDce3870a6a6c777eDd450454068FEC",
      [ChainID.Mainnet]: "0x224e64ec1BDce3870a6a6c777eDd450454068FEC",
    },
    DECIMALS: 18,
    PROJECT_LINK: "https://tixl.org/",
    LOGO_FILENAME: "ust.png",
  },
  [TokenSymbol.ETH]: {
    SYMBOL: TokenSymbol.ETH,
    ADDRESSES: {
      [ChainID.Testnet]: "0x6983D1E6DEf3690C4d616b13597A09e6193EA013",
      [ChainID.Mainnet]: "0x6983D1E6DEf3690C4d616b13597A09e6193EA013",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "eth.png",
  },
  [TokenSymbol.FAM]: {
    SYMBOL: TokenSymbol.FAM,
    ADDRESSES: {
      [ChainID.Testnet]: "0x53cBA17b4159461a8f9bc0Ed5785654370549b7D",
      [ChainID.Mainnet]: "0x53cBA17b4159461a8f9bc0Ed5785654370549b7D",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "fam.png",
  },
  [TokenSymbol.GMI]: {
    SYMBOL: TokenSymbol.GMI,
    ADDRESSES: {
      [ChainID.Testnet]: "0x8750F5651AF49950b5419928Fecefca7c82141E3",
      [ChainID.Mainnet]: "0x8750F5651AF49950b5419928Fecefca7c82141E3",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "gmi.png",
  },
  [TokenSymbol.SUPERBID]: {
    SYMBOL: TokenSymbol.SUPERBID,
    ADDRESSES: {
      [ChainID.Testnet]: "0x17fDEdda058d43fF1615cdb72a40Ce8704C2479A",
      [ChainID.Mainnet]: "0x17fDEdda058d43fF1615cdb72a40Ce8704C2479A",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "superbid.png",
  },
  [TokenSymbol.BIFI]: {
    SYMBOL: TokenSymbol.BIFI,
    ADDRESSES: {
      [ChainID.Testnet]: "0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
      [ChainID.Mainnet]: "0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "bifi.png",
  },
  [TokenSymbol.YGG]: {
    SYMBOL: TokenSymbol.YGG,
    ADDRESSES: {
      [ChainID.Testnet]: "0x63cf309500d8be0B9fDB8F1fb66C821236c0438c",
      [ChainID.Mainnet]: "0x63cf309500d8be0B9fDB8F1fb66C821236c0438c",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "ygg.png",
  },
  [TokenSymbol.YGG]: {
    SYMBOL: TokenSymbol.YGG,
    ADDRESSES: {
      [ChainID.Testnet]: "0x63cf309500d8be0B9fDB8F1fb66C821236c0438c",
      [ChainID.Mainnet]: "0x63cf309500d8be0B9fDB8F1fb66C821236c0438c",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "ygg.png",
  },
  [TokenSymbol.FRAX]: {
    SYMBOL: TokenSymbol.FRAX,
    ADDRESSES: {
      [ChainID.Testnet]: "0xeB6C08ccB4421b6088e581ce04fcFBed15893aC3",
      [ChainID.Mainnet]: "0xeB6C08ccB4421b6088e581ce04fcFBed15893aC3",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "frax.png",
  },
  [TokenSymbol.AXS]: {
    SYMBOL: TokenSymbol.AXS,
    ADDRESSES: {
      [ChainID.Testnet]: "0x14A7B318fED66FfDcc80C1517C172c13852865De",
      [ChainID.Mainnet]: "0x14A7B318fED66FfDcc80C1517C172c13852865De",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "axs.png",
  },
  [TokenSymbol.WMATIC]: {
    SYMBOL: TokenSymbol.WMATIC,
    ADDRESSES: {
      [ChainID.Testnet]: "0xFbdd194376de19a88118e84E279b977f165d01b8",
      [ChainID.Mainnet]: "0xFbdd194376de19a88118e84E279b977f165d01b8",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "wmatic.png",
  },
  [TokenSymbol.FTM]: {
    SYMBOL: TokenSymbol.FTM,
    ADDRESSES: {
      [ChainID.Testnet]: "0x735aBE48e8782948a37C7765ECb76b98CdE97B0F",
      [ChainID.Mainnet]: "0x735aBE48e8782948a37C7765ECb76b98CdE97B0F",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "ftm.png",
  },
  [TokenSymbol.AAVE]: {
    SYMBOL: TokenSymbol.AAVE,
    ADDRESSES: {
      [ChainID.Testnet]: "0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F",
      [ChainID.Mainnet]: "0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F",
    },
    DECIMALS: 18,
    PROJECT_LINK: "",
    LOGO_FILENAME: "aave.svg",
  },
};

export type { Token };

export { TokenSymbol };

export default TOKENS;
