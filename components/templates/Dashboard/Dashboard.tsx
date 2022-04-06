import {
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {FiDownloadCloud, FiLock, FiMail, FiSend} from 'react-icons/fi'
import { Stat } from '../../elements/Stat/Stat'
import Card from "../../elements/Card/Card";

const stats = [
  {
    icon: FiLock,
    label: 'Total Value Locked',
    value: '$10,000,000',
  },
  {
    icon: FiMail,
    label: 'Market Cap',
    value: '$125,234,885',
  },
  {
    icon: FiSend,
    label: 'Current FOX Supply',
    value: '381,747',
  },
]
export const Dashboard = () => (
  <Container py="8">
    <Stack spacing={{ base: '8', lg: '6' }}>
      <Stack
        spacing="4"
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align={{ base: 'start', lg: 'center' }}
      >
        <Stack spacing="1">
          <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
            Dashboard
          </Heading>
          <Text color="muted">All important metrics at a glance</Text>
        </Stack>
        <HStack spacing="3">
          <Button variant="secondary" leftIcon={<FiDownloadCloud fontSize="1.25rem" />}>
            Download
          </Button>
          <Button variant="primary">Create</Button>
        </HStack>
      </Stack>
      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Stack>
      <Card minH="sm" />
    </Stack>
  </Container>
)

