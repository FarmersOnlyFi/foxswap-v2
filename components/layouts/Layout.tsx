import {Box, Container, Flex, useBreakpointValue} from "@chakra-ui/react";
import {Sidebar} from "@/components/modules/Sidebar/Sidebar";
import {Navbar} from "@/components/modules/Navbar/Navbar";

const Layout = ({ children }) => {
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
        bg="purple.900"
        pt={{ base: '0', lg: '3' }}
        flex="1"
        height="100%"
      >
        <Box
          as="main"
          bg="#212429"
          height="100%"
          borderTopLeftRadius={{ base: 'none', lg: '2rem' }}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default Layout