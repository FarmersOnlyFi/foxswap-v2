import { Currency } from '@foxswap/sdk'
import React from 'react'
import CurrencyLogo from '/public/assets/fox-logo.png'
import {Image, AvatarGroup} from "@chakra-ui/react";

interface DoubleCurrencyLogoProps {
  margin?: boolean
  size?: number
  currency0?: Currency
  currency1?: Currency
}

// export const DoubleCurrencyLogo = ({
//   currency0,
//   currency1,
//   size = 16,
//   margin = false
// }: DoubleCurrencyLogoProps) => {
export const DoubleCurrencyLogo = () => {
  return (
    <AvatarGroup max={2} boxSize={35} spacing={'-0.55rem'}>
      <Image
        src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/Hexagon.svg'
        alt={'currency0'}
      />
      <Image
        src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/Hexagon.svg'
        alt={'currency1'}
      />
    </AvatarGroup>
  )
}
