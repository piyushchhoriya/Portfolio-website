import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react'; // Import react plugin

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-website/', // Adjust this to your GitHub repository name
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
