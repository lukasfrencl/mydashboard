import * as React from 'react'
import { useSetAtom } from 'jotai'

import Grid from '@mui/material/Grid2'

import { detailAtom } from '~/state/detailAtom'
import { detailOpenAtom } from '~/state/detailOpenAtom'
import { detailSizeAtom } from '~/state/detailSizeAtom'

import { CurrentTimeWidget } from '~/widgets/CurrentTime'
import { OpenWeatherCurrentWidget } from '~/widgets/OpenWeather'
import { CoinGeckoCoinCurrentPriceWidget, CoinGeckoCoinMarketChartWidget } from '~/widgets/CoinGecko'

import { WidgetType, DetailConfig, WidgetsConfig, WidgetConfig } from '~/widgets/types'

type OpenDetailCb = (config?: DetailConfig) => void

const renderWidgetByConfig = (config: WidgetConfig, openDetail: OpenDetailCb) => {
  switch (config.type) {
    case WidgetType.CurrentTime:
      return <CurrentTimeWidget config={config.options} />
    case WidgetType.OpeWeatherCurrent:
      return <OpenWeatherCurrentWidget config={config.options} openDetail={config.detail && (() => openDetail(config.detail))} />
    case WidgetType.CoinGeckoCoinCurrentPrice:
      return <CoinGeckoCoinCurrentPriceWidget config={config.options} />
    case WidgetType.CoinGeckoCoinMarketChart:
      return <CoinGeckoCoinMarketChartWidget config={config.options} />
    case WidgetType.Group:
      return (
        <Grid container spacing={2} sx={{ width: '100%', height: '100%' }}>
          {config.options.widgets.map(i => (
            <Grid key={i.id} size={i.size}>
              {renderWidgetByConfig(i, openDetail)}
            </Grid>
          ))}
        </Grid>
      )
    default:
      return null
  }
}

interface Props {
  config: WidgetsConfig
}

export const Widgets: React.FC<Props> = ({ config }) => {
  const setOpen = useSetAtom(detailOpenAtom)
  const setDetail = useSetAtom(detailAtom)
  const setDetailSize = useSetAtom(detailSizeAtom)

  const openDetail: OpenDetailCb = (config?: DetailConfig) => {
    setOpen(true)
    setDetail(undefined)
    setDetailSize(config?.size)
    // delay for animation
    setTimeout(() => setDetail(config), 300)
  }

  return (
    <Grid container spacing={2}>
      {config.map(i => (
        <Grid key={i.id} size={i.size}>
          {renderWidgetByConfig(i, openDetail)}
        </Grid>
      ))}
    </Grid>
  )
}
