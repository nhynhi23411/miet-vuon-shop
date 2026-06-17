import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: khi build để deploy lên GitHub Pages, site nằm ở /mietvuon-web/.
// Khi chạy dev (localhost) vẫn dùng '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/mietvuon-web/' : '/',
  server: {
    port: 5173,
    open: true,
  },
}))
