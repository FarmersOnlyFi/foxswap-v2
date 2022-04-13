import {
  Avatar,
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import * as React from 'react'
import { IoArrowDown } from 'react-icons/io5'
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import { DoubleCurrencyLogo } from "../DoubleCurrencyLogo";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import useSWR from "swr";
import { getFoxVaultAddress } from "@/utils/addressHelpers";
import VaultABI from '@/config/abi/autofox.json'
import { isAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import HRC20_ABI from "@/contracts/HRC20.json";
import multicall from "@/utils/multicall";
import {parseBalance} from "../../../util";
import { getVaultCalls } from "@/utils/fetchVault";


const members = [
  {
    id: '1',
    name: 'Christian Nwamba',
    handle: '@christian',
    email: '30.56 %',
    avatarUrl: 'https://bit.ly/code-beast',
    status: 'active',
    role: '$93,324',
    rating: 4,
  },
  {
    id: '2',
    name: 'Kent C. Dodds',
    handle: '@kent',
    email: '30.56 %',
    avatarUrl: 'https://bit.ly/kent-c-dodds',
    status: 'active',
    role: '$35,338',
    rating: 4,
  },
  {
    id: '3',
    name: 'Prosper Otemuyiwa',
    handle: '@prosper',
    email: '30.56 %',
    avatarUrl: 'https://bit.ly/prosper-baba',
    status: 'active',
    role: '$5,768',
    rating: 4,
  },
  {
    id: '4',
    name: 'Ryan Florence',
    handle: '@ryan',
    email: '30.56 %',
    avatarUrl: 'https://bit.ly/ryan-florence',
    status: 'active',
    role: '$345,768',
    rating: 4,
  },
  {
    id: '5',
    name: 'Segun Adebayo',
    handle: '@segun',
    email: '30.56 %',
    avatarUrl: 'https://bit.ly/sage-adebayo',
    status: 'active',
    role: '$345,768',
    rating: 4,
  },
]

// const fetcher = (library: Web3Provider, abi?: any) => (...args) => {
//   const [arg1, arg2, ...params] = args
//   // it's a contract
//   if (isAddress(arg1)) {
//     const address = arg1;
//     const method = arg2;
//     const contract = new Contract(address, abi, library.getSigner());
//     return contract[method];
//   }
//   // it's a eth call
//   const method = arg1
//   return library[method](arg2, ...params)
// }

type VaultData = Array<{
  symbol: string;
  balance: string;
}>;

const vaultCalls = getVaultCalls();

export const VaultTable = (props: TableProps) => {
  // const { account, library } = useWeb3React();
  const [open, setOpen] = useState(false);
  const [vaultData, setVaultData] = useState<VaultData>([]);
  useEffect(() => {
    async function fetchData() {
      console.log('fetching data');
      const result = await multicall(HRC20_ABI, vaultCalls.map(call => ({
        address: call.address,
        name: call.name,
        params: call.params,
      })));

      // augment calls with balance
      const vaultResults: VaultData = result.map((val, i) => ({
        symbol: vaultCalls[i].symbol,
        balance: parseBalance(val.balance),
      }));

      setVaultData(vaultResults);
      console.log('setVaultData');
      console.log(vaultResults);
    }
    fetchData();
  }, [vaultCalls]);


  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <HStack spacing="1">
                <Text>Pair</Text>
                <Icon as={IoArrowDown} color="muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th>Status</Th>
          <Th>Yearly</Th>
          <Th>Liquidity</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {vaultData.map((vault, i) => (
          <Tr key={i}>
            <Td>
              <DoubleCurrencyLogo />
            </Td>
            <Td>
              <Badge size="sm" colorScheme={'active' === 'active' ? 'green' : 'red'}>
                {'active'}
              </Badge>
            </Td>
            <Td>
              <Text color="muted">{vault.symbol}</Text>
            </Td>
            <Td>
              <Text color="muted">{vault.balance}</Text>
            </Td>
            <Td>
              <HStack spacing="1">
                <IconButton
                  icon={open ? <TriangleUpIcon fontSize="1.25rem" /> : <TriangleDownIcon fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Expand Row"
                  onClick={() => setOpen(!open)}
                />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}