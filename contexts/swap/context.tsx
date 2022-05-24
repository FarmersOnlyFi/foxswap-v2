import {createContext, useContext, useReducer} from 'react'
import swapReducer, { initialState } from "./reducer";
import { Currency } from "@foxswap/sdk";

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

  const selectCurrency = (currency: Currency) => {
    dispatch({
      type: "SELECT_CURRENCY",
      payload: state.isInputField ? { inputCurrency: currency } : { outputCurrency: currency }
    })
  }

  const setRecipient = (recipient: string) => {
    dispatch({
      type: "SET_RECIPIENT",
      payload: {
        recipient: recipient
      }
    })
  }

  const setTypedAmount = (isInputField: boolean, typedAmount: string) => {
    dispatch({
      type: "SET_TYPED_AMOUNT",
      payload: {
        typedAmount: typedAmount
      }
    })
  }

  const providerValue = {
    ...state,
    switchCurrency,
    selectCurrency,
    setRecipient,
    setTypedAmount
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