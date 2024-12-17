import * as React from 'react'
import { useAtomValue } from 'jotai'
import { styled } from '@mui/material/styles'

import { Box, Fade } from '@mui/material'

import { detailAtom } from '~/state/detailAtom'

const StyledDetail = styled(Box)(({ theme }) => ({
  width: '100%',
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

export const Detail: React.FC<Props> = ({ children, sx }) => {
  const detail = useAtomValue(detailAtom)
  return (
    <Fade in={detail !== undefined}>
      <StyledDetail sx={sx}>
        {children}
      </StyledDetail>
    </Fade>
  )
}
