import type { Meta, StoryObj } from '@storybook/react-vite';
import { AtomIcon } from 'lucide-react';

import { Button, type ButtonVariantProps } from '@/elements/button';

const meta = {
  title: 'Elements/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Button component.

**Peer Dependencies**

- @radix-ui/react-slot ^1
        `,
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const ButtonTemplate: Story = {
  render: ({ ...args }) => {
    const children = args.children ? args.children : 'Button';
    return (
      <table>
        <thead>
          <tr>
            <th className="text-left pr-3">size</th>
            <th className="text-left">default</th>
            <th className="text-left">disabled</th>
          </tr>
        </thead>
        <tbody>
          {(['default', 'sm', 'lg'] as ButtonVariantProps['size'][]).map((size) => (
            <tr key={size}>
              <td className="pr-3 pb-3">{size}</td>
              <td className="pr-3 pb-3">
                <Button {...args} size={size}>
                  {children}
                </Button>
              </td>
              <td className="pr-3 pb-3">
                <Button {...args} size={size} disabled>
                  {children}
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="pr-3 pb-3">icon</td>
            <td className="pr-3 pb-3">
              <Button {...args} size="icon">
                <AtomIcon />
              </Button>
            </td>
            <td className="pr-3 pb-3">
              <Button {...args} size="icon" disabled>
                <AtomIcon />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  },
};

export const Default: Story = {
  ...ButtonTemplate,
};

export const Secondary: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'ghost',
  },
};

export const Destructive: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'destructive',
  },
};

export const Link: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'link',
  },
};

export const Icon: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'default',
    size: 'icon',
    children: <AtomIcon />,
  },
};

export const LeadingIcon: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'default',
    size: 'icon',
    children: (
      <>
        <AtomIcon /> Button
      </>
    ),
  },
};

export const TrailingIcon: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'default',
    size: 'sm',
    children: (
      <>
        Button <AtomIcon />
      </>
    ),
  },
};
