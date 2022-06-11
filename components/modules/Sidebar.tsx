import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FiBook, FiHome } from "react-icons/fi";

import {
  FaCertificate,
  FaCoins,
  FaHandsHelping,
  FaLeaf,
  FaLock,
  FaSwimmingPool,
} from "react-icons/fa";
import { Logo } from "@/components/elements/Logo";
import { NavButton } from "@/components/modules/NavButton";
import Account from "@/components/modules/Account";

export const Sidebar = () => {
  return (
    <Flex
      as="section"
      minH="100vh"
      bgGradient="linear(to-b, purple.600, teal.600)"
      borderRadius={"10"}
      m={4}
    >
      <Flex
        flex="1"
        overflowY="auto"
        maxW={{ base: "full", sm: "xs" }}
        py={{ base: "6", sm: "8" }}
        px={{ base: "4", sm: "10" }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
            <Box boxSize="3xs" pb={0} maxH={50}>
              <Logo />
            </Box>
            <Account />
            <Divider />
            <Stack>
              <Text fontSize="sm" color="on-accent-muted" fontWeight="medium">
                Exchange
              </Text>
              <Stack>
                <NavButton label="Dashboard" icon={FiHome} href="/" />
                <NavButton label="Swap" icon={FaHandsHelping} href="/swap" />
                <NavButton
                  label="Liquidity"
                  icon={FaSwimmingPool}
                  href="/liquidity"
                />
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
          <Stack spacing={{ base: "5", sm: "6" }}>
            <Stack spacing="1">
              <NavButton label="Docs" icon={FiBook} href="/docs" />
              <NavButton label="Audit" icon={FaCertificate} href="/" />
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
