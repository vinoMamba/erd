import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
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
    plugins: [
      UnoCSS({
        shortcuts: [
          { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
        ],
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            extraProperties: {
              'display': 'inline-block',
              'vertical-align': 'middle',
            },
          }),
        ],
      }),
      react(),
    ],
  }
})
