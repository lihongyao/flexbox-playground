import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
const resolvePath = (filePath: string) => new URL(filePath, import.meta.url).pathname
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': resolvePath('./src')
      }
    },
    plugins: [react(), tailwindcss()]
  }
});

