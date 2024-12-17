import axios from 'axios'

import { OPEN_WEATHER_API_KEY } from '~/env'

import { OpenWeatherCurrentResponse } from './types'

import { OpeWeatherUnits } from '../types'

const OPEN_WEATHER_API_CURRENT = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchOpenWeatherCurrent = async (lat: number, lon: number, units: OpeWeatherUnits) => {
  const response = await axios.get<OpenWeatherCurrentResponse>(OPEN_WEATHER_API_CURRENT, {
    params: {
      lat,
      lon,
      units,
      appid: OPEN_WEATHER_API_KEY,
    }
  })

  return response.data
}
