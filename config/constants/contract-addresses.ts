import { ChainID } from "../web3/chains";

const CONTRACT_ADDRESSES = Object.freeze({
  artemisMasterChef: {
    [ChainID.Testnet]: '0x59C777cd749b307Be910f15c54A3116ff88f9706',
    [ChainID.Mainnet]: '0x59C777cd749b307Be910f15c54A3116ff88f9706'
  },
  holygrailMasterChef: {
    [ChainID.Testnet]: '0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78',
    [ChainID.Mainnet]: '0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78'
  },
  quartzMasterChef: {
    [ChainID.Testnet]: '0x1da194F8baf85175519D92322a06b46A2638A530',
    [ChainID.Mainnet]: '0x1da194F8baf85175519D92322a06b46A2638A530'
  },
  comfyMasterChef: {
    [ChainID.Testnet]: '0x53efc025d19270b899eBf89DD89a1F58CE1CD66f',
    [ChainID.Mainnet]: '0x53efc025d19270b899eBf89DD89a1F58CE1CD66f'
  },
  autofox: {
    [ChainID.Testnet]: '0xA68E643e1942fA8635776b718F6EeD5cEF2a3F15',
    [ChainID.Mainnet]: '0xA68E643e1942fA8635776b718F6EeD5cEF2a3F15'
  },
  jewel: {
    [ChainID.Testnet]: '0x72Cb10C6bfA5624dD07Ef608027E366bd690048F',
    [ChainID.Mainnet]: '0x72Cb10C6bfA5624dD07Ef608027E366bd690048F'
  },
  masterChef: {
    [ChainID.Testnet]: '0x511Ac8266f5088bb450d954090BeB9Df78E9c745',
    [ChainID.Mainnet]: '0x15e04418d328c39ba747690f6dae9bbf548cd358'
  },
  fuzzMasterChef: {
    [ChainID.Testnet]: '0x847b46Ed6c3DF75E34a0496eF148b89Bf5eB41b1',
    [ChainID.Mainnet]: '0x847b46Ed6c3DF75E34a0496eF148b89Bf5eB41b1'
  },
  sushiswapMasterchef: {
    [ChainID.Testnet]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
    [ChainID.Mainnet]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287'
  },
  piggyMasterChef: {
    [ChainID.Testnet]: '0xF2a7597b1c5759D28fa6a61ee9D6D184Dc86136d',
    [ChainID.Mainnet]: '0xF2a7597b1c5759D28fa6a61ee9D6D184Dc86136d'
  },
  reverseMasterChef: {
    [ChainID.Testnet]: '0xeEA71889c062c135014Ec34825a1958c87A2Ac61',
    [ChainID.Mainnet]: '0xeEA71889c062c135014Ec34825a1958c87A2Ac61'
  },
  vaultChef: {
    [ChainID.Testnet]: '0x2914646E782Cc36297c6639734892927B3b6Fe56',
    [ChainID.Mainnet]: '0x2914646E782Cc36297c6639734892927B3b6Fe56'
  },
  barChef: {
    [ChainID.Testnet]: '0x4D22A39f8cC6584fD334D140E448D141ec67CE09',
    [ChainID.Mainnet]: '0x4D22A39f8cC6584fD334D140E448D141ec67CE09'
  },
  openswapMasterChef: {
    [ChainID.Testnet]: '0xb2E9B85FB43082F3148B0D13450E8BEB5C9B63f2',
    [ChainID.Mainnet]: '0xb2E9B85FB43082F3148B0D13450E8BEB5C9B63f2'
  },
  sousChef: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  lottery: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  lotteryNFT: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  multiCall: {
    [ChainID.Testnet]: '0xFE4980f62D708c2A84D3929859Ea226340759320',
    [ChainID.Mainnet]: '0xFE4980f62D708c2A84D3929859Ea226340759320'
  },
  pancakeProfile: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  pancakeRabbits: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  bunnyFactory: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  claimRefund: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  pointCenterIfo: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  bunnySpecial: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  tradingCompetition: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  tranqComprollerAddress: {
    [ChainID.Testnet]: '0x6a82A17B48EF6be278BBC56138F35d04594587E3',
    [ChainID.Mainnet]: '0x6a82A17B48EF6be278BBC56138F35d04594587E3'
  },
  easterNft: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  cakeVault: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  predictions: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  chainlinkOracle: {
    [ChainID.Testnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859',
    [ChainID.Mainnet]: '0xAB466B0656725bE5B0fD950668884E6A893bd859'
  },
  ZAPPER: {
    [ChainID.Testnet]: '0xF0311506D4701418a0DB84A75FBb33bad9f87439',
    [ChainID.Mainnet]: '0xF0311506D4701418a0DB84A75FBb33bad9f87439'
  },
  factoryV1: {
    [ChainID.Testnet]: '0x0000000000000000000000000000000000000001',
    [ChainID.Mainnet]: '0x0000000000000000000000000000000000000001'
  },
  migratorV2: {
    [ChainID.Testnet]: '0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b',
    [ChainID.Mainnet]: '0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b'
  },
  WONE: {
    [ChainID.Testnet]: '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
    [ChainID.Mainnet]: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a'
  },
  argentWallet: {
    [ChainID.Testnet]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
    [ChainID.Mainnet]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8'
  },
  ENSRegistrar: {
    [ChainID.Testnet]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    [ChainID.Mainnet]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
  },
  governanceAddress: {
    [ChainID.Testnet]: '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
    [ChainID.Mainnet]: '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
  },
  govToken: {
    [ChainID.Testnet]: '0x106B7F900B6feF3cAeD9d76428067F6377489Fda',
    [ChainID.Mainnet]: '0x0159ed2e06ddcd46a25e74eb8e159ce666b28687'
  },
  masterBreeder: {
    [ChainID.Testnet]: '0xead17730a4a8E115A615D1A328B62f1947B2d8D5',
    [ChainID.Mainnet]: '0x15e04418d328c39ba747690f6dae9bbf548cd358'
  },
  pitAddress: {
    [ChainID.Testnet]: '0xc984643a4c06aA0c0e779a80DC9168F1D41c4088',
    [ChainID.Mainnet]: '0x02f667745A77C376Db5b232846D4b2454e533699'
  },
  pitBreeder: {
    [ChainID.Testnet]: '0x15e04418d328c39bA747690F6DaE9Bbf548CD358',
    [ChainID.Mainnet]: '0xb46B7A8160A114091b5E62C2Ee090B0997D99e5a'
  },
  socksController: {
    [ChainID.Testnet]: '0x65770b5283117639760beA3F867b69b3697a91dd',
    [ChainID.Mainnet]: '0x65770b5283117639760beA3F867b69b3697a91dd'
  },
  routerAddress: {
    [ChainID.Testnet]: '0x3b8D93D0CBEaeB3D00FeFC1FaCf1399333626DFF',
    [ChainID.Mainnet]: '0x32253394e1C9E33C0dA3ddD54cDEff07E457A687'
  },
  bondingAddress: {
    [ChainID.Testnet]: '0x42b769209eC38286b858Ae2d919Cd111b12975FE',
    [ChainID.Mainnet]: '0x42b769209eC38286b858Ae2d919Cd111b12975FE'
  },
  timelockAddress: {
    [ChainID.Testnet]: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC',
    [ChainID.Mainnet]: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'
  },
  merkleDistribution: {
    [ChainID.Testnet]: '0x0000000000000000000000000000000000000000',
    [ChainID.Mainnet]: '0x0000000000000000000000000000000000000000'
  }
});

export default CONTRACT_ADDRESSES;
