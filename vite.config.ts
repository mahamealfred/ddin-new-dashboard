import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'moolacore-test.ddin.rw',
    port: 6007,
    strictPort: false,
  },
  preview: {
    host: 'moolacore-test.ddin.rw',
    port: 6007,
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
  