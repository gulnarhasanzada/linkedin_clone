import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/App.tsx'
      },
      shared: ['react', 'react-dom'],
    })
  ],
   build: {
    target: 'esnext',          // <== required for top-level await
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,      // optional: improves compatibility
    rollupOptions: {
      output: {
        format: 'esm',         // <== must output as ES modules
      },
    },
  },
})
