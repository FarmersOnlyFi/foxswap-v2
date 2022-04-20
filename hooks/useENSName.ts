import type { Web3Provider } from "@ethersproject/providers";
import { useEffect, useState } from "react";
import useActiveWeb3React from "@/hooks/web3/use-active-web3-react";

export default function useENSName(
  address: string | null | undefined,
): string {
  const { library, chainId } = useActiveWeb3React();
  const [ENSName, setENSName] = useState("");

  useEffect(() => {
    if (library && typeof address === "string") {
      let stale = false;

      library
        .lookupAddress(address)
        .then((name) => {
          if (!stale && typeof name === "string") {
            setENSName(name);
          }
        })
        .catch(() => {});

      return () => {
        stale = true;
        setENSName("");
      };
    }
  }, [library, address, chainId]);

  return ENSName;
}
