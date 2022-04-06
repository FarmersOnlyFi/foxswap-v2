import { Icon } from '@chakra-ui/icons'
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import { Logo } from '@/components/elements/Logo/Logo'
import { UserProfile } from '@/components/modules/UserProfile/UserProfile'
import { NavButton } from '@/components/modules/NavButton/NavButton'
import Account from "@/components/modules/Account/Account";

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-accent">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue('md', 'sm-dark')}
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
            <NavButton label="Home" icon={FiHome} />
            <NavButton label="Dashboard" icon={FiBarChart2} aria-current="page" />
            <NavButton label="Tasks" icon={FiCheckSquare} />
            <NavButton label="Bookmarks" icon={FiBookmark} />
            <NavButton label="Users" icon={FiUsers} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <NavButton label="Help" icon={FiHelpCircle} />
            <NavButton label="Settings" icon={FiSettings} />
          </Stack>
          <Account triedToEagerConnect={false} />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
)