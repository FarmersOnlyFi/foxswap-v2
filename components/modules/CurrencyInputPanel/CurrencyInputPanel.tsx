import {
  Text,
  NumberInput,
  NumberInputField,
  Stack,
  Box, FormControl, FormLabel, Avatar, Image, AvatarGroup, Divider
} from "@chakra-ui/react";
import { Currency, CurrencyAmount, Pair } from '@foxswap/sdk'
import Container from "@/components/elements/Container";
import {lighten} from "@chakra-ui/theme-tools";
import React from "react";

interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect?: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  pair?: Pair | null
  hideBalance?: boolean
  hideInput?: boolean
  hideCurrencySelect?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
  customBalanceText?: string
  overrideSelectedCurrencyBalance?: CurrencyAmount | null
}

  export default function CurrencyInputPanel(props: CurrencyInputPanelProps) {

  return (
    <Box
      as="form"
      borderRadius="lg"
      p={8}
      {...props}
    >
      <Stack>
        <FormLabel>From</FormLabel>
        <FormControl id="fromCurrency" py={4} border="1px solid #B9BFFF" borderRadius={12} p={4} bg="gray.700">
          <Stack isInline>
            <NumberInput placeholder="large size" size="lg" justifySelf="start" w="65%" variant="unstyled">
              <NumberInputField fontSize={22} placeholder="0.00" bg="gray.700" />
            </NumberInput>
            <AvatarGroup max={2} boxSize={35} spacing={'-0.55rem'}>
              <Image
                src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/Hexagon.svg'
                alt={'currency0'}
              />
            </AvatarGroup>
            <Text>Select</Text>
          </Stack>
        </FormControl>
        <FormLabel pt={4}>To</FormLabel>
        <FormControl id="toCurrency" py={4} border="1px solid #B9BFFF" borderRadius={12} p={4} bg="gray.700">
          <Stack isInline>
            <NumberInput placeholder="large size" size="lg" justifySelf="start" w="65%" variant="unstyled">
              <NumberInputField bg="gray.800" fontSize={22} placeholder="0.00" bg={'gray.700'}/>
            </NumberInput>
            <AvatarGroup max={2} boxSize={35} spacing={'-0.55rem'}>
              <Image
                src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/Hexagon.svg'
                alt={'currency1'}
              />
            </AvatarGroup>
            <Text>Select</Text>
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  )
}