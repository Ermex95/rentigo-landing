import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    base: '/rentigo-landing/', // Fondamentale: deve corrispondere al nome del tuo repository
    define: {
      // FIX CRITICO: Impedisce il crash "process is not defined" nel browser
      'process.env': {}, 
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
