import moment from 'moment/min/moment-with-locales'

import { OpeWeatherUnits } from './types'

import { OpenWeatherForecast } from './api/types'

const TEMPERATURE_UNITS_TO_SYMBOL = {
  [OpeWeatherUnits.Standard]: 'K',
  [OpeWeatherUnits.Metric]: '°C',
  [OpeWeatherUnits.Imperial]: '°F',
}

export const formatDate = (timestamp: number, locale: Intl.UnicodeBCP47LocaleIdentifier) => {
  return moment(timestamp * 1000).locale(locale).format('L')
}

export const formatTime = (timestamp: number, locale: Intl.UnicodeBCP47LocaleIdentifier) => {
  const datetime = moment(timestamp * 1000).locale(locale)
  const formattedTime = datetime.format('LT')
  const hours = datetime.hours()

  return hours < 10 ? `0${formattedTime}` : formattedTime
}

export const formatTemperature = (temperature: number, units: OpeWeatherUnits) => {
  return `${Math.round(temperature)}${TEMPERATURE_UNITS_TO_SYMBOL[units]}`
}

export const groupByDay = (items: OpenWeatherForecast[])=> {
  const grouped = items.reduce((acc, cur) => {
    const dayTimestamp = cur.dt - (cur.dt % (60 * 60 * 24))
    if (acc[dayTimestamp] === undefined) {
      acc[dayTimestamp] = [] as OpenWeatherForecast[]
    }
    acc[dayTimestamp].push(cur)
    return acc
  }, {} as Record<string, OpenWeatherForecast[]>)

  return Object.keys(grouped).map(i => ({ key: i, items: grouped[i] }))
}
