import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, type ButtonVariantProps } from "./button";

const meta = {
  title: "Elements/Button",
  tags: ["autodocs"],
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const ButtonTemplate: Story = {
  render: ({ ...args }) => {
    const text = 'Button';
    return (
      <table>
        <thead>
          <tr>
            <th className="text-left pr-3">size</th>
            <th className="text-left">{'<button>'}</th>
            <th className="text-left">disabled</th>
          </tr>
        </thead>
        <tbody>
          {(['sm', 'md', 'lg', 'xl'] as ButtonVariantProps['size'][]).map((size) => (
            <tr key={size}>
              <td className="pr-3 pb-3">{size}</td>
              <td className="pr-3 pb-3"><Button {...args} size={size}>{text}</Button></td>
              <td className="pr-3 pb-3"><Button {...args} size={size} disabled>{text}</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export const Default: Story = {
  ...ButtonTemplate,
};


export const Primary: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'primary',
  },
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
