import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton, LinkOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo, FoxLogo } from './Logo'
import NextLink from "next/link";
import Account from "./Account";
import useEagerConnect from "../hooks/useEagerConnect";
import {useWeb3React} from "@web3-react/core";
import {getFoxVaultAddress} from "../utils/addressHelpers";


const navLinks = [
  { name: "Home",
    path: "/"
  },
  {
    name: "Swap",
    path: "/swap",
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

export const Navbar = () => {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const isConnected = typeof account === "string" && !!library;

  return (
    <Box as="nav" padding={4} py={{ base: '3', lg: '4' }} bg={'purple.700'} color="on-accent">
      <Flex justify="space-between">
        <HStack spacing="4">
          <FoxLogo />
          {isDesktop && (
            <ButtonGroup variant="ghost-on-accent" spacing="1">
              {navLinks.map((link, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <NextLink href={link.path} passHref>
                    <Button as={LinkOverlay} key={index}>
                      {link.name}
                    </Button>
                  </NextLink>
                );
              })}
            </ButtonGroup>
          )}
        </HStack>

        {isConnected && (
          <HStack spacing="4">
            <Account triedToEagerConnect={triedToEagerConnect} />
          </HStack>
        )}
        {!isDesktop &&
          <IconButton
            variant="ghost-on-accent"
            icon={<FiMenu fontSize="1.25rem" />}
            aria-label="Open Menu"
          />
        }
      </Flex>
    </Box>
  )
}
