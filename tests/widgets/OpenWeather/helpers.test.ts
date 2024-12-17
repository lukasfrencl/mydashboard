import { expect, test } from 'vitest'

import { OpenWeatherForecast } from '~/widgets/OpenWeather/api/types'
import { formatDate, formatTime, formatTemperature, groupByDay } from '~/widgets/OpenWeather/helpers'
import { OpeWeatherUnits } from '~/widgets/OpenWeather/types'

test('format date for timestamp 1734380700 and locale en', () => {
  expect(formatDate(1734380700, 'en')).toBe('12/16/2024')
})

test('format date for timestamp 1734380700 and locale cs', () => {
  expect(formatDate(1734380700, 'cs')).toBe('16.12.2024')
})

test('format time for timestamp 1734380700 and locale en', () => {
  expect(formatTime(1734380700, 'en')).toBe('9:25 PM')
})

test('format time for timestamp 1734380700 and locale cs', () => {
  expect(formatTime(1734380700, 'cs')).toBe('21:25')
})

test('format time for timestamp 1734330700 and locale cs', () => {
  expect(formatTime(1734330700, 'cs')).toBe('07:31')
})

test('format temperature for value 23.4 and units metric', () => {
  expect(formatTemperature(23.4, OpeWeatherUnits.Metric)).toBe('23°C')
})

test('format temperature for value 23.4 and units imperial', () => {
  expect(formatTemperature(23.4, OpeWeatherUnits.Imperial)).toBe('23°F')
})

test('group by day for fixture', () => {
  const fixture = [
    {
      dt: 1734401773,
    } as unknown as OpenWeatherForecast,
    {
      dt: 1734399758,
    } as unknown as OpenWeatherForecast,
    {
      dt: 1734559758,
    } as unknown as OpenWeatherForecast,
  ]
  const expected = [
    {
      key: '1734393600',
      items: [
        {
          dt: 1734401773,
        } as unknown as OpenWeatherForecast,
        {
          dt: 1734399758,
        } as unknown as OpenWeatherForecast,
      ],
    },
    {
      key: '1734480000',
      items: [
        {
          dt: 1734559758,
        } as unknown as OpenWeatherForecast,
      ],
    }
  ]

  expect(groupByDay(fixture)).toEqual(expected)
})
