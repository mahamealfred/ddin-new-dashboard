import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //host: 'dashboardapi.ddin.rw',
    port: 5173,
    strictPort: false,
  },
  preview: {
   // host: 'dashboardapi.ddin.rw',
    port: 5173,
    strictPort: false,
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
  