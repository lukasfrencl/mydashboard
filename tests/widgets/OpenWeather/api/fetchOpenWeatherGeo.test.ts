import { expect, test, vi } from 'vitest'

import { fetchOpenWeatherGeo } from '~/widgets/OpenWeather/api'

import axios from 'axios'

vi.mock('axios')

test('fetch OpenWeather geo', async () => {
  const location = 'Praha'

  const data: Record<string, any>[] = [{ some: 'any' }]

  const mockedAxios = vi.mocked(axios, true)
  mockedAxios.get.mockResolvedValue({ data })

  const result = await fetchOpenWeatherGeo(location)

  expect(mockedAxios.get).toBeCalledWith(expect.any(String), {
    params: {
      q: location,
      appid: expect.any(String),
    },
  })
  expect(result).toEqual(data[0])
})

test('fetch OpenWeather geo location not found', async () => {
  const location = 'Praaaha'

  const data: Record<string, any>[] = []

  const mockedAxios = vi.mocked(axios, true)
  mockedAxios.get.mockResolvedValue({ data })

  await expect(() => fetchOpenWeatherGeo(location)).rejects.toThrowError(`Location '${location}' not found`)
  // this non-async check must be executed after awaiting async check, because the tested function was not called yet
  expect(mockedAxios.get).toBeCalledWith(expect.any(String), {
    params: {
      q: location,
      appid: expect.any(String),
    },
  })
})
