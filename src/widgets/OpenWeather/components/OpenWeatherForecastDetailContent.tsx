import * as React from 'react'

import { Box, Stack, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material'

import { DetailConfigOpenWeatherForecast } from '~/widgets/types'

import { OpenWeatherForecastResponse } from '../api/types'
import { formatDate, formatTime, formatTemperature, groupByDay } from '../helpers'

import { OpenWeatherLogo } from './OpenWeatherLogo'

const OPEN_WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/{code}@2x.png'

interface Props {
  config: DetailConfigOpenWeatherForecast['options']
  data: OpenWeatherForecastResponse
}

export const OpenWeatherForecastDetailContent: React.FC<Props> = ( { config: { locale, units }, data }) => (
  <>
    <OpenWeatherLogo />
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Typography variant="h5" component="div" fontWeight="fontWeightBold">{data.city.name}</Typography>
      {groupByDay(data.list).map((g) => (
        <React.Fragment key={g.key}>
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography variant="h6" component="div" fontWeight="fontWeightBold" textAlign="left">{formatDate(Number(g.key), locale)}</Typography>
          </Box>
          <Table sx={{ 'td': { border: 0 } }} size="small">
            <TableBody>
              {g.items.map(i => (
                <TableRow key={i.dt}>
                  <TableCell sx={{ color: 'inherit' }}>
                    <Typography variant="body1" component="div">{formatTime(i.dt, locale)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Stack
                      component="img"
                      sx={{ height: 35 }}
                      alt={i.weather[0]?.description ?? ''}
                      title={i.weather[0]?.description ?? ''}
                      src={OPEN_WEATHER_ICON_URL.replace('{code}', i.weather[0]?.icon ?? '')}
                    />
                  </TableCell>
                  <TableCell sx={{ color: 'inherit' }}>
                    <Typography variant="h6" component="div">{formatTemperature(i.main.temp, units)}</Typography>
                  </TableCell>
                  <TableCell sx={{ color: 'inherit' }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <Typography variant="h6" component="div">{formatTemperature(i.main.feels_like, units)}</Typography>
                      <Typography variant="body2" component="div" sx={{ pl: 1 }}>(feels like)</Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      ))}
    </Box>
  </>
)
