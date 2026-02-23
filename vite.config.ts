import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'dashboardapi.ddin.rw',
    port: 6000,
    strictPort: true,
  },
  preview: {
    host: 'dashboardapi.ddin.rw',
    port: 6000,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 50000,
  },

})
  