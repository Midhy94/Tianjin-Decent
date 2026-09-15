import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
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
