import Meta from "./Meta"
import {Box, Container} from "@chakra-ui/react";
import {Navbar} from "./Navbar"

const Layout = ({ children }) => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Navbar />
      <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
        <main>{children}</main>
      </Container>
    </Box>
  )
}

export default Layout