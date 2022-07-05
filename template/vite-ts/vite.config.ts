import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: "components", replacement: path.resolve(__dirname, './src/components') },
      { find: "pages", replacement: path.resolve(__dirname, './src/pages') },
      { find: "hooks", replacement: path.resolve(__dirname, './src/hooks') },
      { find: "types", replacement: path.resolve(__dirname, './src/types') },
      { find: "utils", replacement: path.resolve(__dirname, './src/utils') },
      { find: "stores", replacement: path.resolve(__dirname, './src/stores') },
      { find: "client", replacement: path.resolve(__dirname, './src/client') },
      { find: "service", replacement: path.resolve(__dirname, './src/service') },
    ]
  },
})
