import { DetailType, WidgetsConfig, WidgetType } from '~/widgets/types'

import { CoinGeckoCurrency } from '~/widgets/CoinGecko'
import { OpeWeatherUnits } from '~/widgets/OpenWeather'

export const widgetsConfig: WidgetsConfig = [
  {
    id: 'CurrentTimePragueWidget',
    type: WidgetType.CurrentTime,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      locale: 'cs',
      timezone: 'Europe/Prague',
    },
  },
  {
    id: 'CurrentTimeNewYorkWidget',
    type: WidgetType.CurrentTime,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      locale: 'cs',
      timezone: 'America/New_York',
    },
  },
  {
    id: 'CurrentTimeTokyoWidget',
    type: WidgetType.CurrentTime,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      locale: 'cs',
      timezone: 'Asia/Tokyo',
    },
  },
  {
    id: 'OpenWeatherCurrentPrahaWidget',
    type: WidgetType.OpeWeatherCurrent,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      location: 'Praha',
      units: OpeWeatherUnits.Metric,
    },
    detail: {
      id: 'OpenWeatherForecastPrahaDetail',
      type: DetailType.OpeWeatherForecast,
      options: {
        locale: 'cs',
        location: 'Praha',
        units: OpeWeatherUnits.Metric,
      },
    },
  },
  {
    id: 'OpenWeatherCurrentBrnoWidget',
    type: WidgetType.OpeWeatherCurrent,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      location: 'Brno',
      units: OpeWeatherUnits.Metric,
    },
    detail: {
      id: 'OpenWeatherForecastBrnoDetail',
      type: DetailType.OpeWeatherForecast,
      options: {
        locale: 'cs',
        location: 'Brno',
        units: OpeWeatherUnits.Metric,
      },
    },
  },
  {
    id: 'OpenWeatherCurrentVelkeMeziriciWidget',
    type: WidgetType.OpeWeatherCurrent,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      location: 'Velke Mezirici',
      units: OpeWeatherUnits.Metric,
    },
    detail: {
      id: 'OpenWeatherForecastVelkeMeziriciDetail',
      type: DetailType.OpeWeatherForecast,
      options: {
        locale: 'cs',
        location: 'Velke Mezirici',
        units: OpeWeatherUnits.Metric,
      },
    },
  },
  {
    id: 'CoinGeckoCoinCurrentPriceBitcoinWidget',
    type: WidgetType.CoinGeckoCoinCurrentPrice,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      id: 'bitcoin',
      locale: 'en-US',
      currency: CoinGeckoCurrency.USD,
      maximumFractionDigits: 0,
    },
  },
  {
    id: 'CoinGeckoCoinCurrentPriceEthereumWidget',
    type: WidgetType.CoinGeckoCoinCurrentPrice,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      id: 'ethereum',
      locale: 'en-US',
      currency: CoinGeckoCurrency.USD,
    },
  },
  {
    id: 'CoinGeckoCoinCurrentPriceSolanaWidget',
    type: WidgetType.CoinGeckoCoinCurrentPrice,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      id: 'solana',
      locale: 'en-US',
      currency: CoinGeckoCurrency.USD,
    },
  },
  {
    id: 'CoinGeckoCoinMarketChartBitcoinWidget',
    type: WidgetType.CoinGeckoCoinMarketChart,
    size: { xs: 12, sm: 12, md: 8 },
    options: {
      id: 'bitcoin',
      locale: 'en-US',
      currency: CoinGeckoCurrency.USD,
      maximumFractionDigits: 0,
      daysOptions: [1, 7, 30, 90, 365],
      defaultDaysOption: 30,
    },
  },
  {
    id: 'Group1Widget',
    type: WidgetType.Group,
    size: { xs: 12, sm: 6, md: 4 },
    options: {
      widgets: [
        {
          id: 'CoinGeckoCoinCurrentPriceBinanceWidget',
          type: WidgetType.CoinGeckoCoinCurrentPrice,
          size: { xs: 12 },
          options: {
            id: 'binancecoin',
            locale: 'en-US',
            currency: CoinGeckoCurrency.USD,
          },
        },
        {
          id: 'CoinGeckoCoinCurrentPricePancakeSwapWidget',
          type: WidgetType.CoinGeckoCoinCurrentPrice,
          size: { xs: 12 },
          options: {
            id: 'pancakeswap-token',
            locale: 'en-US',
            currency: CoinGeckoCurrency.USD,
          },
        },
      ],
    },
  },
]
