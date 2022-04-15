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
import { FarmsResults, getFarms } from 'contexts/farms/hooks';

type VaultData = Array<{
  symbol: string;
  balance: string;
}>;

export const FarmsTable = (props: TableProps) => {
  const [open, setOpen] = useState(false);
  const [farmsData, setFarmsData] = useState<FarmsResults>([]);
  useEffect(() => {

    async function fetchData() {
      console.log('fetching data');
      const farmsResults = await getFarms()

      setFarmsData(farmsResults);
      console.log('farmsResults', farmsResults);
    }
    fetchData();
  }, []);

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
        {farmsData.map((farm, i) => (
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
              <Text color="muted">{farm.farmConfig.lpSymbol}</Text>
            </Td>
            <Td>
              <Text color="muted">{'vault.balance'}</Text>
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