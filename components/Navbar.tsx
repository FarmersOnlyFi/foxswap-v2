import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo, FoxLogo } from './Logo'

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as="nav" padding={4} py={{ base: '3', lg: '4' }} bg={'purple.700'} color="on-accent">
      <Flex justify="space-between">
        <HStack spacing="4">
          <FoxLogo />
          {isDesktop && (
            <ButtonGroup variant="ghost-on-accent" spacing="1">
              <Button>Swap</Button>
              <Button aria-current="page">Pool</Button>
              <Button>Earn</Button>
              <Button>Dashboard</Button>
              <Button>Docs</Button>
            </ButtonGroup>
          )}
        </HStack>
        {isDesktop ? (
          <HStack spacing="4">
            <ButtonGroup variant="ghost-on-accent" spacing="1">
              <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
            </ButtonGroup>
          </HStack>
        ) : (
          <IconButton
            variant="ghost-on-accent"
            icon={<FiMenu fontSize="1.25rem" />}
            aria-label="Open Menu"
          />
        )}
      </Flex>
    </Box>
  )
}
