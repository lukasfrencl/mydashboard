import moment from 'moment/min/moment-with-locales'

import { CoinGeckoCurrency } from './types'

export const formatPrice = (
  price: number,
  locale: Intl.UnicodeBCP47LocaleIdentifier,
  currency: CoinGeckoCurrency,
  maximumFractionDigits?: number
) => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: maximumFractionDigits ?? 10,
  }).format(price)
}

export const formatDateTime = (
  timestamp: number,
  locale: Intl.UnicodeBCP47LocaleIdentifier,
) => {
  return moment(timestamp).locale(locale).format('L LTS')
}

export const formatDateTimeShort = (
  timestamp: number,
  locale: Intl.UnicodeBCP47LocaleIdentifier,
) => {
  const datetime = moment(timestamp).locale(locale)
  let formatted = ''

  if (datetime.dayOfYear() === 1) {
    formatted = datetime.format('YYYY')
  } else if (datetime.hours() === 0) {
    formatted = datetime.format('MMM D')
  } else {
    formatted = datetime.format('HH:mm')
  }

  return formatted
}
