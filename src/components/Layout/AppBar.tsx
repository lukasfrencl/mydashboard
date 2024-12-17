import * as React from 'react'
import { Toolbar, Typography } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'

import DashboardIcon from '@mui/icons-material/Dashboard';

interface Props extends MuiAppBarProps {
  detailWidth: number
  open?: boolean
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'detailWidth',
})<Props>(({ theme, detailWidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${detailWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: detailWidth,
      },
    },
  ],
}))

export const AppBar: React.FC<Props> = ({ detailWidth, open }) => {
  return (
    <StyledAppBar position="fixed" detailWidth={detailWidth} open={open}>
      <Toolbar>
        <DashboardIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>myDashboard</Typography>
      </Toolbar>
    </StyledAppBar>
  )
}
