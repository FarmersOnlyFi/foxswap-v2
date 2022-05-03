import { formatEtherscanLink, parseBalance, shortenHex } from "../../../util";
import { Badge, Box, Button, SkeletonText, Text } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";
import * as React from "react";
import { Harmony, useEtherBalance, useEthers } from "@usedapp/core";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const oneBalance = useEtherBalance(account, {chainId: Harmony.chainId})
  return (
    <Box>
      { account ? (
        <Button
          {...{
            href: chainId != null && !!account ? formatEtherscanLink("Account", [chainId, account]) : '',
            target: "_blank",
            rel: "noopener noreferrer",
          }}
          w={'100%'}
          leftIcon={<FaWallet />}
          fontWeight={600}
          variant="outline"
          // bg="teal.500"
        >

          <Text>
          {shortenHex(account, 3)}
            <Badge colorScheme={'teal'} variant={'subtle'} borderRadius={12} ml='1' fontSize='0.8em'>
              {oneBalance ? `${parseBalance(oneBalance, 18, 2)} ONE` : <SkeletonText />}
            </Badge>
          </Text>
        </Button>
      ) : (
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
      )}
    </Box>
  )
}

export default Account;
