import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: { hmr: true },
  plugins: [
    svgr({
      include: 'src/**/*.svg',
    }),
    react({
      include: ['src/**/*.tsx', 'src/**/*.ts'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
});
