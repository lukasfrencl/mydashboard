import * as React from 'react'
import { useAtomValue } from 'jotai'

import { detailAtom } from '~/state/detailAtom'

import { OpenWeatherForecastDetail } from '~/widgets/OpenWeather'

import { DetailConfig, DetailType } from '~/widgets/types'

const renderDetailByConfig = (config: DetailConfig) => {
  switch (config.type) {
    case DetailType.OpeWeatherForecast:
      return  <OpenWeatherForecastDetail config={config.options} />
    default:
      return null
  }
}

export const Details: React.FC = () => {
  const detail = useAtomValue(detailAtom)
  return detail && renderDetailByConfig(detail)
}
