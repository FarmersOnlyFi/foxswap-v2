import React from 'react'
import { useEthers } from '@usedapp/core'
import DEFAULT_TOKEN_LIST from '@foxswap/default-token-list'
import {
  Avatar,
  Box,
  HStack,
  Spacer,
  Spinner,
  Stack,
  Tag,
  Text
} from "@chakra-ui/react";
import useTokenBalances from "@/hooks/useTokenBalances";
import { parseBalance } from "../../util";

const tokenList = DEFAULT_TOKEN_LIST.tokens

export default function TokenList() {
  const { account, chainId } = useEthers()
  const balances = useTokenBalances(tokenList, account)
  return (
    <Stack>
      {tokenList && tokenList.map((token, idx) => {
        const balance = balances[idx]
        if (token.chainId !== chainId) return
        return (
          <Box
            as={'button'}
            key={token?.address}
            _hover={{
              bgColor: 'gray.900',
              cursor: 'pointer',
              borderRadius: '12px'
            }}
            p={2}>
            <HStack>
              <Avatar src={token.logoURI} boxSize="9" />
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
  )
}