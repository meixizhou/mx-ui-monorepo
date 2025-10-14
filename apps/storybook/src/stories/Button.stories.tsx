import type { Meta, StoryObj } from '@storybook/react';
import { ButtonShowcase } from '../components/ButtonShowcase';

const meta: Meta<typeof ButtonShowcase> = {
  title: 'Primitives/Button',
  component: ButtonShowcase,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Radix Action',
    variant: 'primary',
    size: 'md'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
};

export const Large: Story = {
  args: {
    size: 'lg'
  }
};
