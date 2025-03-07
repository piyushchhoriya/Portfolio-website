import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-website/', // Add this line to set the base URL for GitHub Pages
  build: {
    // Increase the chunk size warning limit (in KB)
    chunkSizeWarningLimit: 1000, // Adjust as per your requirement
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Optional: Customize how chunks are split
          if (id.includes('node_modules')) {
            return 'vendor'; // Create a vendor chunk for third-party libraries
          }
        },
      },
    },
  },
});
