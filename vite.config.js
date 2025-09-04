import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true,
  },
  build: {
    outDir: 'dist/react',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          shopify: ['@shopify/polaris', '@shopify/app-bridge'],
          animation: ['framer-motion', 'three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
    },
  },
}) 