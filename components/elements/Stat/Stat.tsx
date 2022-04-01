import {
  As,
  Box,
  Heading,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiArrowDownRight, FiArrowUpRight, FiMoreVertical } from 'react-icons/fi'

interface Props {
  icon: As
  label: string
  value: string
}

export const Stat = (props: Props) => {
  const { label, value, icon, ...boxProps } = props
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      {...boxProps}
    >
      <Stack spacing={{ base: '5', md: '6' }}>
        <Stack direction="row" justify="space-between">
          <HStack spacing="4">
            <Square size="12" bg="bg-accent-subtle" borderRadius="md">
              <Icon as={icon} boxSize="10" color="on-accent" />
            </Square>
            <Text fontWeight="medium">{label}</Text>
          </HStack>
          <Icon as={FiMoreVertical} boxSize="5" color="muted" />
        </Stack>
        <Stack spacing="4">
          <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>{value}</Heading>
        </Stack>
      </Stack>
    </Box>
  )
}
