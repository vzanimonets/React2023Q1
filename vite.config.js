/// <reference types='vitest'/>
/// <reference types='vite/client'/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      include: ['src/**/*'],
      exclude: [
        'src/**/*d.ts',
        'src/**/*.test.*',
        'src/**/**interface.ts',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
      ],
    },
  },
});
