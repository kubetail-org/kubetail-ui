import * as colors from 'tailwindcss/colors';
import '../tailwind.css';

export const parameters = {
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
    ]
  },
  darkMode: {
    darkClass: 'dark',
    classTarget: 'html',
    stylePreview: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}