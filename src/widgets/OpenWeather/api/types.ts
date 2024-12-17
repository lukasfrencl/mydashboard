interface OpenWeatherGeoLocation {
  name: string
  local_names: {
    [key: string]: string
  }
  lat: number
  lon: number
  country: string
  state: string
}

export type OpenWeatherGeoResponse = OpenWeatherGeoLocation[]

interface OpenWeatherWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface OpenWeatherCurrentResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: OpenWeatherWeather[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust?: number
  }
  rain?: {
    "1h": number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: string
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: string
}

export interface OpenWeatherForecast {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  },
  weather: OpenWeatherWeather[],
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  sys: {
    pod: string
  }
  dt_txt: string
}

export interface OpenWeatherForecastResponse {
  cod: string
  message: number
  cnt: number
  list: OpenWeatherForecast[]
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  },
}
