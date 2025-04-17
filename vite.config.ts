import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path';
// https://vite.dev/config/

export default defineConfig(() => {
  // -- 获取当前工作目录路径
  const root = process.cwd();
  const pathResolve = (path: string) => resolve(root, '.', path);
  return {
    resolve: {
      alias: {
        '@': pathResolve('./src')
      }
    },
    base: '/flexbox-playground/',
    server: {
      host: '0.0.0.0'
    },
    plugins: [react(), tailwindcss()]
  }
});

