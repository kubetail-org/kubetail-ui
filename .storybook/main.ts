import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
    '@vueless/storybook-dark-mode'
  ],

  framework: "@storybook/react-vite",

  core: {
    builder: '@storybook/builder-vite',
  }
};
export default config;
