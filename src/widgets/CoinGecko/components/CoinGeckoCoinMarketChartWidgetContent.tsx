import * as React from 'react'

import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'

import { WidgetConfigCoinGeckoCoinMarketChart } from '~/widgets/types'

import { CoinGeckoCoinResponse, CoinGeckoCoinMarketChartResponse } from '../api/types'
import { formatPrice, formatDateTime, formatDateTimeShort } from '../helpers'

const COMMON_DAYS_FORMAT_MAP: Record<string, string> = {
  '1': '24h',
  '7': '7d',
  '30': '1m',
  '90': '3m',
  '365': '1y',
}

export interface CoinGeckoCoinMarketChartData {
  coin: CoinGeckoCoinResponse
  coinMarketChart: CoinGeckoCoinMarketChartResponse
}

interface Props {
  config: WidgetConfigCoinGeckoCoinMarketChart['options']
  data: CoinGeckoCoinMarketChartData
  days: number
  onDaysChange: (days: number) => void
}

export const CoinGeckoCoinMarketChartWidgetContent: React.FC<Props> = ({ config: { locale, currency, maximumFractionDigits, daysOptions }, data, days, onDaysChange }) => (
  <>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', pl: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Stack
          component="img"
          alt={data.coin.name}
          title={data.coin.name}
          src={data.coin.image.thumb}
          sx={{ mr: 1 }}
        />
        <Typography variant="h5" component="div" fontWeight="fontWeightBold" sx={{ mr: 1 }}>{data.coin.name}</Typography>
        <Typography variant="h6" component="div" fontWeight="fontWeightBold">{data.coin.symbol.toUpperCase()}</Typography>
      </Box>
      <Tabs value={days} onChange={(_ev, value) => onDaysChange(Number(value))}>
        {daysOptions.map(i => (
          <Tab key={i} value={i} label={COMMON_DAYS_FORMAT_MAP[String(i)] ?? `${i} days`} sx={{ minWidth: 50 }} />
        ))}
      </Tabs>
    </Box>
    <LineChart
      dataset={data.coinMarketChart.prices.map(i => ({ date: i[0], price: i[1] }))}
      xAxis={[
        {
          id: 'DateTime',
          dataKey: 'date',
          scaleType: 'time',
          domainLimit: 'strict',
          valueFormatter: (value, context) => context.location === 'tooltip' ? formatDateTime(value ?? 0, locale) : formatDateTimeShort(value ?? 0, locale),
        },
      ]}
      yAxis={[
        {
          id: 'Price',
          dataKey: 'price',
          valueFormatter: (value) => formatPrice(value ?? 0, locale, currency, maximumFractionDigits),
        },
      ]}
      leftAxis={null}
      rightAxis={{}}
      series={[
        {
          id: 'Price',
          label: 'Price',
          dataKey: 'price',
          baseline: 'min',
          area: true,
          showMark: false,
          valueFormatter: (value) => formatPrice(value ?? 0, locale, currency, maximumFractionDigits),
        },
      ]}
      height={300}
      margin={{ left: 20, right: 70 }}
    />
  </>
)
