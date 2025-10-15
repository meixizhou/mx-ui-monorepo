import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'path'; // ✅ 正确引入 path 模块

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
  viteFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        '@mx/ui': path.resolve(__dirname, '../../../packages/ui/src'),
        '@mx/ui/styles.css': path.resolve(__dirname, '../../../packages/ui/src/styles.css')
      }
    }
  })
};

export default config;
