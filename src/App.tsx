import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Layout } from './components/Layout/Layout'
import { Details } from './components/Details'
import { Widgets } from './components/Widgets'

import { widgetsConfig } from './config'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        mainContent={<Widgets config={widgetsConfig} />}
        detailContent={<Details />}
      />
    </QueryClientProvider>
  )
}

export default App
