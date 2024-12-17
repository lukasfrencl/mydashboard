import * as React from 'react'

import { Box, Stack, Typography } from '@mui/material'

import { WidgetConfigCoinGeckoCoinCurrentPrice } from '~/widgets/types'

import { CoinGeckoCoinResponse } from '../api/types'
import { formatPrice } from '../helpers'

interface Props {
  config: WidgetConfigCoinGeckoCoinCurrentPrice['options']
  data: CoinGeckoCoinResponse
}

export const CoinGeckoCoinCurrentPriceWidgetContent: React.FC<Props> = ({ config: { locale, currency, maximumFractionDigits }, data }) => (
  <>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Stack
        component="img"
        alt={data.name}
        title={data.name}
        src={data.image.small}
        sx={{ mr: 1 }}
      />
      <Box>
        <Typography variant="h5" component="div" fontWeight="fontWeightBold">{data.name}</Typography>
        <Typography variant="h6" component="div" fontWeight="fontWeightBold">{data.symbol.toUpperCase()}</Typography>
      </Box>
    </Box>
    <Typography variant="h4" component="div" sx={{ pl: 1 }}>{formatPrice(data.market_data.current_price[currency] ?? 0, locale, currency, maximumFractionDigits)}</Typography>
  </>
)
