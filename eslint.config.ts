import path from 'path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import { rules as prettierConfigRules } from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

const jsConfig = [
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  plugins.stylistic,
  plugins.importX,
  ...configs.base.recommended,
];

const reactConfig = [plugins.react, plugins.reactHooks, plugins.reactA11y, ...configs.react.recommended];

const typescriptConfig = [plugins.typescriptEslint, ...configs.base.typescript, ...configs.react.typescript];

const prettierConfig = [
  // Prettier Plugin
  {
    name: 'prettier/plugin/config',
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: 'prettier/config',
    rules: {
      ...prettierConfigRules,
      'prettier/prettier': 'error',
    },
  },
];

const customRulesConfig = [
  {
    name: 'custom/rules',
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/extensions': 'off',
      'import-x/no-rename-default': 'off',
      'import-x/no-unresolved': 'off',
      'import-x/prefer-default-export': 'off',
      'react/function-component-definition': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': ['error', { singleQuote: true, printWidth: 120 }],
    },
  },
];

export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['.storybook/**/*'],
  },
  ...jsConfig,
  ...reactConfig,
  ...typescriptConfig,
  ...prettierConfig,
  ...customRulesConfig,
];
