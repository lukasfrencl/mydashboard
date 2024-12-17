import * as React from 'react'

import { styled } from '@mui/material/styles'

import { Card } from '@mui/material'

const StyledWidget = styled(Card)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

interface Props {
  children?: React.ReactNode,
  sx?: React.CSSProperties,
}

export const Widget: React.FC<Props> = ({ children, sx }) => {
  return (
    <StyledWidget sx={sx}>
      {children}
    </StyledWidget>
  )
}
