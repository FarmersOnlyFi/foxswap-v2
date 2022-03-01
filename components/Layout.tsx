import Nav from "./Nav";
import Meta from "./Meta"
import {Container} from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Container>
        <main>
        { children }
        </main>
      </Container>
    </>
  )
}

export default Layout