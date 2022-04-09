import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiSearch } from 'react-icons/fi'

export const VaultHeader = () => {
  return (
    <Box
      as="section"
      bg="linear-gradient(120deg, #212429, #000000)"
      pt={{ base: '4', md: '8' }}
      pb={{ base: '12', md: '24' }}
      padding={12}
      borderTopLeftRadius={{ base: 'none', lg: '2rem' }}
    >
      <Stack spacing="4" direction={{ base: 'column', md: 'row' }} justify="space-between" >
        <Stack spacing="1">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })} fontWeight="medium">
            Vaults
            <Hexagon flatTop={true}/>
          </Heading>
          <Text color="muted">Automatically compound your rewards</Text>
        </Stack>
        <InputGroup maxW={{ sm: 'xs' }}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="muted" boxSize="5" />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </Stack>
    </Box>
  )
}