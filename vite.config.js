import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        products: 'products.html',
        product: 'product.html',
        solutions: 'solutions.html',
        quality: 'quality.html',
        company: 'company.html',
        resources: 'resources.html',
        contact: 'contact.html',
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: '/',
  },
})
