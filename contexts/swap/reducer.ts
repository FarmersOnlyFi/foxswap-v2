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
  inputCurrency: undefined,
  outputCurrency: undefined,
  inputLogoURI: '',
  outputLogoURI: '',
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
