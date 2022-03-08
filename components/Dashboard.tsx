import {
  Box,
  BoxProps,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {FiDownloadCloud, FiLock} from 'react-icons/fi'
import { FiMail, FiSend, FiUsers } from 'react-icons/fi'
import { Stat } from './Stat'
import { FcLock } from "react-icons/fc";

const stats = [
  {
    icon: FiLock,
    label: 'Total Value Locked',
    value: '$10,000,000',
  },
  {
    icon: FiMail,
    label: 'Avg. Open Rate',
    value: '56.87%',
    // delta: { value: '2.3%', isUpwardsTrend: true },
  },
  {
    icon: FiSend,
    label: 'Avg. Click Rate',
    value: '12.87%',
    // delta: { value: '0.1%', isUpwardsTrend: false },
  },
]
export const Dashboard = () => (
  <Stack spacing={{ base: '8', lg: '6' }} border={'1px red solid'} padding={8}>
    <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between">
      <Stack spacing="1">
        <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
          Dashboard
        </Heading>
        <Text color="muted">All important metrics at a glance</Text>
      </Stack>
    </Stack>
    <Stack spacing={{ base: '5', lg: '6' }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        {stats.map((stat, id) => (
          <Stat bg="purple.600" key={id} {...stat} />
        ))}
      </SimpleGrid>
    </Stack>
    <Card minH="xs" border={'1px solid green'} />
  </Stack>
)

const Card = (props: BoxProps) => (
  <Box
    minH="36"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  />
)