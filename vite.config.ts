import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    server: {
      port: 3000,
      open: true,
    },
    plugins: [react()],
    resolve: {
      alias: {
        src: '/src',
        components: '/src/components',
        '@': resolve(__dirname, 'src'),
      },
    },
    base: '/',
  };
  if (command !== 'serve') {
    config.base = '/';
  }
  return config;
});