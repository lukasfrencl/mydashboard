import * as React from 'react'

import { Box } from '@mui/material'

import { ContentBoundary } from '~/components/ContentBoundary'
import { OpenDetailLink } from '~/components/OpenDetailLink'
import { Widget } from '~/components/Widget'

import { WidgetConfigOpenWeather } from '~/widgets/types'

import { OpenWeatherCurrentResponse } from '../api/types'
import { useOpenWeatherCurrentQuery } from '../hooks'

import { OpenWeatherLogo } from './OpenWeatherLogo'
import { OpenWeatherCurrentWidgetContent } from './OpenWeatherCurrentWidgetContent.tsx'

interface Props {
  config: WidgetConfigOpenWeather['options']
  openDetail?: () => void
}

export const OpenWeatherCurrentWidget: React.FC<Props> = ({ config, openDetail }) => {
  const { isPending, isError, data, error } = useOpenWeatherCurrentQuery(config.location, config.units)

  return (
    <Widget>
      <OpenWeatherLogo sx={{ bottom: 5, top: undefined }} />
      <OpenDetailLink openDetail={openDetail} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <ContentBoundary<OpenWeatherCurrentResponse> isPending={isPending} isError={isError} data={data} error={error}>
          {(data) => (
            <OpenWeatherCurrentWidgetContent config={config} data={data} />
          )}
        </ContentBoundary>
      </Box>
    </Widget>
  )
}
