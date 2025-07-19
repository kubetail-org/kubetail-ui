import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './input';

const meta = {
  title: 'Elements/Input',
  tags: ['autodocs'],
  component: Input,
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
