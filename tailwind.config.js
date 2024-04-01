import kubetailUIPlugin from './src/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  plugins: [
    kubetailUIPlugin
  ]
};
