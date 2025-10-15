import { ButtonShowcase, type ButtonShowcaseProps } from '../components/ButtonShowcase';

type StoryArgs = {
  label?: string;
  variant?: 'primary' | 'outline';
  size?: ButtonShowcaseProps['size'];
};

const meta = {
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
} satisfies {
  title: string;
  component: typeof ButtonShowcase;
  parameters?: Record<string, unknown>;
  args?: StoryArgs;
};

export default meta;

type Story = {
  args?: StoryArgs;
};

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
