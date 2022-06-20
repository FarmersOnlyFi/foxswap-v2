import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Circle,
  FormControl,
  IconButton,
  NumberInput,
  NumberInputField,
  SkeletonCircle,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HiSwitchVertical } from "react-icons/hi";
import { Token, WETH } from "@foxswap/sdk";
import CurrencyModal from "@/components/modules/CurrencyModal";
import { Harmony, useContractFunction } from "@usedapp/core";
import WETH_ABI from "@/config/abi/weth.json";
import * as React from "react";
import { ChangeEvent } from "react";
import { getContractInterface } from "@/hooks/web3/contract-helpers";
import useSwapContext from "../../state/swap/context";

// interface CurrencyInputPanelProps {
//   value: string
//   // onUserInput: (value: string) => void
//   onMax?: () => void
//   // showMaxButton: boolean
//   label?: string
//   onCurrencySelect?: (currency: Currency) => void
//   currency?: Currency | null
//   disableCurrencySelect?: boolean
//   pair?: Pair | null
//   hideBalance?: boolean
//   hideInput?: boolean
//   hideCurrencySelect?: boolean
//   otherCurrency?: Currency | null
//   id: string
//   showCommonBases?: boolean
//   customBalanceText?: string
//   overrideSelectedCurrencyBalance?: CurrencyAmount | null
// }

const CurrencyInputIcon = () => {
  const { inputLogoURI } = useSwapContext();
  return (
    <AvatarGroup max={2} boxSize={30} spacing={"-0.55rem"}>
      <Avatar
        size={"sm"}
        bg={"blackAlpha.800"}
        src={inputLogoURI}
        icon={<SkeletonCircle />}
      />
    </AvatarGroup>
  );
};

const CurrencyOutputIcon = () => {
  const { outputLogoURI } = useSwapContext();

  return (
    <AvatarGroup max={2} boxSize={30} spacing={"-0.55rem"}>
      <Avatar
        size={"sm"}
        bg={"blackAlpha.800"}
        src={outputLogoURI}
        icon={<SkeletonCircle />}
      />
    </AvatarGroup>
  );
};

export default function CurrencyInputPanel(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // @ts-ignore
  const {
    setTypedAmount,
    setFieldType,
    switchCurrency,
    inputCurrency,
    outputCurrency,
  } = useSwapContext();

  // @ts-expect-error
  const token = WETH[Harmony.chainId] as Token;
  // const typedValue = parseUnits(typedAmount, token.decimals)
  const WrapTokenComponent = () => {
    const contract = getContractInterface(WETH_ABI, token.address);
    const { state, send } = useContractFunction(contract, "deposit", {
      transactionName: "Wrap",
    });
    const { status } = state;
    const wrapToken = () => void send({ value: 1 });

    return (
      <Button onClick={() => wrapToken()}>{!status ? "Wrap" : status}</Button>
    );
  };

  return (
    <Box as="form" alignItems={"center"} borderRadius="lg" p={12} {...props}>
      <CurrencyModal isOpen={isOpen} onClose={onClose} />
      <Stack>
        <FormControl
          id="inputCurrency"
          p={4}
          my={2}
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTypedAmount(e.target.value, true)
                }
              />
            </NumberInput>
            <Button
              id="inputBtn"
              colorScheme="teal"
              p={2}
              leftIcon={<CurrencyInputIcon />}
              minW={"11vh"}
              justifyContent={"start"}
              onClick={() => {
                onOpen();
                setFieldType(true);
              }}
            >
              <Text>{!inputCurrency ? "select" : inputCurrency?.symbol}</Text>
            </Button>
          </Stack>
        </FormControl>
        <Circle>
          <IconButton
            size={"sm"}
            colorScheme={"teal"}
            variant={"outline"}
            icon={<HiSwitchVertical />}
            aria-label={"Switch Currency"}
            onClick={() => switchCurrency()}
            isRound
          />
        </Circle>
        <FormControl
          id="outputCurrency"
          p={4}
          my={2}
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTypedAmount(e.target.value, false)
                }
              />
            </NumberInput>
            <Button
              id="outputBtn"
              colorScheme="teal"
              p={2}
              leftIcon={<CurrencyOutputIcon />}
              justifyContent={"start"}
              minW={"11vh"}
              onClick={() => {
                onOpen();
                setFieldType(false);
              }}
            >
              <Text>{!outputCurrency ? "select" : outputCurrency?.symbol}</Text>
            </Button>
          </Stack>
        </FormControl>
        <Stack direction="row" justify={"space-around"} p={4}>
          {["25", "50", "75", "100"].map((percent: string) => (
            <Badge
              as={"button"}
              key={percent.replace("%", "")}
              colorScheme="teal"
              variant={"subtle"}
              w={85}
              textAlign={"center"}
            >
              {`${percent}%`}
            </Badge>
          ))}
          )
        </Stack>
        <WrapTokenComponent />
      </Stack>
    </Box>
  );
}
