/// <reference types="vitest" />
import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import autoExternal from 'rollup-plugin-auto-external';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
// @ts-ignore
import dts from 'unplugin-dts/vite';
import Unfonts from 'unplugin-fonts/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Unfonts({
      fontsource: {
        families: [
          {
            name: 'Roboto-Flex',
            variable: true,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    cssMinify: false,
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        ...glob.sync(resolve(__dirname, 'src/elements/**/*.tsx'), {
          ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
        }),
      ],
      name: 'kubetail-ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      plugins: [
        dts({ tsconfigPath: './tsconfig.app.json' }),
        autoExternal(),
        copy({
          targets: [
            {
              src: 'src/index.css',
              dest: 'dist',
              rename: 'index.css',
            },
          ],
          // ensure it runs after everything is written
          hook: 'writeBundle',
        }),
      ],
      external: [
        '@heroicons/react/20/solid',
        '@heroicons/react/24/solid',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-popover',
        '@radix-ui/react-slot',
        '@radix-ui/react-tabs',
        '@restart/ui/Button',
        'lucide-react',
        'react',
        'react-day-picker',
        'react-dom',
        'react/jsx-runtime',
        'tailwindcss/colors',
        'tailwindcss/plugin',
      ],
      output: {
        // Preserve the directory structure
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['vitest.setup.ts'],
  },
});
