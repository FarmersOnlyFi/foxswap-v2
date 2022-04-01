import { Currency } from '@foxswap/sdk'
import React from 'react'
import CurrencyLogo from '/public/assets/fox-logo.png'
import {Avatar, AvatarGroup} from "@chakra-ui/react";


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
    <AvatarGroup size={'lg'} max={2}>
      <Avatar src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/foxswap-circle_05.svg' />
      <Avatar src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/foxswap-circle_03.svg' />
    </AvatarGroup>
  )
}
