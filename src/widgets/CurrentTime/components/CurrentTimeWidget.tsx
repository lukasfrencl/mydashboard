import * as React from 'react'

import { Box, Typography } from '@mui/material'

import { Widget } from '~/components/Widget'

import { WidgetConfigCurrentTime } from '~/widgets/types'

import { getFormattedDateTime } from '../helpers'

interface Props {
  config: WidgetConfigCurrentTime['options']
}

export const CurrentTimeWidget: React.FC<Props> = ({ config: { locale, timezone } }) => {
  const [currentTime, setCurrentTime] = React.useState(getFormattedDateTime(locale, timezone))
  const [correction, setCorrection] = React.useState(-1)

  React.useEffect(() => {
    const partialSecond = Date.now() % 1000
    setCorrection(1000 - partialSecond)
  }, [locale, timezone])

  React.useEffect(() => {
    if (correction === 0 || correction === -1) {
      return
    }
    const timeout = setTimeout(
      () => {
        setCurrentTime(getFormattedDateTime(locale, timezone))
        setCorrection(0)
      },
      correction
    )
    return () => clearTimeout(timeout)
  }, [locale, timezone, correction])

  React.useEffect(() => {
    if (correction > 0 || correction === -1) {
      return
    }
    const interval = setInterval(
      () => setCurrentTime(getFormattedDateTime(locale, timezone)),
      1000
    )
    return () => clearInterval(interval)
  }, [locale, timezone, correction])

  return (
    <Widget>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Typography variant="h5" component="div" fontWeight="fontWeightBold">{currentTime.timezone}</Typography>
        <Typography variant="h6" component="div" fontWeight="fontWeightBold">{currentTime.date}</Typography>
        <Typography variant="h4" component="div" fontWeight="fontWeightBold">{currentTime.time}</Typography>
      </Box>
    </Widget>
  )
}
