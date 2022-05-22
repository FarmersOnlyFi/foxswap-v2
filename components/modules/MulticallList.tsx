// import { useCall} from "@usedapp/core";
// import { getMulticallAddress } from "@/utils/addressHelpers";
// import {Call} from "@usedapp/core";
// import {utils} from "ethers";
// import MultiCallABI from "@/config/abi/Multicall.json";
// import {Contract} from "@ethersproject/contracts";
// import {useEffect, useState} from "react";
// import {getPrices} from "../../contexts/farms/lpPrices";

// export default function MulticallItems() {
//   const [calls, setCalls] = useState<Call[]>([])
//   const abiInterface = new utils.Interface(MultiCallABI)
//   const contract = new Contract(getMulticallAddress(), abiInterface) as any
//   // const { state, send } = useContractFunction(contract, 'aggregate', { transactionName: 'Multicall'})
//   useEffect(() => {
//      const getCalls = async () => {
//       const priceCalls = await getPrices()
//       setCalls(priceCalls)
//     };
//      getCalls()
//   }, []);

//   const calldata = calls ? calls.map(call => [call.contract, call.method, call.args]) : {};
//   const result = useCall({
//     contract: contract,
//     method: 'aggregate',
//     args: [calldata]
//   })
//   console.log('value', result)
//   // console.log('error', error)
//   // if (error) {
//   //   console.error(error.message)
//   // }

//   return (
//     <div>
//       <p>Value: {result}</p>
//       {/* <p>Error: {error}</p> */}
//     </div>
//   )

// }
export {}
