import { Breakpoint } from '@mui/system'
import { GridSize } from '@mui/material/Grid2'

import { CoinGeckoCurrency } from '~/widgets/CoinGecko'
import { OpeWeatherUnits } from '~/widgets/OpenWeather'

export enum WidgetType {
  Group = 'Group',
  CurrentTime = 'CurrentTime',
  OpeWeatherCurrent = 'OpeWeatherCurrent',
  CoinGeckoCoinCurrentPrice = 'CoinGeckoCoinCurrentPrice',
  CoinGeckoCoinMarketChart = 'CoinGeckoCoinMarketChart',
}

export enum DetailType {
  OpeWeatherForecast = 'OpeWeatherForecast',
}

type ResponsiveStyleValue<T> = {
  [key in Breakpoint]?: T | undefined
}

type WidgetConfigGeneral = {
  id: string
  size: ResponsiveStyleValue<GridSize>  // MUI Grid v2 system, values 1 - 12, auto, grow
}

type DetailConfigGeneral = {
  id: string
  size?: ResponsiveStyleValue<number> // MUI breakpoints, values in px
}

export type DetailConfigOpenWeatherForecast = DetailConfigGeneral & {
  type: DetailType.OpeWeatherForecast
  options: {
    locale: Intl.UnicodeBCP47LocaleIdentifier
    location: string
    units: OpeWeatherUnits
  }
}

export type WidgetConfigGroup = WidgetConfigGeneral & {
  type: WidgetType.Group
  options: {
    widgets: WidgetsConfig
  }
}

export type WidgetConfigCurrentTime = WidgetConfigGeneral & {
  type: WidgetType.CurrentTime
  options: {
    // both for moment.js library
    locale: Intl.UnicodeBCP47LocaleIdentifier
    timezone: string // list Intl.supportedValuesOf('timeZone')
  }
}

export type WidgetConfigOpenWeather = WidgetConfigGeneral & {
  type: WidgetType.OpeWeatherCurrent
  options: {
    location: string
    units: OpeWeatherUnits
  }
  detail?: DetailConfigOpenWeatherForecast
}

export type WidgetConfigCoinGeckoCoinCurrentPrice = WidgetConfigGeneral & {
  type: WidgetType.CoinGeckoCoinCurrentPrice
  options: {
    id: string // id by CoinGecko
    locale: Intl.UnicodeBCP47LocaleIdentifier
    currency: CoinGeckoCurrency
    maximumFractionDigits?: number
  }
}

export type WidgetConfigCoinGeckoCoinMarketChart = WidgetConfigGeneral & {
  type: WidgetType.CoinGeckoCoinMarketChart
  options: {
    id: string
    locale: Intl.UnicodeBCP47LocaleIdentifier
    currency: CoinGeckoCurrency
    maximumFractionDigits?: number
    daysOptions: number[]
    defaultDaysOption: number
  }
}

export type DetailConfig = DetailConfigOpenWeatherForecast
export type WidgetConfig = WidgetConfigGroup | WidgetConfigCurrentTime | WidgetConfigOpenWeather | WidgetConfigCoinGeckoCoinCurrentPrice | WidgetConfigCoinGeckoCoinMarketChart
export type WidgetsConfig = WidgetConfig[]
