import {Box, Container, Flex, useBreakpointValue} from "@chakra-ui/react";
import {Sidebar} from "@/components/modules/Sidebar/Sidebar";
import {Navbar} from "@/components/modules/Navbar/Navbar";


// const Layout = ({ children }) => {
//   const isDesktop = useBreakpointValue({ base: false, lg: true })

//   return (
//     <Flex
//       as="section"
//       direction={{ base: 'column', lg: 'row' }}
//       height="100vh"
//       bg="bg-canvas"
//       overflowY="auto"
//     >
//       {isDesktop ? <Sidebar /> : <Navbar />}
//         <Box bg="bg-surface" pt={{ base: '0', lg: '3' }} flex="1">
//           <Box bg="bg-accent" borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full">
//             <Container as={"main"} py={8}>
//               {children}
//             </Container>
//           </Box>
//         </Box>
//     </Flex>
//   )
// }
