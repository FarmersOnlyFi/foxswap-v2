import { Currency } from "@foxswap/sdk";
import React from "react";
import { AvatarGroup, Image } from "@chakra-ui/react";

interface DoubleCurrencyLogoProps {
  margin?: boolean;
  size?: number;
  currency0?: Currency;
  currency1?: Currency;
}

export const DoubleCurrencyLogo = () => {
  return (
    <AvatarGroup max={2} boxSize={35} spacing={"-0.55rem"}>
      <Image
        src="https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/Hexagon.svg"
        alt={"currency0"}
      />
      <Image
        src="https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/Hexagon.svg"
        alt={"currency1"}
      />
    </AvatarGroup>
  );
};
