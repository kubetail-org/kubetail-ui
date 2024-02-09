import type { Meta, StoryObj } from '@storybook/react';

import Container from './Container';

const meta = {
  title: 'Elements/Container',
  tags: ['autodocs'],
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default container'
  },
};

export const CustomStyling: Story = {
  args: {
    className: 'bg-gray-300',
    children: 'This is a container with a gray background.'
  },
};
