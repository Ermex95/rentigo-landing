import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    base: './', // Fondamentale per GitHub Pages
    define: {
      // FIX CRITICO: Impedisce il crash "process is not defined" nel browser
      'process.env': {}, 
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
