import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from '@/elements/textarea';

const meta = {
  title: 'Elements/Textarea',
  tags: ['autodocs'],
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Textarea component.
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
} satisfies Meta<typeof Textarea>;

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
