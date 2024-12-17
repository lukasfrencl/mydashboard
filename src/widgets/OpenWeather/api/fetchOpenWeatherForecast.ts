import axios from 'axios'

import { OPEN_WEATHER_API_KEY } from '~/env'

import { OpenWeatherForecastResponse } from './types'

import { OpeWeatherUnits } from '../types'

const OPEN_WEATHER_API_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast'

export const fetchOpenWeatherForecast = async (lat: number, lon: number, units: OpeWeatherUnits) => {
  const response = await axios.get<OpenWeatherForecastResponse>(OPEN_WEATHER_API_FORECAST, {
    params: {
      lat,
      lon,
      units,
      appid: OPEN_WEATHER_API_KEY,
    }
  })

  return response.data
}
