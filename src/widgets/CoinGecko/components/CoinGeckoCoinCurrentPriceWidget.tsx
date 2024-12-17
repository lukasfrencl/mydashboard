import * as React from 'react'

import { Box } from '@mui/material'

import { ContentBoundary } from '~/components/ContentBoundary'
import { OpenDetailLink } from '~/components/OpenDetailLink'
import { Widget } from '~/components/Widget'

import { WidgetConfigCoinGeckoCoinCurrentPrice } from '~/widgets/types'

import { CoinGeckoCoinResponse } from '../api/types'
import { useCoinGeckoCoinQuery } from '../hooks'

import { CoinGeckoLogo } from './CoinGeckoLogo'
import { CoinGeckoCoinCurrentPriceWidgetContent } from './CoinGeckoCoinCurrentPriceWidgetContent'

interface Props {
  config: WidgetConfigCoinGeckoCoinCurrentPrice['options']
  openDetail?: () => void
}

export const CoinGeckoCoinCurrentPriceWidget: React.FC<Props> = ({ config, openDetail }) => {
  const { isPending, isError, data, error } = useCoinGeckoCoinQuery(config.id)

  return (
    <Widget>
      <CoinGeckoLogo sx={{ bottom: 5, top: undefined }} />
      <OpenDetailLink openDetail={openDetail} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <ContentBoundary<CoinGeckoCoinResponse> isPending={isPending} isError={isError} data={data} error={error}>
          {(data) => (
            <CoinGeckoCoinCurrentPriceWidgetContent config={config} data={data} />
          )}
        </ContentBoundary>
      </Box>
    </Widget>
  )
}
