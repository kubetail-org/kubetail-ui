import type { Preview } from "@storybook/react-vite";
import colors from 'tailwindcss/colors';

import '../tailwind.css';
import 'unfonts.css';

import { withThemeByClassName } from "@storybook/addon-themes";


const preview: Preview = {
  parameters: {
    // 📘 Enable dynamic source extraction for all stories:
    docs: {
      source: {
        type: 'dynamic',
      },
    },

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
            'Colors',
            'Typography',
            'Styles',
          ],
          'Elements',
          [
            'Overview',
            'Button',
            'Calendar',
            'Card',
            'Checkbox',
            'Dropdown Menu',
            'Form',
            'Input',
            'Label',
            'Popover',
            'Select',
            'Spinner',
            'Table',
            'Tabs',
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
