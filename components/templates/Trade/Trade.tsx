import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useBreakpointValue,
  Grid,
  GridItem, Button
} from "@chakra-ui/react";
import Card from "@/components/elements/Card/Card";
import ContentWrapper from "@/components/elements/ContentWrapper/ContentWrapper";
import CurrencyInputPanel from "@/components/modules/CurrencyInputPanel/CurrencyInputPanel";
import {Currency, SwapParameters} from "@foxswap/sdk";
import { Contract } from "@ethersproject/contracts";
import {Harmony, useContractFunction, useEtherBalance, useEthers, useGasPrice} from "@usedapp/core";
import useContract from "@/hooks/useContract";
import HRC20_ABI from "@/contracts/HRC20.json"

interface SwapCall {
  contract: Contract
  parameters: SwapParameters
}

interface SwapState {
  inputCurrency: Currency,
  outputCurrency: Currency,
  typedAmount: string,
  isExactIn: boolean,
  recipient: null
}


export default function TradeTemplate() {

  return (
    <ContentWrapper>
      <Container py="8">
        <Stack
          spacing="4"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'center' }}
        >
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })} fontWeight="medium" fontSize={26}>
            Trade
          </Heading>
        </Stack>
        <Stack spacing={{ base: '8', md: '6' }}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            p={6}
          >
            <GridItem rowSpan={2} colSpan={{ base: 5, md: 3  }}>
              <Card minH="67vh">
                <Tabs variant={'solid-rounded'} colorScheme='purple' p={4}>
                  <TabList>
                    <Tab borderRadius={12}>Swap</Tab>
                    <Tab borderRadius={12}>Liquidity</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <CurrencyInputPanel
                        value={'0'}
                        onUserInput={(event) => {console.log(event)}}
                        showMaxButton={true}
                        id="1"
                      />
                    </TabPanel>
                    <TabPanel>
                      <CurrencyInputPanel
                        value={'0'}
                        onUserInput={(event) => {console.log(event)}}
                        showMaxButton={true}
                        id="1"
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Card>
            </GridItem>
            <GridItem rowSpan={1} colSpan={{ base: 5, md: 2  }}>
              <Card />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{ base: 5, md: 2  }}>
              <Card />
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </ContentWrapper>
  );
}