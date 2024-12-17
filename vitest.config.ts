import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths  from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
  },
})
