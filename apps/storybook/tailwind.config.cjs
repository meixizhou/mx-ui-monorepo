const { radixThemePreset } = require('../../packages/ui/tailwind.preset.cjs');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  presets: [radixThemePreset]
};

module.exports = config;
