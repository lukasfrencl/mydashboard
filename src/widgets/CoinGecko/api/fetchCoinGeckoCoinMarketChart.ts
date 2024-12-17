import axios from 'axios'

import { COIN_GECKO_API_KEY } from '~/env'

import { CoinGeckoCoinMarketChartResponse } from './types'

const COIN_GECKO_API_COIN_MARKET_CHART = 'https://api.coingecko.com/api/v3/coins/{id}/market_chart'

export const fetchCoinGeckoCoinMarketChart = async (id: string, currency: string, days: number) => {
  const response = await axios.get<CoinGeckoCoinMarketChartResponse>(COIN_GECKO_API_COIN_MARKET_CHART.replace('{id}', id), {
    params: {
      vs_currency: currency,
      days,
      x_cg_demo_api_key: COIN_GECKO_API_KEY,
    }
  })

  return response.data
}
