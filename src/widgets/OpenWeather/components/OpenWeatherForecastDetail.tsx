import * as React from 'react'

import { ContentBoundary } from '~/components/ContentBoundary'
import { Detail } from '~/components/Detail'

import { DetailConfigOpenWeatherForecast } from '~/widgets/types'

import { OpenWeatherForecastResponse } from '../api/types'
import { useOpenWeatherForecastQuery } from '../hooks'

import { OpenWeatherForecastDetailContent } from './OpenWeatherForecastDetailContent'

interface Props {
  config: DetailConfigOpenWeatherForecast['options']
}

export const OpenWeatherForecastDetail: React.FC<Props> = ({ config }) => {
  const { isPending, isError, data, error } = useOpenWeatherForecastQuery(config.location, config.units)

  return (
    <Detail>
      <ContentBoundary<OpenWeatherForecastResponse> isPending={isPending} isError={isError} data={data} error={error}>
        {(data) => (
          <OpenWeatherForecastDetailContent config={config} data={data} />
        )}
      </ContentBoundary>
    </Detail>
  )
}
