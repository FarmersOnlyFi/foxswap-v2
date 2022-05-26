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
import { SwapParameters } from "@foxswap/sdk";
import { Contract } from "@ethersproject/contracts";
import useSwapContext from "@/contexts/swap/context"
import {useEthers, useLookupAddress} from "@usedapp/core";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {useEffect} from "react";


interface SwapCall {
  contract: Contract
  parameters: SwapParameters
}

const SwapTemplate = () => {
  const { setRecipient, recipient } = useSwapContext()

  const { account } = useEthers()
  console.log(recipient)
  useEffect(() => {
    return () => {
      setRecipient(account)
    };
  }, [recipient]);
  

  return (
    <ContentWrapper>
      <Container py="8">
        <Stack
          spacing="4"
          direction={{base: 'column', lg: 'row'}}
          justify="space-between"
          align={{base: 'start', lg: 'center'}}
        >
          <Heading size={useBreakpointValue({base: 'xs', md: 'sm'})} fontWeight="medium" fontSize={26}>
            Swap
          </Heading>
        </Stack>
        <Stack spacing={{base: '8', md: '6'}}>
          <Center>
            <Card borderRadius={18}>
              <CurrencyInputPanel
                value={'0'}
                id="1"
              />
            </Card>
          </Center>
        </Stack>
      </Container>
    </ContentWrapper>
  )
}

export default SwapTemplate