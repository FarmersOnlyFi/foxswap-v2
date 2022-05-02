import React from 'react'
import { formatUnits } from '@ethersproject/units'
import { useEthers } from '@usedapp/core'
import DEFAULT_TOKEN_LIST from '@foxswap/default-token-list'
import {Avatar, Box, Center, Stack, Text} from "@chakra-ui/react";
import useTokenListBalance from "@/hooks/useTokenListBalance";

const tokenList = DEFAULT_TOKEN_LIST.tokens

export default function TokenList() {
  const { account } = useEthers()
  const balances = useTokenListBalance(tokenList, account)

  return (
    <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
      <Box bg="bg-surface" py="4">
      {tokenList &&
      tokenList.map((token, idx) => {
        const balance = balances[idx]
        return (
          <Stack key={token.address} isInline>
            <Avatar src={token.logoURI} />
            <Text>{token.name}</Text>
            <Text>{token.symbol}</Text>
            {balance && !balance.error && (
              <Text>{formatUnits(balance.value[0], token.decimals)}</Text>
            )}
          </Stack>
        )
      })}
      </Box>
    </Center>
  )
}