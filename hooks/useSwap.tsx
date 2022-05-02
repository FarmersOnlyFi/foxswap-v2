import {DEFAULT_CURRENCIES, Trade, Currency, Token, HARMONY, Percent, Router, JSBI, TradeType} from "@foxswap/sdk";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { abi as IFoxswapV2RouterABI } from '@foxswap/periphery/build/IUniswapV2Router02.json'
import {getRouterAddress} from "@/utils/addressHelpers";
import {Harmony, useContractFunction, useEthers, useLookupAddress} from "@usedapp/core";
import {useCallback} from "react";
import {BIPS_BASE, DEFAULT_DEADLINE_FROM_NOW, INITIAL_ALLOWED_SLIPPAGE} from "@/config/index";

/*
# Call 1 with ONE
{
    "methodName": "swapExactETHForTokens",
    "args": [
        "0x16096a135f26eeb",
        [
            "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
            "0x0159ED2E06DDCD46a25E74eb8e159Ce666B28687"
        ],
        "0xe36093669f8d05f555323E9F0Aee6A2BC41097C1",
        "0x626adbe0"
    ],
    "value": "0xde0b6b3a7640000"
}

# Call 2 with ONE
{
    "methodName": "swapExactETHForTokensSupportingFeeOnTransferTokens",
    "args": [
        "0x1609fe823d1c3ab",
        [
            "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
            "0x0159ED2E06DDCD46a25E74eb8e159Ce666B28687"
        ],
        "0xe36093669f8d05f555323E9F0Aee6A2BC41097C1",
        "0x626add4d"
    ],
    "value": "0xde0b6b3a7640000"
}

-------------

# Call 1 w/o ONE
{
    "methodName": "swapExactTokensForTokens",
    "args": [
        "0xde0b6b3a7640000",
        "0x653b137add7fc0b",
        [
            "0xF9565E8c4E13862f677F144B3cdC8700D9c4BA31",
            "0x0159ED2E06DDCD46a25E74eb8e159Ce666B28687"
        ],
        "0xe36093669f8d05f555323E9F0Aee6A2BC41097C1",
        "0x626adf73"
    ],
    "value": "0x0"
}

# Call 2 w/o ONE
{
    "methodName": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    "args": [
        "0xde0b6b3a7640000",
        "0x653b137add7fc0b",
        [
            "0xF9565E8c4E13862f677F144B3cdC8700D9c4BA31",
            "0x0159ED2E06DDCD46a25E74eb8e159Ce666B28687"
        ],
        "0xe36093669f8d05f555323E9F0Aee6A2BC41097C1",
        "0x626adf73"
    ],
    "value": "0x0"
}
 */

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT'
}

interface SwapState {
  typedValue: string,
}
const swapState = {
  independentField: Field.INPUT,
  typedValue: '',
  [Field.INPUT]: {
    currencyId: ''
  },
  [Field.OUTPUT]: {
    currencyId: ''
  },
  recipient: null
}
const BASE_CURRENCY = HARMONY

export default function useSwap(
  trade: Trade,
  allowedSlippage: number = INITIAL_ALLOWED_SLIPPAGE,
  recipient: string
) {
  const deadline = DEFAULT_DEADLINE_FROM_NOW
  const routerInterface = new utils.Interface(IFoxswapV2RouterABI)
  const contract = new Contract(getRouterAddress(), routerInterface) as any

  const swapMethods = Router.swapCallParameters(trade, {
    feeOnTransfer: trade.tradeType === TradeType.EXACT_INPUT,
    allowedSlippage: new Percent(JSBI.BigInt(allowedSlippage), BIPS_BASE),
    recipient,
    deadline: deadline
  })



}
