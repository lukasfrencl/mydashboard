import { useQuery } from '@tanstack/react-query'

import { fetchCoinGeckoCoin } from '../api'

const REFETCH_INTERVAL_MS = 1000 * 30

export const useCoinGeckoCoinQuery = (id: string) => {
  const coin = useQuery({
    queryKey: ['coin_gecko_coin', id],
    queryFn: () => fetchCoinGeckoCoin(id),
    refetchInterval: REFETCH_INTERVAL_MS,
  })

  return coin
}
