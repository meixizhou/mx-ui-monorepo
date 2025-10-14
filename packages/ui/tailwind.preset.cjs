const plugin = require('tailwindcss/plugin');

const radixThemePreset = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--default-font-family)', 'Inter', 'sans-serif']
      },
      colors: {
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surfaceMuted: 'rgb(var(--color-surface-variant) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        accent: 'rgb(var(--accent-9) / <alpha-value>)',
        accentFg: 'rgb(var(--accent-contrast) / <alpha-value>)',
        success: 'rgb(var(--success-9) / <alpha-value>)',
        warning: 'rgb(var(--warning-9) / <alpha-value>)',
        foreground: 'rgb(var(--color-text) / <alpha-value>)'
      },
      borderRadius: {
        base: 'var(--radius-3)',
        md: 'var(--radius-4)',
        lg: 'var(--radius-5)'
      },
      boxShadow: {
        outline: '0 0 0 2px rgb(var(--accent-9) / 0.35)'
      }
    }
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          color: 'var(--color-text)',
          backgroundColor: 'var(--color-page-background)'
        }
      });
    })
  ]
};

module.exports = { radixThemePreset };
