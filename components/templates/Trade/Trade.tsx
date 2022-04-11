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
  Select,
  useBreakpointValue, Grid, GridItem, Flex
} from "@chakra-ui/react";
import Card from "@/components/elements/Card/Card";
import ContentWrapper from "@/components/elements/ContentWrapper/ContentWrapper";
import CurrencyInputPanel from "@/components/modules/CurrencyInputPanel/CurrencyInputPanel";

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
            <GridItem rowSpan={2} colSpan={{ base: '5', md: '3'  }}>
              <Card minH="67vh">
                <Tabs variant={'solid-rounded'} colorScheme='purple' p={4}>
                  <TabList>
                    <Tab borderRadius={12}>Swap</Tab>
                    <Tab borderRadius={12}>Liquidity</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <CurrencyInputPanel />
                    </TabPanel>
                    <TabPanel>
                      <CurrencyInputPanel />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Card>
            </GridItem>
            <GridItem rowSpan={1} colSpan={{ base: '5', md: '2'  }}>
              <Card />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{ base: '5', md: '2'  }}>
              <Card />
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </ContentWrapper>
  );
}