/// <reference types="vitest" />
import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import autoExternal from 'rollup-plugin-auto-external';
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
          {
            name: 'Inter',
            variable: true,
          },
          {
            name: 'Ubuntu-Sans-Mono',
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
        resolve(__dirname, 'src/index.css'),
        ...glob.sync(resolve(__dirname, 'src/elements/**/*.tsx'), {
          ignore: ['**/*.test.tsx', '**/*.stories.tsx'],
        }),
      ],
      name: 'kubetail-ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      plugins: [dts({ tsconfigPath: './tsconfig.app.json' }), autoExternal()],
      external: ['@radix-ui/react-slot', 'react', 'react-dom', 'react/jsx-runtime'],
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
