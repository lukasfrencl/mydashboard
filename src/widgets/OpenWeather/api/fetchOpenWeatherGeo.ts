import axios from 'axios'

import { OPEN_WEATHER_API_KEY } from '~/env'

import { OpenWeatherGeoResponse } from './types'

const OPEN_WEATHER_API_GEO = 'https://api.openweathermap.org/geo/1.0/direct'

export const fetchOpenWeatherGeo = async (location: string) => {
  const response = await axios.get<OpenWeatherGeoResponse>(OPEN_WEATHER_API_GEO, {
    params: {
      // the API has troubles when encodeURIComponent is applied on the location
      q: location,
      appid: OPEN_WEATHER_API_KEY,
    }
  })

  if (response.data.length === 0) {
    throw new Error(`Location '${location}' not found`)
  }

  return response.data[0]
}
