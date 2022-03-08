import Meta from "./Meta"
import {Box, Container} from "@chakra-ui/react";
import {Navbar} from "./Navbar"

const Layout = ({ children }) => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Navbar />
        <main>{children}</main>
    </Box>
  )
}

export default Layout