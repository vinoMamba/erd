import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxy, parseEnv } from './build'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { mode } = env
  const { VITE_PORT, VITE_PROXY } = parseEnv(mode)
  return {
    server: {
      port: VITE_PORT ?? 3100,
      host: true,
      proxy: createProxy(VITE_PROXY),
    },
    plugins: [react()],
  }
})
