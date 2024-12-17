import { useQuery } from '@tanstack/react-query'

import { fetchCoinGeckoCoinMarketChart } from '../api'

import { useCoinGeckoCoinQuery } from './useCoinGeckoCoinQuery'

export const useCoinGeckoCoinMarketChartQuery = (id: string, currency: string, days: number) => {
  const coin = useCoinGeckoCoinQuery(id)

  const coinMarketChart = useQuery({
    queryKey: ['coin_gecko_coin_market_chart', id, days],
    queryFn: () => fetchCoinGeckoCoinMarketChart(id, currency, days),
    refetchInterval: 1000 * 60 * 60,
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
