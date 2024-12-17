import { useQuery } from '@tanstack/react-query'

import { fetchOpenWeatherCurrent } from '../api'
import { OpeWeatherUnits } from '../types'

import { useOpenWeatherGeoQuery } from './useOpenWeatherGeoQuery'

export const useOpenWeatherCurrentQuery = (location: string, units: OpeWeatherUnits) => {
  const geo = useOpenWeatherGeoQuery(location)

  const current = useQuery({
    queryKey: ['open_weather_current', geo.data?.lat, geo.data?.lon, units],
    queryFn: () => fetchOpenWeatherCurrent(geo.data?.lat ?? 0, geo.data?.lon ?? 0, units),
    enabled: !!geo.data?.lat && !!geo.data?.lon,
    refetchInterval: 1000 * 60 * 5,
  })

  return {
    ...current,
    isPending: geo.isPending || current.isPending,
    isError: geo.isError || current.isError,
    error: geo.error || current.error,
  }
}
