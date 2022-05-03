import {
  Badge,
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
import { useEffect, useState } from "react";
import { DoubleCurrencyLogo } from "../DoubleCurrencyLogo";
import HRC20_ABI from "@/contracts/HRC20.json";
import multicall from "@/utils/multicall";
import { parseBalance } from "../../../util";
import { getVaultCalls } from "@/utils/fetchVault";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";
import { BigNumberish } from '@ethersproject/bignumber';

type VaultData = Array<{
  symbol: string;
  balance: string;
}>;

const vaultCalls = getVaultCalls();

export const VaultTable = (props: TableProps) => {
  const [open, setOpen] = useState(false);
  const [vaultData, setVaultData] = useState<VaultData>([]);
  useEffect(() => {
    async function fetchData() {
      console.log('fetching data');
      const result = await multicall<Array<{ balance: BigNumberish}>>(HRC20_ABI, vaultCalls.map(call => ({
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
              <Text color="muted">${vault.balance.toString()}</Text>
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
