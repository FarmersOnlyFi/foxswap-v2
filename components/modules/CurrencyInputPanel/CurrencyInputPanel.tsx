import {
  Select,
  Text,
  NumberInput,
  NumberInputField,
  StackDivider,
  Stack,
  useColorModeValue,
  Box, FormControl, FormLabel, Avatar
} from "@chakra-ui/react";
import { Currency, CurrencyAmount, Pair } from '@foxswap/sdk'
import Container from "@/components/elements/Container";

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
      bg="purple.800"
      borderRadius="lg"
      p={8}
      {...props}
    >
      <Stack>
        <FormControl id="fromCurrency" py={4}>
          <FormLabel>From</FormLabel>
          <NumberInput placeholder="large size" size="lg">
            <NumberInputField bg="gray.800" />
            <Select size="lg" bg="gray.800" />
          </NumberInput>
        </FormControl>
        <FormControl id="toCurrency" py={4}>
          <FormLabel>To</FormLabel>
          <NumberInput placeholder="large size" size="lg">
            <Stack isInline>
              <NumberInputField bg="gray.800" />
                <Box>
                  <Stack spacing="3" ps="2" isInline>

                  <Avatar name={'ONE'} src={'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/WONE.png'} />
                  <Text as='kbd' fontSize="2xl">ONE</Text>
                  </Stack>

                </Box>
            </Stack>
          </NumberInput>
        </FormControl>
      </Stack>
    </Box>
  )
}