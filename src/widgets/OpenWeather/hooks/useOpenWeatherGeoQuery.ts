import { useQuery } from '@tanstack/react-query'

import { fetchOpenWeatherGeo } from '../api'

export const useOpenWeatherGeoQuery = (location: string) => {
  const geo = useQuery({
    queryKey: ['open_weather_geo', location],
    queryFn: () => fetchOpenWeatherGeo(location),
    gcTime: Number.MIN_SAFE_INTEGER, // geo data never change
  })

  return geo
}
