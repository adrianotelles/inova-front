import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@public": path.resolve(__dirname, "public"),
      "@routes": path.resolve(__dirname, "src/router"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@config": path.resolve(__dirname, "src/config"),
      "@services": path.resolve(__dirname, "src/services"),
      "@environments": path.resolve(__dirname, "src/environments"),
      "@context": path.resolve(__dirname, "src/context"),
      "@providers": path.resolve(__dirname, "src/providers"),
    }
  }
})
