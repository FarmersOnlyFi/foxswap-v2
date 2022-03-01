import {useWeb3React} from "@web3-react/core";
import useEagerConnect from "../hooks/useEagerConnect";
import {
  Container,
  VStack,
  Box,
  StackDivider,
  Flex,
  SimpleGrid,
  Stat,
  StatNumber,
  StatLabel,
  useColorModeValue,
  Avatar, AvatarGroup, Center
} from "@chakra-ui/react";
import {ReactNode} from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      rounded={'md'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'light'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}


const Vaults = () => {
  const {account, library} = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  return (
    <Container maxW='container.xl' colorScheme='#B9BFFF'>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
          border={'1px red solid'}
        >
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 8 }}>
            <AvatarGroup size='md' max={2}>
              <Avatar name='tFOX' src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/foxswap-circle_06.svg' />
              <Avatar name='pFOX' src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/foxswap-circle_01.svg' />
            </AvatarGroup>
            <StatsCard
              title={'Users'}
              stat={'5,000'}
            />
            <StatsCard
              title={'Servers'}
              stat={'1,000'}
            />
            <StatsCard
              title={'Datacenters'}
              stat={'7'}
            />
            <Center>
              <ChevronDownIcon />
            </Center>
          </SimpleGrid>
          <Flex h='40px'>
            2
          </Flex>
          <Flex h='40px' border={'red'}>
            3
          </Flex>
        </VStack>
    </Container>
  )
}

export default Vaults
