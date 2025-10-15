import path from 'node:path';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  viteFinal: async (config) => {
    const existing = config.resolve?.conditions ?? [];
    const conditions = [
      'storybook',
      ...existing.filter((condition) => condition !== 'storybook')
    ];

    return mergeConfig(config, {
      optimizeDeps: {
        exclude: ['@mx/ui']
      },
      resolve: {
        conditions,
        alias: {
          '@mx/ui': path.resolve(__dirname, '../../../packages/ui/src'),
          '@mx/ui/styles.css': path.resolve(
            __dirname,
            '../../../packages/ui/src/styles.css'
          )
        }
      }
    });
  }
};

export default config;
