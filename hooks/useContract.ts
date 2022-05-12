import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";

export default function useContract(address: string, abi: any) {
  const abiInterface = new utils.Interface(abi)
  return new Contract(address, abiInterface) as any
}