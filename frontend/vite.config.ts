import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/management-app/',
  plugins: [react()],
  server: {
    open: true,
    hmr: true,
  }
})
