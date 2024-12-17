import { useQuery } from '@tanstack/react-query'

import { fetchCoinGeckoCoin } from '../api'

export const useCoinGeckoCoinQuery = (id: string) => {
  const coin = useQuery({
    queryKey: ['coin_gecko_coin', id],
    queryFn: () => fetchCoinGeckoCoin(id),
    refetchInterval: 1000 * 30,
  })

  return coin
}
