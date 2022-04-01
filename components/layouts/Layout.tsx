import { Box } from "@chakra-ui/react";
import { Navbar } from "../modules/Navbar/Navbar"
import Meta from "../elements/Meta/Meta";

const Layout = ({ children }) => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Meta />
      <Navbar />
      <main>
        {children}
      </main>
    </Box>
  )
}

export default Layout