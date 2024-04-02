import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  title: 'Elements/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is an alert message',
  },
};
