import {Box, Container, Flex, useBreakpointValue} from "@chakra-ui/react";
import {Sidebar} from "@/components/modules/Sidebar/Sidebar";
import {Navbar} from "@/components/modules/Navbar/Navbar";
import React from "react";

// export const a = React.createElement("div")

const Layout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      bg="purple.900"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      <Box
        as="main"
        bg="purple.900"
        pt={{ base: '0', lg: '3' }}
        flex="1"
        height="full"
      >

        {children}
      </Box>
    </Flex>
  )
}

export default Layout
