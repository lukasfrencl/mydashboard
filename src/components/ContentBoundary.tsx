import * as React from 'react'

import { Alert, CircularProgress } from '@mui/material'

interface Props<T> {
  isPending: boolean
  isError: boolean
  data?: T
  error: Error | null
  children?: (data: T) => React.ReactNode,
}

export const ContentBoundary = <T,>({ isPending, isError, data, error, children }: Props<T>) => (
  <>
    {isPending && <CircularProgress />}
    {!isPending && isError && <Alert severity="error">{error?.message}</Alert>}
    {!isPending && !isError && data && children ? children(data) : null}
  </>
)
