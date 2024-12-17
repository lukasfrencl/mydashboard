import { useQuery } from '@tanstack/react-query'

import { fetchOpenWeatherForecast } from '../api'
import { OpeWeatherUnits } from '../types'

import { useOpenWeatherGeoQuery } from './useOpenWeatherGeoQuery'

export const useOpenWeatherForecastQuery = (location: string, units: OpeWeatherUnits) => {
  const geo = useOpenWeatherGeoQuery(location)

  const forecast = useQuery({
    queryKey: ['open_weather_forecast', geo.data?.lat, geo.data?.lon, units],
    queryFn: () => fetchOpenWeatherForecast(geo.data?.lat ?? 0, geo.data?.lon ?? 0, units),
    enabled: !!geo.data?.lat && !!geo.data?.lon,
    refetchInterval: 1000 * 60 * 5,
  })

  return {
    ...forecast,
    isPending: geo.isPending || forecast.isPending,
    isError: geo.isError || forecast.isError,
    error: geo.error || forecast.error,
  }
}
