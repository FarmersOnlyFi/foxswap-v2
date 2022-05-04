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
  Text, Avatar, useDisclosure
} from "@chakra-ui/react";
import { Currency, CurrencyAmount, Pair } from '@foxswap/sdk'
import CurrencyModal from "@/components/modules/Modal/CurrencyModal";



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


const SelectIcon = (
  <AvatarGroup max={2} boxSize={30} spacing={'-0.55rem'}>
    <Avatar size={'sm'} bg={'blackAlpha.800'} src="https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/LogoMark/With+Padding/FoxSwap_Logomark_space_white.svg" />
  </AvatarGroup>
)

export default function CurrencyInputPanel(props: CurrencyInputPanelProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      as="form"
      borderRadius="lg"
      p={8}
      {...props}
    >
      <CurrencyModal isOpen={isOpen} onClose={onClose} />
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
            <Button
              colorScheme='teal'
              p={2}
              leftIcon={SelectIcon}
              justifySelf="end"
              onClick={onOpen}
            >
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
                leftIcon={SelectIcon}
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