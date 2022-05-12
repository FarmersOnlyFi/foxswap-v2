import { formatEtherscanLink, parseBalance, shortenHex } from "../../../util";
import { Badge, Box, Button, SkeletonText, Text } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";
import * as React from "react";
import {
  Harmony,
  shortenAddress,
  useEtherBalance,
  useEthers
} from "@usedapp/core";



const Account = () => {
  const { activateBrowserWallet, account, chainId, switchNetwork } = useEthers();
  const oneBalance = useEtherBalance(account, {chainId: Harmony.chainId})

  const ConnectWallet = () => {
    return (
      <Button
        leftIcon={<FaWallet />}
        fontWeight={600}
        _hover={{
          borderColor: "teal.400"
        }}
        variant='solid'
        onClick={() => activateBrowserWallet()}
      >
        Connect Wallet
      </Button>
    )
  }

  const ActiveWallet = () => {
    return (
      <Button
        {...{
          href: formatEtherscanLink("Account", [chainId as number, account as string]),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        w={'100%'}
        leftIcon={<FaWallet />}
        fontWeight={600}
        variant={'solid'}
        bg="teal.500"
      >
        <Text>{shortenAddress(account as string)}</Text>
      </Button>
    )
  }

  const SwitchNetwork = () => {
    return (
      <Button
        leftIcon={<FaWallet />}
        fontWeight={600}
        _hover={{
          borderColor: "teal.400"
        }}
        variant='solid'
        onClick={() => switchNetwork(Harmony.chainId)}
      >
        Switch Network
      </Button>
    )
  }

  const ChainFilter = () => {
    return chainId === Harmony.chainId
    ? <ActiveWallet />
    : <SwitchNetwork />
  }


  return (
    <Box>
      {!account ? (
        <ConnectWallet />
      ) : (
        <ChainFilter />
      )}
    </Box>
  )
}

export default Account;
