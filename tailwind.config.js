
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  safelist: [
    'dark'
  ],
  plugins: [
    require('./plugin')
  ]
};
