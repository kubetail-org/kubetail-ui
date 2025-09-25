import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '@/elements/input';

const meta = {
  title: 'Elements/Input',
  tags: ['autodocs'],
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Input component.
        `,
      },
    },
  },
  args: {
    defaultValue: '',
    disabled: false,
    placeholder: 'Enter text here...',
  },
  argTypes: {
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    defaultValue: 'Example text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
