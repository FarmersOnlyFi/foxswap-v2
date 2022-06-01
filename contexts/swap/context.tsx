import {createContext, useContext, useReducer} from 'react'
import swapReducer, { initialState } from "./reducer";
import { Currency } from "@foxswap/sdk";
import {string} from "prop-types";

export const SwapContext = createContext(initialState)

export const SwapProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(swapReducer, initialState);

  const switchCurrency = () => {
    dispatch({
      type: "SWITCH_CURRENCY",
      payload: {
        inputCurrency: state.outputCurrency,
        outputCurrency: state.inputCurrency,
        isInputField: !state.isInputField
      }
    })
  }

  const selectCurrency = (currency: Currency, logoURI: string, isInputField: boolean) => {
    const data = isInputField ? {
      inputCurrency: currency,
      inputLogoURI: logoURI
    } : {
      outputCurrency: currency,
      outputLogoURI: logoURI
    }
    dispatch({
      type: "SELECT_CURRENCY",
      payload: data
    })
    console.log(state, {...state})
  }

  const setRecipient = (recipient: string) => {
    dispatch({
      type: "SET_RECIPIENT",
      payload: {
        recipient: recipient
      }
    })
  }

  const setTypedAmount = (typedAmount: string) => {
    dispatch({
      type: "SET_TYPED_AMOUNT",
      payload: {
        typedAmount: typedAmount
      }
    })
  }

  const setFieldType = (isInputField: boolean) => {
    dispatch({
      type: "SET_FIELD_TYPE",
      payload: {
        isInputField: isInputField
      }
    })
  }

  const providerValue = {
    ...state,
    switchCurrency,
    selectCurrency,
    setRecipient,
    setTypedAmount,
    setFieldType
  }

  return <SwapContext.Provider value={providerValue}>{children}</SwapContext.Provider>
}

const useSwapContext = () => {
  const context = useContext(SwapContext)

  if (context === undefined) {
    throw new Error("useSwapContext must be used within SwapContext")
  }

  return context
}

export default useSwapContext