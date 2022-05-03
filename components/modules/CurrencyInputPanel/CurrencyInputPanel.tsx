import {
  NumberInput,
  NumberInputField,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Image,
  AvatarGroup,
  Button,
  Badge,
  Text
} from "@chakra-ui/react";
import { Currency, CurrencyAmount, Pair } from '@foxswap/sdk'



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


const HexIcon = (
    <AvatarGroup max={2} boxSize={35} spacing={'-0.55rem'}>
    <Image
      src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/Hexagon.svg'
      alt={'currency1'}
    />
  </AvatarGroup>
)

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
        <FormControl id="fromCurrency" py={4} border="1px solid #B9BFFF" borderRadius={12} px={4} bg="gray.700">
          <Stack isInline>
            <NumberInput
              placeholder="From Currency"
              size="lg"
              alignSelf="center"
              w="65%"
              variant="unstyled"
            >
              <NumberInputField fontSize={22} placeholder="0.00" bg="gray.700" />
            </NumberInput>
            <Button colorScheme='teal' p={2} leftIcon={HexIcon}>
              <Text as='samp'>
                select
              </Text>
            </Button>
          </Stack>
        </FormControl>
        <FormLabel pt={4}>To</FormLabel>
        <FormControl
          id="toCurrency"
          border="1px solid #B9BFFF"
          borderRadius={12}
          p={4}
          bg="gray.700"
        >
          <Stack isInline>
            <NumberInput
              placeholder="To Currency"
              size="lg"
              alignSelf="center"
              w="65%"
              variant="unstyled"
            >
              <NumberInputField bg="gray.700" fontSize={22} placeholder="0.00" />
            </NumberInput>
            <Stack isInline>
            <Button
              colorScheme="teal"
              px={2}
              leftIcon={HexIcon}
            >
              <Text as="samp">select</Text>
            </Button>
            </Stack>
          </Stack>
        </FormControl>
        <Stack direction='row' justify={'space-between'}>
          {
            ['25','50', '75', '100'].map((percent: string) => (
            <Badge
              key={percent.replace('%','')}
              colorScheme='teal'
              variant={'subtle'}
              w={85}
              textAlign={'center'}
            >
              {`${percent}%`}
            </Badge>
          ))
          })
        </Stack>
      </Stack>
    </Box>
  )
}