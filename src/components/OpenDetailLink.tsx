import * as React from 'react'
import { IconButton, Stack } from '@mui/material'
import ReadMoreIcon from '@mui/icons-material/ReadMore'

interface Props {
  openDetail?: () => void
  sx?: React.CSSProperties,
}

export const OpenDetailLink: React.FC<Props> = ({ openDetail, sx }) => {
  if (!openDetail) {
    return null
  }

  return (
    <Stack
      sx={{
        display: 'block',
        position: 'absolute',
        top: 5,
        right: 5,
        ...sx,
      }}
    >
      <IconButton color="primary" title="Detail" aria-label="Detail" onClick={openDetail}>
        <ReadMoreIcon />
      </IconButton>
    </Stack>
  )
}
