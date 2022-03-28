import ethers from 'ethers'
import { ContractInterface, providers as ethersProviders } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { isAddress } from '@ethersproject/address'
import { providers } from '@0xsequence/multicall'
import { Provider } from '@ethersproject/abstract-provider'
import { Web3Provider } from '../types/types'


export class ABIError extends Error {
  constructor(message: string) {
    super(message)
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ABIError.prototype)
  }
}

class ABINotFound extends Error {
  constructor(message: string) {
    super(message)
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ABINotFound.prototype)
  }
}

const isObject = obj => {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

const parseExtended = (params: any[]) => {
  const extended: { blockTag?: number } = isObject(params[params.length - 1])
    ? params[params.length - 1]
    : { blockTag: undefined }
  return extended
}

const parseParams = params => {
  const [address, method, ...otherParams] = params
  const extended = parseExtended(otherParams)
  if (Object.values(extended).filter(Boolean).length > 0) {
    // discard the last item because it was an extend object
    otherParams.pop()
  }
  return { params: [address, method, otherParams], extended }
}
export const contracts = new Map<string, Contract>()
export function getContract(
  address: string,
  abi: ContractInterface,
  provider: Provider | Web3Provider
): Contract {
  let contract = contracts.get(address)
  if (contract) {
    return contract
  }
  contract = new Contract(address, abi, provider as Provider)
  contracts.set(address, contract)
  return contract
}

export const call = (
  parameters: string[],
  provider: ethersProviders.Provider,
  ABIs
): Promise<any> => {
  const [address, method, ...otherParams] = parameters
  // it's a contract
  if (isAddress(address)) {
    if (!ABIs) throw new ABIError(`ABI repo not found`)
    if (!ABIs.get) throw new ABIError(`ABI repo isn't a Map`)
    const abi = ABIs.get(address)
    if (!abi) throw new ABINotFound(`ABI not found for ${address}`)
    const contract = new Contract(address, abi, provider)
    return contract[method](...otherParams)
  }
  const param2 = method
  const baseMethod = address // getBalance, getTransactionCount, etc
  return provider[baseMethod](param2, ...otherParams)
}
export const multiCall = (
  parameters: string | any[],
  provider: providers.MulticallProvider,
  ABIs
) => {
  const {
    params: [address, method, otherParams],
    extended
  } = parseParams(parameters)

  // it's a contract
  if (isAddress(address)) {
    if (!ABIs) throw new ABIError(`ABI repo not found`)
    if (!ABIs.get) throw new ABIError(`ABI repo isn't a Map`)
    const abi = ABIs.get(address)
    if (!abi) throw new ABINotFound(`ABI not found for ${address}`)
    const contract = new Contract(address, abi, provider)
    return contract[method](...otherParams, extended)
  }
  const param2 = method
  const baseMethod = address
  return provider[baseMethod](param2, ...otherParams, extended.blockTag)
}


export const etherJsFetcher = (
  provider: ethers.providers.Provider,
  ABIs?: Map<string, any>
) => {
  //TODO LS what happens when the network id change?
  const multiCallProvider = new providers.MulticallProvider(provider as any)

  return async (...args: any[]) => {
    let parsed: any[]
    try {
      parsed = JSON.parse(args[0])
    } catch (e) {
      // fallback silently because wasn't a JSON object aka simple key
    }
    const [arg1] = parsed || args

    // it's a batch call
    if (Array.isArray(arg1)) {
      return Promise.all(
        parsed.map(key => multiCall(key, multiCallProvider, ABIs))
      )
    }
    return call(args, provider, ABIs)
  }
}

export default etherJsFetcher