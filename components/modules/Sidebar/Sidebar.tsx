import { Icon } from '@chakra-ui/icons'
import {
  Button,
  Text,
  Divider,
  Flex,
  Stack,
  Box, IconButton
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiBook,
  FiHome
} from 'react-icons/fi'

import {
  FaSwimmingPool,
  FaCoins,
  FaLock,
  FaHandsHelping,
  FaCertificate,
  FaLeaf
} from 'react-icons/fa'
import { Logo } from '@/components/elements/Logo/Logo'
import { NavButton } from '@/components/modules/NavButton/NavButton'
import Account from "@/components/modules/Account/Account";
import useEagerConnect from "@/hooks/useEagerConnect";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";

// linear-gradient(120deg, #212429, #000000)
export const Sidebar = () => {
  const { account, library } = useActiveWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  return (
    <Flex as="section" minH="100vh">
      <Flex
        flex="1"
        overflowY="auto"
        maxW={{ base: 'full', sm: 'xs' }}
        py={{ base: '6', sm: '8' }}
        px={{ base: '4', sm: '10' }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
            <Box boxSize="3xs" pb={0} maxH={50}>
              <Logo />
            </Box>
            <Account triedToEagerConnect={triedToEagerConnect} />
            <Divider />
            <Stack>
              <Text fontSize="sm" color="on-accent-muted" fontWeight="medium">
                Trade
              </Text>
              <Stack>
                <NavButton label="Dashboard" icon={FiHome} href="/" />
                <NavButton label="Swap" icon={FaHandsHelping} href="/trade" />
                <NavButton label="Liquidity" icon={FaSwimmingPool} href="/liquidity" />
                <NavButton label="Escrow" icon={FaCoins} href="/escrow" />
              </Stack>
            </Stack>
            <Stack>
              <Text fontSize="sm" color="on-accent-muted" fontWeight="medium">
                Earn
              </Text>
              <Stack spacing="1">
                <NavButton label="Farms" icon={FaLeaf} href="/farms" />
                <NavButton label="Vaults" icon={FaLock} href="/vaults" />
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={{ base: '5', sm: '6' }}>
            <Stack spacing="1">
              <NavButton label="Docs" icon={FiBook} href="/docs" />
              <NavButton label="Audit" icon={FaCertificate} href="/" />
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  )
}