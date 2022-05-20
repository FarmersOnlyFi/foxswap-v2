import { Currency } from "@foxswap/sdk";
import {ReducerAction, ReducerState} from "react";

interface SwapState {
  readonly inputCurrency: Currency | undefined,
  readonly outputCurrency: Currency | undefined,
  readonly typedAmount: string,
  readonly isInputField: boolean, // True is Input, False is Output
  readonly recipient: string | null
}

export const initialState: SwapState = {
  inputCurrency: undefined,
  outputCurrency: undefined,
  typedAmount: '',
  isInputField: true,
  recipient: null
}

const swapReducer = (state: any, action: any) => {
  const { type, payload } = action

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
        inputCurrency: payload.inputCurrency
      } : {
        ...state,
        outputCurrency: payload.outputCurrency
      }
      return {
        ...state,

      }
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
    default:
      throw new Error(`No case for type ${type} - Swap Reducer`)
  }
}

export default swapReducer
