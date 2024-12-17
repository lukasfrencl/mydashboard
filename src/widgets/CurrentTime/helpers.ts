import moment from 'moment/min/moment-with-locales'
import momentTZ from 'moment-timezone'

import { CurrentDateTime } from './types'

const toLocaleUcFirst = (value: string) =>
  value.length > 0 ? `${value[0].toLocaleUpperCase()}${value.substring(1)}` : value

export const getFormattedDateTime = (locale: Intl.UnicodeBCP47LocaleIdentifier, timezone: string): CurrentDateTime => {
  const current = moment()
  current.locale(locale)
  const datetime = momentTZ(current).tz(timezone)
  const hours = datetime.hours()
  const formattedTime = datetime.format('LTS z')
  return {
    date: toLocaleUcFirst(datetime.format('dddd L')),
    time: hours < 10 ? `0${formattedTime}` : formattedTime,
    timezone: timezone.replace('_', ' ').split('/')[1]
  }
}
