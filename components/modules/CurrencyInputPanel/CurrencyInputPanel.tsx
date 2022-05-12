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
  useDisclosure, Wrap, effect
} from "@chakra-ui/react";
import {Currency, CurrencyAmount, Pair, Token, WETH} from '@foxswap/sdk'
import CurrencyModal from "@/components/modules/Modal/CurrencyModal";
import {Harmony, useContractFunction, useEtherBalance, useEthers, useGasPrice, useNotifications} from "@usedapp/core";
import useContract from "@/hooks/useContract";
import WETH_ABI from "@/config/abi/weth.json";
import * as React from "react";
import {BIG_ONE, BIG_ZERO} from "@/config/index";
import {formatEther, parseUnits} from "@ethersproject/units";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {getFoxVaultAddress, getGovTokenAddress, getPitAddress, getVaultChefAddress} from "@/utils/addressHelpers";
import {parseBalance} from "../../../util";



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

  const WrapTokenComponent = () => {
    const typedValue = parseUnits(inputValue.toString(), token.decimals)
    const contract = useContract(token.address, WETH_ABI)
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
        <WrapTokenComponent />
      </Stack>
    </Box>
  )
}
