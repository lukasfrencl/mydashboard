import * as React from 'react'

import { Box, Divider, Drawer, IconButton } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { DetailHeader } from './DetailHeader'

interface Props {
  detailWidth: number,
  handleClose: () => void
  open?: boolean
  children?: React.ReactNode
}

export const Detail: React.FC<Props> = ({ detailWidth, handleClose, open, children }) => {
  return (
    <Drawer
      sx={{
        width: detailWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: detailWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DetailHeader>
        <IconButton onClick={handleClose}>
          <ChevronRightIcon />
        </IconButton>
      </DetailHeader>
      <Divider />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        {children}
      </Box>
    </Drawer>
  )
}
