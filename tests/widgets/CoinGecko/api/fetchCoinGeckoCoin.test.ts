import { expect, test, vi } from 'vitest'

import { fetchCoinGeckoCoin } from '~/widgets/CoinGecko/api'

import axios from 'axios'
vi.mock('axios')

test('fetch CoinGecko coin', async () => {
  const id = 'bitcoin'

  const data = { some: 'any' }

  const mockedAxios = vi.mocked(axios, true)
  mockedAxios.get.mockResolvedValue({ data })

  const result = await fetchCoinGeckoCoin(id)

  expect(mockedAxios.get).toBeCalledWith(expect.stringContaining(id), {
    params: {
      x_cg_demo_api_key: expect.any(String),
    },
  })
  expect(result).toEqual(data)
})
