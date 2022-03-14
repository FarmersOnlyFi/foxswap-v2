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
import { useState } from "react";
import { DoubleCurrencyLogo } from "../DoubleCurrencyLogo";
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


export const VaultTable = (props: TableProps) => {
  const [open, setOpen] = useState(false)

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
        {members.map((member) => (
          <Tr key={member.id}>
            <Td>
              <DoubleCurrencyLogo />
            </Td>
            <Td>
              <Badge size="sm" colorScheme={member.status === 'active' ? 'green' : 'red'}>
                {member.status}
              </Badge>
            </Td>
            <Td>
              <Text color="muted">{member.email}</Text>
            </Td>
            <Td>
              <Text color="muted">{member.role}</Text>
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