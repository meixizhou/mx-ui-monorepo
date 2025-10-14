const { radixThemePreset } = require('./tailwind.preset.cjs');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  presets: [radixThemePreset]
};

module.exports = config;
