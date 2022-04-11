import {Box, BoxProps, useColorMode, FlexProps, useBreakpointValue, Flex} from '@chakra-ui/react'
import {Sidebar} from "@/components/modules/Sidebar/Sidebar";
import {Navbar} from "@/components/modules/Navbar/Navbar";

const ContentWrapper = (props: BoxProps) => {
  const { colorMode } = useColorMode()
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <Box
      bg="linear-gradient(120deg, #212429, #000000)"
      minH="100vh"
      borderTopLeftRadius={{ base: 'none', lg: '2rem' }}
      {...props}
    />
  )
}

export default ContentWrapper