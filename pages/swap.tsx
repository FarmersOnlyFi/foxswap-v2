import * as React from "react";
import SwapTemplate from "@/components/templates/Swap";

/*
* Swap Steps
* - Load in addresses from URL params, else use defaults (ONE -> FOX)
* - Check if address is from default list. If false, open import token Modal (read on-chain data??)
* - Evaluate input / output currencies to check for a wrap, unwrap, or swap
* - Create expert mode and settings i.e. slippage, single hop, etc.
* */

const Swap = () => <SwapTemplate />

export default Swap
