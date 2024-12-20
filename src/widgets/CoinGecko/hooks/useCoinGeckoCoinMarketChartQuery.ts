import { useQuery } from '@tanstack/react-query'

import { fetchCoinGeckoCoinMarketChart } from '../api'

import { useCoinGeckoCoinQuery } from './useCoinGeckoCoinQuery'

const REFETCH_INTERVAL_MS = 1000 * 60 * 60

export const useCoinGeckoCoinMarketChartQuery = (id: string, currency: string, days: number) => {
  const coin = useCoinGeckoCoinQuery(id)

  const coinMarketChart = useQuery({
    queryKey: ['coin_gecko_coin_market_chart', id, days],
    queryFn: () => fetchCoinGeckoCoinMarketChart(id, currency, days),
    refetchInterval: REFETCH_INTERVAL_MS,
  })

  return {
    ...coinMarketChart,
    isPending: coin.isPending || coinMarketChart.isPending,
    isError: coin.isError || coinMarketChart.isError,
    error: coin.error || coinMarketChart.error,
    data: coin.data && coinMarketChart.data ?{
      coin: coin.data,
      coinMarketChart: coinMarketChart.data,
    } : undefined,
  }
}
