import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src/view',
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './src/view/index.html'),
        dialog: path.resolve(__dirname, './src/view/dialog.html')
      }
    },
    outDir: '../main/dist'
  },
  plugins: [vue()]
})
