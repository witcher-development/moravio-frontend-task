import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@client": path.resolve(__dirname, "./src/client.ts"),
      "@env": path.resolve(__dirname, "./src/env.ts"),
    }
  },
})
