import * as React from 'react'
import { Stack } from '@mui/material'

import openWeatherLogo from '~/assets/openweather-logo.svg'

interface Props {
  sx?: React.CSSProperties,
}

export const OpenWeatherLogo: React.FC<Props> = ({ sx }) => (
  <Stack
    component="img"
    sx={{
      display: 'inline',
      position: 'absolute',
      top: 5,
      left: 5,
      height: 25,
      ...sx,
    }}
    alt="Powered by Open Weather"
    title="Powered by Open Weather"
    src={openWeatherLogo}
  />
)
