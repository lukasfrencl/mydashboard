import { expect, test, vi } from 'vitest'

import { getFormattedDateTime } from '~/widgets/CurrentTime/helpers'

test('get formatted current datetime for locale cs and timezone Europe/Prague', () => {
  const datetime = new Date('2024-12-17T10:30:35.000Z')
  vi.useFakeTimers()
  vi.setSystemTime(datetime)
  expect(getFormattedDateTime('cs', 'Europe/Prague')).toEqual({
    date: 'Úterý 17.12.2024',
    time: '11:30:35 CET',
    timezone: 'Prague',
  })
  vi.useRealTimers()
})

test('get formatted current datetime for locale cs and timezone Europe/Prague', () => {
  const datetime = new Date('2024-12-16T08:30:35.000Z')
  vi.useFakeTimers()
  vi.setSystemTime(datetime)
  expect(getFormattedDateTime('cs', 'Europe/Prague')).toEqual({
    date: 'Pondělí 16.12.2024',
    time: '09:30:35 CET',
    timezone: 'Prague',
  })
  vi.useRealTimers()
})

test('get formatted current datetime for locale en and timezone America/New_York', () => {
  const datetime = new Date('2024-12-16T08:30:35.000Z')
  vi.useFakeTimers()
  vi.setSystemTime(datetime)
  expect(getFormattedDateTime('en', 'America/New_York')).toEqual({
    date: 'Monday 12/16/2024',
    time: '03:30:35 AM EST',
    timezone: 'New York',
  })
  vi.useRealTimers()
})
