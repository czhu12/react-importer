/// <reference types="vitest" />
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), preact(), dts()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {}
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactImporter',
      formats: ['umd', 'cjs', 'es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        globals: {
          // Add any external dependencies here if needed
        },
      },
    },
    outDir: 'dist',
    minify: false,
    sourcemap: true,
  },
});
