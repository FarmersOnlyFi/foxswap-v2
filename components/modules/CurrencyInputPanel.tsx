import {
  NumberInput,
  NumberInputField,
  Stack,
  Box,
  FormControl,
  AvatarGroup,
  Button,
  Badge,
  Text,
  Avatar,
  ScaleFade,
  useDisclosure, SkeletonCircle
} from "@chakra-ui/react";
import {Currency, CurrencyAmount, Pair, Token, WETH} from '@foxswap/sdk'
import CurrencyModal from "@/components/modules/CurrencyModal";
import {Harmony, useContractFunction} from "@usedapp/core";
import WETH_ABI from "@/config/abi/weth.json";
import * as React from "react";
import {formatEther, parseUnits} from "@ethersproject/units";
import {ChangeEvent, useEffect, useState} from "react";
import {getContractInterface} from "@/hooks/web3/contract-helpers";
import useSwapContext from "@/contexts/swap/context";


interface CurrencyInputPanelProps {
  value: string
  // onUserInput: (value: string) => void
  onMax?: () => void
  // showMaxButton: boolean
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

const CurrencyInputIcon = () => {
  const { inputLogoURI } = useSwapContext()
  return (
    <AvatarGroup max={2} boxSize={30} spacing={'-0.55rem'}>
      <Avatar size={'sm'} bg={'blackAlpha.800'} src={inputLogoURI} />
    </AvatarGroup>
  )
}

const CurrencyOutputIcon = () => {
  const { outputLogoURI } = useSwapContext()
  
  return (
    <AvatarGroup max={2} boxSize={30} spacing={'-0.55rem'}>
      <Avatar size={'sm'} bg={'blackAlpha.800'} src={outputLogoURI} />
    </AvatarGroup>
  )

}


export default function CurrencyInputPanel(props: CurrencyInputPanelProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { setTypedAmount, typedAmount, inputCurrency, outputCurrency } = useSwapContext()

  // @ts-expect-error
  const token = WETH[Harmony.chainId] as Token;
  // const typedValue = parseUnits(typedAmount, token.decimals)
  const WrapTokenComponent = () => {
    const contract = getContractInterface(WETH_ABI, token.address)
    const { state, send } = useContractFunction(contract, 'deposit', { transactionName: 'Wrap' })
    const { status } = state
    const wrapToken = () => void send({ value: 1 })

    return (
      <>
        <Button onClick={() => wrapToken()}>Wrap</Button>
        <p>Status: {status}</p>
      </>
    )
  }

  const handleClick = (e: any, onOpen: any) => {
    console.log(e)
  }

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
          id="inputCurrency"
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTypedAmount(e.target.value, true)}
              />
            </NumberInput>
            <Button
              id="inputBtn"
              colorScheme='teal'
              p={2}
              leftIcon={<CurrencyInputIcon />}
              justifySelf="end"
              onClick={(e) => {
                onOpen();
                handleClick(e, onOpen);
              }}
            >
              <Text as='samp'>
                {!inputCurrency ? 'select' : inputCurrency?.symbol}
              </Text>
            </Button>
          </Stack>
        </FormControl>
        <FormControl
          id="outputCurrency"
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTypedAmount(e.target.value, false)}
              />
            </NumberInput>
            <Button
              id="outputBtn"
              colorScheme='teal'
              p={2}
              leftIcon={<CurrencyOutputIcon />}
              justifySelf="end"
              onClick={onOpen}
            >
              <Text as='samp'>
                {!outputCurrency ? 'select' : outputCurrency?.symbol}
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
