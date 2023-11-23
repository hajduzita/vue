import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    server: {
        proxy: {
            //'/api': 'https://dsp-health-upscale-api-upscale.azure-api.net'
            '/api': 'https://devinternetbank.otpbank.hu'
        }
    }
})
