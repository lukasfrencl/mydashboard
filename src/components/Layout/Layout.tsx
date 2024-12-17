import * as React from 'react'
import { useAtom, useAtomValue } from 'jotai'

import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { AppBar } from './AppBar'
import { Detail } from './Detail'
import { Main } from './Main'

import { detailSizeAtom } from '~/state/detailSizeAtom'
import { detailOpenAtom } from '~/state/detailOpenAtom'

const useDetailWidth = () => {
  const detailSize = useAtomValue(detailSizeAtom)

  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.up('xs'))
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'))
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'))
  const matchesLg = useMediaQuery(theme.breakpoints.up('lg'))
  const matchesXl = useMediaQuery(theme.breakpoints.up('xl'))

  switch (true) {
    case matchesXl:
      return detailSize?.xl ?? 600
    case matchesLg:
      return detailSize?.lg ?? 500
    case matchesMd:
      return detailSize?.md ?? 400
    case matchesSm:
      return detailSize?.sm ?? 300
    case matchesXs:
      return detailSize?.xs ?? 300
    default:
      return 300
  }
}

interface Props {
  mainContent: React.ReactNode
  detailContent: React.ReactNode
}

export const Layout: React.FC<Props> = ({ mainContent, detailContent }) => {
  const [open, setOpen] = useAtom(detailOpenAtom)
  const detailWidth = useDetailWidth()

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar detailWidth={detailWidth} open={open} />
      <Main detailWidth={detailWidth} open={open}>
        {mainContent}
      </Main>
      <Detail detailWidth={detailWidth} open={open} handleClose={() => setOpen(false)}>
        {detailContent}
      </Detail>
    </Box>
  )
}
