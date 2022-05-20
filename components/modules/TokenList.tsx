import React from 'react'
import { formatUnits } from '@ethersproject/units'
import { useEthers } from '@usedapp/core'
import DEFAULT_TOKEN_LIST from '@foxswap/default-token-list'
import {
  Avatar,
  HStack,
  Stack,
  StackDivider,
  Text
} from "@chakra-ui/react";
import useTokenBalances from "@/hooks/useTokenBalances";

const tokenList = DEFAULT_TOKEN_LIST.tokens

export default function TokenList() {
  const { account } = useEthers()
  const balances = useTokenBalances(tokenList, account)

  return (
      <Stack divider={ <StackDivider borderColor={'red'} /> }>
      {tokenList &&
      tokenList.map((token, idx) => {
        const balance = balances[idx]
        return (
          <Stack key={token?.address}>
            <HStack>
              <Avatar src={token.logoURI} boxSize="10" />
              <Stack justify={'start'}>
                <Text fontWeight="medium" color="emphasized">
                  {token.name}
                </Text>
                <Text color="muted">{token.symbol}</Text>
              </Stack>
              {balance && !balance.error && (
                <Text justifySelf={'end'}>{formatUnits(balance.value[0], token.decimals)}</Text>
              )}
            </HStack>
          </Stack>
        )
      })}
      </Stack>
  )
}