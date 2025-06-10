import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import Button from './Button';

const meta = {
    title: 'Elements/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: Story['args'] = {
    className: 'max-w-lg',
    placeholder: 'Input placeholder',
};

export const Default: Story = {
    args: {
        ...defaultArgs,
    },
};

export const File: Story = {
    args: {
        ...defaultArgs,
        type: 'file',
    },
};

export const Disabled: Story = {
    args: {
        ...defaultArgs,
        disabled: true,
    },
};

export const WithButton: Story = {
    render: (args) => (
      <div className="flex gap-2">
        <Input {...args} placeholder="Email" />
        <Button>Subscribe</Button>
      </div>
),
    args: {
        ...defaultArgs,
    },
};

// TODO: Add WithLabel, Form cases,
