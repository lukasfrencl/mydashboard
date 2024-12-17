import * as React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { DetailHeader } from './DetailHeader'

interface Props {
  detailWidth: number
  open?: boolean
  children?: React.ReactNode
}

const StyledMain = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'detailWidth'
})<Props>(({ theme, detailWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -detailWidth,
  position: 'relative',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    },
  ],
}))

export const Main: React.FC<Props> = ({ detailWidth, open, children }) => {
  return (
    <StyledMain open={open} detailWidth={detailWidth}>
      <DetailHeader />
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </StyledMain>
  )
}
