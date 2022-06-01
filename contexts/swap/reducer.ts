import { Currency } from "@foxswap/sdk";

interface SwapState {
  readonly inputCurrency: Currency | undefined
  readonly outputCurrency: Currency | undefined
  readonly inputLogoURI: string
  readonly outputLogoURI: string
  readonly typedAmount: string | undefined | null
  readonly isInputField: boolean, // True is Input, False is Output
  readonly recipient: string | undefined | null
}

export const initialState: SwapState = {
  inputCurrency: {
    "chainId": 1666600000,
    "address": "0x985458E523dB3d53125813eD68c274899e9DfAb4",
    "symbol": "1USDC",
    "name": "USD Coin",
    "decimals": 6,
    "logoURI": "https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/1USDC.png"
  } as Currency,
  outputCurrency: {
    "chainId": 1666600000,
    "address": "0x0159ED2E06DDCD46a25E74eb8e159Ce666B28687",
    "symbol": "FOX",
    "name": "FarmersOnly Token",
    "decimals": 18,
    "logoURI": "https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/LogoMark/With+Padding/FoxSwap_Logomark_space_white.svg"
  } as Currency,
  inputLogoURI: 'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/1USDC.png',
  outputLogoURI: 'https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/LogoMark/With+Padding/FoxSwap_Logomark_space_white.svg',
  typedAmount: '0',
  isInputField: true,
  recipient: null
}

const swapReducer = (state: SwapState, { type, payload }: any) => {
  switch (type) {
    case "SWITCH_CURRENCY":
      console.log("SWITCH_CURRENCY", payload)
      return {
        ...state,
        isInputField: payload.isInputField,
        inputCurrency: payload.inputCurrency,
        outputCurrency: payload.outputCurrency
      }
    case "SELECT_CURRENCY":
      console.log("SELECT_CURRENCY", payload)
      const field = 'inputCurrency' in payload ? {
        ...state,
        inputCurrency: payload.inputCurrency,
        inputLogoURI: payload.inputLogoURI
      } : {
        ...state,
        outputCurrency: payload.outputCurrency,
        outputLogoURI: payload.outputLogoURI
      }
      return field
    case "SET_RECIPIENT":
      console.log("SET_RECIPIENT", payload)
      return {
        ...state,
        recipient: payload.recipient
      }
    case "SET_TYPED_AMOUNT":
      console.log("SET_TYPED_AMOUNT", payload)
      return {
        ...state,
        typedAmount: payload.typedAmount
      }
    case "SET_FIELD_TYPE":
      console.log("SET_FIELD_TYPE", payload)
      return {
        ...state,
        isInputField: payload.isInputField
      }
    default:
      return state
  }
}

export default swapReducer
