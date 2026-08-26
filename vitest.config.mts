import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}'],
    // Node >=22 exposes a native global `localStorage`, which (with no
    // --localstorage-file configured) is a non-functional stub that shadows
    // jsdom's own working implementation. Disable it so tests see jsdom's
    // Storage, matching real browsers where storage.ts actually runs.
    execArgv: ['--no-experimental-webstorage'],
  },
});
