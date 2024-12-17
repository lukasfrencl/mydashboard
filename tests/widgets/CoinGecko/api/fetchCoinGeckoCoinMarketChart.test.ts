import { expect, test, vi } from 'vitest'

import { fetchCoinGeckoCoinMarketChart } from '~/widgets/CoinGecko/api'

import axios from 'axios'
vi.mock('axios')

test('fetch CoinGecko coin market chart', async () => {
  const id = 'bitcoin'
  const currency = 'usd'
  const days = 90

  const data = { some: 'any' }

  const mockedAxios = vi.mocked(axios, true)
  mockedAxios.get.mockResolvedValue({ data })

  const result = await fetchCoinGeckoCoinMarketChart(id, currency, days)

  expect(mockedAxios.get).toBeCalledWith(expect.stringContaining(id), {
    params: {
      vs_currency: currency,
      days,
      x_cg_demo_api_key: expect.any(String),
    },
  })
  expect(result).toEqual(data)
})
