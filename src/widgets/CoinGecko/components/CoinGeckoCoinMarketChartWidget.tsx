import * as React from 'react'

import { Box } from '@mui/material'

import { ContentBoundary } from '~/components/ContentBoundary'
import { OpenDetailLink } from '~/components/OpenDetailLink'
import { Widget } from '~/components/Widget'

import { WidgetConfigCoinGeckoCoinMarketChart } from '~/widgets/types'

import { useCoinGeckoCoinMarketChartQuery } from '../hooks'

import { CoinGeckoLogo } from './CoinGeckoLogo.tsx'
import { CoinGeckoCoinMarketChartWidgetContent } from './CoinGeckoCoinMarketChartWidgetContent'

interface Props {
  config: WidgetConfigCoinGeckoCoinMarketChart['options']
  openDetail?: () => void
}

export const CoinGeckoCoinMarketChartWidget: React.FC<Props> = ({ config, openDetail }) => {
  const [days, setDays] = React.useState<number>(config.defaultDaysOption)
  const { isPending, isError, data, error } = useCoinGeckoCoinMarketChartQuery(config.id, config.currency, days)

  return (
    <Widget>
      <CoinGeckoLogo sx={{ bottom: 5, top: undefined }} />
      <OpenDetailLink openDetail={openDetail} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <ContentBoundary isPending={isPending} isError={isError} data={data} error={error}>
          {(data) => (
            <CoinGeckoCoinMarketChartWidgetContent
              config={config}
              data={data}
              days={days}
              onDaysChange={(days: number) => setDays(days)}
            />
          )}
        </ContentBoundary>
      </Box>
    </Widget>
  )
}
