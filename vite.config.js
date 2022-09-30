/* eslint-disable implicit-arrow-linebreak */
import { defineConfig } from 'vite';
import pluginHtml from '@web/rollup-plugin-html';

/**
 * https://vitejs.dev/config/
 * https://vite-rollup-plugins.patak.dev/
 */

export default defineConfig({
  build: {
    target: ['edge18'],
    outDir: 'dev',
    rollupOptions: {
      input: 'demo/*.html',
      output: {
        dir: 'dev/',
        format: 'es',
      },
      plugins: [
        pluginHtml(),
      ],
    },
  },
});
