export interface CoinGeckoCoinResponse {
  id: string
  symbol: string
  name: string
  image: {
    thumb: string
    small: string
    large: string
  }
  market_data: {
    current_price: {
      [key: string]: number
    }
    // ...
  }
  // ...
}

type Tick = [number, number] // [timestamp, price]

export interface CoinGeckoCoinMarketChartResponse {
  prices: Tick[]
  market_caps: Tick[]
  total_volumes: Tick[]
}
