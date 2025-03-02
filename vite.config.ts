import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-app/', // 👈 Set this to your GitHub repo name
  plugins: [react()],
});
