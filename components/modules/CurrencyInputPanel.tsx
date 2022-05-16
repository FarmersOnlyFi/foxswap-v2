import {
  NumberInput,
  NumberInputField,
  Stack,
  Box,
  FormControl,
  FormLabel,
  AvatarGroup,
  Button,
  Badge,
  Text,
  Avatar,
  useDisclosure, InputLeftAddon
} from "@chakra-ui/react";
import {Currency, CurrencyAmount, Pair, Token, WETH} from '@foxswap/sdk'
import CurrencyModal from "@/components/modules/CurrencyModal";
import {Harmony, useContractFunction, useEtherBalance, useEthers, useGasPrice, useNotifications} from "@usedapp/core";
import WETH_ABI from "@/config/abi/weth.json";
import MASTER_BREEDER_ABI from "@/config/abi/masterchef.json"
import * as React from "react";
import {formatEther, parseUnits} from "@ethersproject/units";
import {useEffect, useState} from "react";
import {getContractInterface} from "@/hooks/web3/contract-helpers";
import {getMasterBreeder} from "@/utils/addressHelpers";


interface CurrencyInputPanelProps {
  value: string
  // onUserInput: (value: string) => void
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

interface SwapState {
  inputCurrency: Currency,
  outputCurrency: Currency,
  typedAmount: string,
  isExactIn: boolean,
  recipient: null
}

export default function CurrencyInputPanel(props: CurrencyInputPanelProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inputValue, setInputValue] = useState('0')
  // @ts-expect-error
  const token = WETH[Harmony.chainId] as Token;
  const typedValue = parseUnits(inputValue.toString(), token.decimals)

  const WrapTokenComponent = () => {
    const contract = getContractInterface(WETH_ABI, token.address)
    const { state, send } = useContractFunction(contract, 'deposit', { transactionName: 'Wrap' })
    const { status } = state
    const wrapToken = () => void send({ value: typedValue })

    return (
      <>
        <Button onClick={() => wrapToken()}>Wrap</Button>
        <p>Status: {status}</p>
      </>
    )
  }

  const handleInput = (e: any) => setInputValue(e?.target?.value)

  return (
    <Box
      as="form"
      borderRadius="lg"
      p={12}
      {...props}
    >
      <CurrencyModal isOpen={isOpen} onClose={onClose} />
      <Stack>
        <FormControl
          id="fromCurrency"
          p={4}
          my={4}
          // border="1px solid #B9BFFF"
          borderRadius={12}
          bg="gray.700"
        >
          <Stack isInline>
            <NumberInput
              size="lg"
              alignSelf="center"
              w="65%"
              variant="unstyled"
            >
              <NumberInputField
                fontSize={22}
                placeholder="0.00"
                bg="gray.700"
                onChange={handleInput}
              />
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
        <FormControl
          id="fromCurrency"
          p={4}
          my={4}
          // border="1px solid #B9BFFF"
          borderRadius={12}
          bg="gray.700"
        >
          <Stack isInline>
            <NumberInput
              size="lg"
              alignSelf="center"
              w="65%"
              variant="unstyled"
            >
              <NumberInputField
                fontSize={22}
                placeholder="0.00"
                bg="gray.700"
                onChange={handleInput}
              />
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
        <Stack direction='row' justify={'space-around'} p={4}>
          {
            ['25','50', '75', '100'].map((percent: string) => (
              <Badge
                as={'button'}
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
        <WrapTokenComponent />
      </Stack>
    </Box>
  )
}
