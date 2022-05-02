import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../../../connectors";
import useENSName from "../../../hooks/useENSName";
import useMetaMaskOnboarding from "../../../hooks/useMetaMaskOnboarding";
import {formatEtherscanLink, parseBalance, shortenHex} from "../../../util";
import {Badge, Box, Button, SkeletonText, Text} from "@chakra-ui/react";
import {FaWallet} from "react-icons/fa";
import * as React from "react";
import useONEBalance from "@/hooks/useONEBalance";
import {Web3Provider} from "@ethersproject/providers";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";
import { formatEther } from "@ethersproject/units";
import {Harmony, useEtherBalance, useEthers} from "@usedapp/core";

type AccountProps = {
  triedToEagerConnect: boolean;
};

// <div>
//   {!account && <button >Connect</button>}
//   {account && <p>Account: {account}</p>}
//   {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
// </div>

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
            <Badge colorScheme={'teal'} variant={'subtle'} borderRadius={'12px'} ml='1' fontSize='0.8em'>
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


//   const { active, error, activate, chainId, account, setError } = useActiveWeb3React();
//
//   const {
//     isMetaMaskInstalled,
//     isWeb3Available,
//     startOnboarding,
//     stopOnboarding,
//   } = useMetaMaskOnboarding();
//
//   // const { data: balance } = useONEBalance(account);
//   // const oneBalance = parseBalance(balance)
//   // manage connecting contexts for injected connector
//   const [connecting, setConnecting] = useState(false);
//   useEffect(() => {
//     if (active || error) {
//       setConnecting(false);
//       stopOnboarding();
//     }
//   }, [active, error, stopOnboarding]);
//
//
//   if (error || !triedToEagerConnect) {
//     return null;
//   }
//
//   return (
//     <Stack pt={6}>
//       {isWeb3Available && !account ? (
//         <Button
//           leftIcon={<FaWallet />}
//           fontWeight={600}
//           bg="teal.400"
//           variant='solid'
//           disabled={connecting}
//           onClick={() => {
//             setConnecting(true);
//
//             activate(injected, undefined, true).catch((error) => {
//               // ignore the error if it's a user rejected request
//               if (error instanceof UserRejectedRequestError) {
//                 setConnecting(false);
//               } else {
//                 setError(error);
//               }
//             });
//           }}
//         >
//           Connect Wallet
//         </Button>
//       ) : (
//         <Button
//           {...{
//             href: chainId != null && account != null ? formatEtherscanLink("Account", [chainId, account]) : '',
//             target: "_blank",
//             rel: "noopener noreferrer",
//           }}
//           leftIcon={<FaWallet />}
//           fontWeight={600}
//           variant="outline"
//           _hover={{
//             borderColor: "teal.400"
//           }}
//         >
//           {/*{oneBalance}*/}
//           {ENSName ?? (account != null ? `${shortenHex(account, 4)}` : '')}
//         </Button>
//         // <Button
//         //   onClick={startOnboarding}
//         //   bg="teal.400"
//         //   variant='solid'
//         // >
//         //   Install Metamask
//         // </Button>
//       )}
//     </Stack>
//   );
// }

export default Account;
