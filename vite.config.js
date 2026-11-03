import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // fixed, distinct from the other two local test projects
    strictPort: true,
  },
});
