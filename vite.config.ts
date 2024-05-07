/// <reference types="vitest" />
import { resolve } from 'path';

import typescript from '@rollup/plugin-typescript';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import autoExternal from 'rollup-plugin-auto-external';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/plugin.ts'),
        ...glob.sync(resolve(__dirname, 'src/elements/**/*.tsx'), { ignore: ['**/*\.test\.tsx', '**/*\.stories\.tsx'] }),
      ],
      name: 'kubetail-ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      plugins: [
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "dist",
          include: 'src/**/*',
          exclude: [
            'src/**/*.stories.ts',
            'src/**/*.stories.tsx'
          ],
          allowImportingTsExtensions: false // https://github.com/rollup/plugins/discussions/1536
        }),
        autoExternal(),
      ],
      external: [
        '@heroicons/react/20/solid',
        '@heroicons/react/24/solid',
        '@restart/ui/Button',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwindcss/colors',
        'tailwindcss/plugin',
      ],
      output: {
        // Preserve the directory structure
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['vitest.setup.ts'],
  },
});
