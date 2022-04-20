import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../../../connectors";
import useENSName from "../../../hooks/useENSName";
import useMetaMaskOnboarding from "../../../hooks/useMetaMaskOnboarding";
import {formatEtherscanLink, parseBalance, shortenHex} from "../../../util";
import {Button, Stack} from "@chakra-ui/react";
import {FaWallet} from "react-icons/fa";
import * as React from "react";
import useONEBalance from "@/hooks/useONEBalance";
import {Web3Provider} from "@ethersproject/providers";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const { active, error, activate, chainId, account, setError } = useWeb3React<Web3Provider>();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // const { data: balance } = useONEBalance(account);
  // const oneBalance = parseBalance(balance)
  // manage connecting contexts for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account);

  if (error || !triedToEagerConnect) {
    return null;
  }

  return (
    <Stack pt={6}>
      {isWeb3Available && !account ? (
        <Button
          leftIcon={<FaWallet />}
          fontWeight={600}
          bg="teal.400"
          variant='solid'
          disabled={connecting}
          onClick={() => {
            setConnecting(true);

            activate(injected, undefined, true).catch((error) => {
              // ignore the error if it's a user rejected request
              if (error instanceof UserRejectedRequestError) {
                setConnecting(false);
              } else {
                setError(error);
              }
            });
          }}
        >
          Connect Wallet
        </Button>
      ) : (
        <Button
          {...{
            href: chainId != null && account != null ? formatEtherscanLink("Account", [chainId, account]) : '',
            target: "_blank",
            rel: "noopener noreferrer",
          }}
          leftIcon={<FaWallet />}
          fontWeight={600}
          variant="outline"
          _hover={{
            borderColor: "teal.400"
          }}
        >
          {/*{oneBalance}*/}
          {ENSName ?? (account != null ? `${shortenHex(account, 4)}` : '')}
        </Button>
        // <Button
        //   onClick={startOnboarding}
        //   bg="teal.400"
        //   variant='solid'
        // >
        //   Install Metamask
        // </Button>
      )}
    </Stack>
  );
}

export default Account;
