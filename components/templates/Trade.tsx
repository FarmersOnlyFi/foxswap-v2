import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  useBreakpointValue,
  Center
} from "@chakra-ui/react";
import Card from "@/components/elements/Card";
import ContentWrapper from "@/components/elements/ContentWrapper";
import CurrencyInputPanel from "@/components/modules/CurrencyInputPanel";
import {Currency, SwapParameters} from "@foxswap/sdk";
import { Contract } from "@ethersproject/contracts";


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


const TradeTemplate = () => (
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
          <Center>
            <Card borderRadius={18}>
              <CurrencyInputPanel
                value={'0'}
                showMaxButton={true}
                id="1"
              />
            </Card>
          </Center>
      </Stack>
    </Container>
  </ContentWrapper>
)

export default TradeTemplate