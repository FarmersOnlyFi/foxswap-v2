import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import {Avatar, Box, Button, HStack, SkeletonCircle, Spacer, Spinner, Stack, Tag, Text} from "@chakra-ui/react";
import useSwapContext from "@/contexts/swap/context";
import {Currency} from "@foxswap/sdk";
import {parseBalance} from "../../util";
import React from "react";
import { useEthers } from "@usedapp/core";
import useTokenBalances from "@/hooks/useTokenBalances";
import DEFAULT_TOKEN_LIST from '@foxswap/default-token-list'

export interface CurrencyModalProps {
  isOpen: boolean,
  onClose: () => void
}

const tokenList = DEFAULT_TOKEN_LIST.tokens
export default function CurrencySearchModal({ isOpen, onClose }: CurrencyModalProps) {
  const { account } = useEthers()
  const balances = useTokenBalances(tokenList, account)
  const { selectCurrency, isInputField } = useSwapContext()

  const handleClick = (currency: Currency, logoURI: string, isInput: boolean) => {
    selectCurrency(currency, logoURI, isInput)
  }

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Token</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            {tokenList && tokenList.map((token, idx) => {
              const balance = balances[idx]
              return (
                <Box
                  key={token?.address}
                  _hover={{
                    bgColor: 'gray.900',
                    cursor: 'pointer',
                    borderRadius: '12px'
                  }}
                  p={2}
                  as={'button'}
                  onClick={() => {
                    onClose();
                    handleClick(token, token.logoURI, isInputField);
                  }}
                >
                  <HStack>
                    <Avatar src={token.logoURI} icon={<SkeletonCircle />} boxSize="9" />
                    <Stack mb={0}>
                      <Text fontWeight="medium" color="emphasized" align={'start'}>
                        {token.symbol}
                        <Text fontSize={'xs'} color="muted">{token.name.replace(/Token/g, '')}</Text>
                      </Text>
                    </Stack>
                    <Spacer />
                    <Stack>
                      {balance && !balance.error ? (
                        <Tag size={'md'} colorScheme={balance?.value[0].gt(0) ? 'teal' : 'gray'}>
                          {parseBalance(balance?.value[0], token.decimals, 2)}
                        </Tag>
                        ) : (
                          <Spinner size='sm'/>
                        )
                      }
                    </Stack>
                  </HStack>
                </Box>
              )
            })}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
