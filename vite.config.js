import { defineConfig } from 'vite';
import { syncAssets } from './scripts/sync-assets.js';

function syncAssetsPlugin() {
  return {
    name: 'vite-plugin-sync-assets',
    buildStart() {
      syncAssets();
    },
  };
}

export default defineConfig({
  root: '.',
  plugins: [syncAssetsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html',
        product: 'product.html',
        about: 'about.html',
        contact: 'contact.html',
        quality: 'quality.html',
        solutions: 'solutions.html',
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: false,
  },
});

