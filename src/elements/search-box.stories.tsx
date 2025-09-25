import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchBox } from '@/elements/search-box';

const meta = {
  title: 'Elements/SearchBox',
  tags: ['autodocs'],
  component: SearchBox,
  parameters: {
    docs: {
      description: {
        component: `
A reusable SearchBox component.
        `,
      },
    },
  },
  args: {
    defaultValue: '',
    disabled: false,
    placeholder: 'Search...',
  },
  argTypes: {
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof SearchBox>;

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
