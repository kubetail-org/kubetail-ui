import type { Preview } from '@storybook/react'
import * as colors from 'tailwindcss/colors'

import '../tailwind.css'

import { withThemeByClassName } from '@storybook/addon-themes'

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
  },

  decorators: [
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
