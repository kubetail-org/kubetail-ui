import type { Preview } from "@storybook/react";

import '../tailwind.css';

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    appPreviewBg: {
      default: 'white',
      values: [
        {
          name: 'light',
          value: 'red',
        },
        {
          name: 'dark',
          value: 'blue',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  })]
};

export default preview;
