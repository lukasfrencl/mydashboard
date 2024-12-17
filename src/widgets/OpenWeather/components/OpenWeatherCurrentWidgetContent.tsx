import * as React from 'react'

import { Box, Stack, Typography } from '@mui/material'

import { WidgetConfigOpenWeather } from '~/widgets/types'

import { OpenWeatherCurrentResponse } from '../api/types'
import { formatTemperature } from '../helpers'

const OPEN_WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/{code}@2x.png'

interface Props {
  config: WidgetConfigOpenWeather['options']
  data: OpenWeatherCurrentResponse
}

export const OpenWeatherCurrentWidgetContent: React.FC<Props> = ({ config, data }) => (
  <>
    <Typography variant="h5" component="div" fontWeight="fontWeightBold">{data.name}</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Stack
        component="img"
        sx={{ height: 70 }}
        alt={data.weather[0]?.description ?? ''}
        title={data.weather[0]?.description ?? ''}
        src={OPEN_WEATHER_ICON_URL.replace('{code}', data.weather[0]?.icon ?? '')}
      />
      <Typography variant="h3" component="div" sx={{ pl: 1 }}>{formatTemperature(data.main.temp ?? 0, config.units)}</Typography>
    </Box>
    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography variant="h6" component="div">{formatTemperature(data.main.feels_like ?? 0, config.units)}</Typography>
      <Typography variant="body2" component="div" sx={{ pl: 1 }}>(feels like)</Typography>
    </Stack>
  </>
)
