import { Icon } from '@chakra-ui/icons'
import {
  ButtonGroup, Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement, LinkOverlay,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiBook,
  FiBox,
  FiHelpCircle,
  FiHome,
  FiLock,
  FiSearch,
  FiSettings,
} from 'react-icons/fi'
import { Logo } from '@/components/elements/Logo/Logo'
import { UserProfile } from '@/components/modules/UserProfile/UserProfile'
import { NavButton } from '@/components/modules/NavButton/NavButton'
import Account from "@/components/modules/Account/Account";
import {useWeb3React} from "@web3-react/core";
import useEagerConnect from "@/hooks/useEagerConnect";

const navLinks = [
  { name: "Home",
    path: "/"
  },
  {
    name: "Trade",
    path: "/trade",
  },
  {
    name: "Vaults",
    path: "/vaults",
  },
  {
    name: "Pool",
    path: "/pool",
  },
  {
    name: "Docs",
    path: "/docs",
  }
];
// linear-gradient(120deg, #212429, #000000)
export const  Sidebar = () => {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  return (
    <Flex as="section" minH="100vh">
      <Flex
        flex="1"
        overflowY="auto"
        maxW={{ base: 'full', sm: 'xs' }}
        py={{ base: '6', sm: '8' }}
        px={{ base: '4', sm: '6' }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
            <Logo />
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="muted" boxSize="5" />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
            <Stack spacing="1">
              <NavButton label="Home" icon={FiHome} href="/" />
              <NavButton label="Trade" icon={FiBarChart2} href="/trade" />
              <NavButton label="Vaults" icon={FiLock} href="/vaults" />
              <NavButton label="Pool" icon={FiBox} href="/pool" />
              <NavButton label="Docs" icon={FiBook} href="/docs" />
            </Stack>
          </Stack>
          <Stack spacing={{ base: '5', sm: '6' }}>
            <Stack spacing="1">
              <NavButton label="Help" icon={FiHelpCircle} href="/" />
              <NavButton label="Settings" icon={FiSettings} href="/" />
            </Stack>
            <Divider />
            {isConnected && <Account triedToEagerConnect={triedToEagerConnect} />}
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  )
}