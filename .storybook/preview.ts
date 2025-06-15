import type { Preview } from "@storybook/react-vite";
import colors from 'tailwindcss/colors';

import '../tailwind.css';
import 'unfonts.css';

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'light',
          value: colors.white,
        },
        {
          name: 'dark',
          value: colors.neutral[800],
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduction',
          'Design System',
          [
            'Introduction',
            'Typography'
          ],
          'Elements',
          [
            'Introduction',
            'Button',
          ],
        ],
        locales: 'en-US',
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
