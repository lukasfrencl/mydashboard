import axios from 'axios'

import { COIN_GECKO_API_KEY } from '~/env'

import { CoinGeckoCoinResponse } from './types'

const COIN_GECKO_API_COIN = 'https://api.coingecko.com/api/v3/coins/{id}'

export const fetchCoinGeckoCoin = async (id: string) => {
  const response = await axios.get<CoinGeckoCoinResponse>(COIN_GECKO_API_COIN.replace('{id}', id), {
    params: {
      x_cg_demo_api_key: COIN_GECKO_API_KEY,
    }
  })

  return response.data
}
