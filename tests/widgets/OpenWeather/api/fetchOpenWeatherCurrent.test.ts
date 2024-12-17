import { expect, test, vi } from 'vitest'

import { fetchOpenWeatherCurrent } from '~/widgets/OpenWeather/api'
import { OpeWeatherUnits } from '~/widgets/OpenWeather/types'

import axios from 'axios'

vi.mock('axios')

test('fetch OpenWeather current', async () => {
  const lat = 20.5
  const lon = 40.9
  const units = OpeWeatherUnits.Metric

  const data = { some: 'any' }

  const mockedAxios = vi.mocked(axios, true)
  mockedAxios.get.mockResolvedValue({ data })

  const result = await fetchOpenWeatherCurrent(lat, lon, units)

  expect(mockedAxios.get).toBeCalledWith(expect.any(String), {
    params: {
      lat,
      lon,
      units,
      appid: expect.any(String),
    },
  })
  expect(result).toEqual(data)
})
