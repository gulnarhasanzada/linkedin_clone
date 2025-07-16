import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from "vite-tsconfig-paths"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths(),
    federation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginForm': './src/App.tsx',
        './AuthProvider': './src/context/AuthProvider.tsx'
      },
      shared: ['react', 'react-dom'],
    })
  ],
   build: {
    target: 'esnext',        
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,  
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'esm',
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 4174,
    cors: true,
    hmr: {
      host: 'localhost',
      port: 5002
    },
    watch: {
      usePolling: true, // Important for Docker
      interval: 300
    }
  },

  preview: {
    host: '0.0.0.0',
    port: 4174,
    cors: true
  }
})
