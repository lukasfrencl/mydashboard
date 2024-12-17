import * as React from 'react'
import { Stack } from '@mui/material'

const COIN_GECKO_LOGO_URL = 'https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png'

interface Props {
  sx?: React.CSSProperties,
}

export const CoinGeckoLogo: React.FC<Props> = ({ sx }) => (
  <Stack
    component="img"
    sx={{
      display: 'inline',
      position: 'absolute',
      top: 5,
      left: 5,
      height: 20,
      ...sx,
    }}
    alt="Powered by CoinGecko"
    title="Powered by CoinGecko"
    src={COIN_GECKO_LOGO_URL}
  />
)
