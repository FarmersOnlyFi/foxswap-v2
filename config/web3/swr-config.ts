import { createContext } from 'react'
import { EthSWRConfigInterface } from '../../types/types'

const EthSWRConfigContext = createContext<EthSWRConfigInterface>({})
EthSWRConfigContext.displayName = 'EthSWRConfigContext'

export default EthSWRConfigContext