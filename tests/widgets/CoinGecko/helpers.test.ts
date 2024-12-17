import { expect, test } from 'vitest'

import { formatPrice, formatDateTime, formatDateTimeShort } from '~/widgets/CoinGecko/helpers'
import { CoinGeckoCurrency } from '~/widgets/CoinGecko/types'

test('format price for value 100000 and locale en and currency USD and maximum fraction digits 0', () => {
  expect(formatPrice(100000, 'en', CoinGeckoCurrency.USD, 0)).toBe('$100,000')
})

test('format price for value 100000.23 and locale en and currency USD and maximum fraction digits 0', () => {
  expect(formatPrice(100000.23, 'en', CoinGeckoCurrency.USD, 0)).toBe('$100,000')
})

test('format price for value 100000.23 and locale en and currency USD and maximum fraction digits is undefined', () => {
  expect(formatPrice(100000.23, 'en', CoinGeckoCurrency.USD)).toBe('$100,000.23')
})

test('format price for value 100000 and locale cs and currency CZK and maximum fraction digits 0', () => {
  expect(formatPrice(100000, 'cs', CoinGeckoCurrency.CZK, 0)).toBe('100 000 Kč')
})

test('format datetime for timestamp 1734380700000 and locale cs', () => {
  expect(formatDateTime(1734380700000, 'cs')).toBe('16.12.2024 21:25:00')
})

test('format datetime for timestamp 1734380700000 and locale en', () => {
  expect(formatDateTime(1734380700000, 'en')).toBe('12/16/2024 9:25:00 PM')
})

test('format datetime short for timestamp 1734380700000 and locale en', () => {
  expect(formatDateTimeShort(1734380700000, 'en')).toBe('21:25')
})

test('format datetime short for timestamp 1704094235000 and locale en', () => {
  expect(formatDateTimeShort(1704094235000, 'en')).toBe('2024')
})

test('format datetime short for timestamp 1734305435000 and locale en', () => {
  expect(formatDateTimeShort(1734305435000, 'en')).toBe('Dec 16')
})
