import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import type { ButtonVariantProps } from './Button'

const meta = {
  title: 'Elements/Button',
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const ButtonTemplate: Story = {
  render: ({ ...args }) => {
    const text = 'Button'
    return (
      <table>
        <thead>
          <th className="text-left pr-3">size</th>
          <th className="text-left">{'<button>'}</th>
          <th className="text-left">as=&quot;a&quot;</th>
          <th className="text-left">disabled</th>
        </thead>
        <tbody>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as ButtonVariantProps['size'][]).map((size) => (
            <tr key={size}>
              <td className="pr-3">{size}</td>
              <td className="pr-2">
                <Button {...args} size={size}>
                  {text}
                </Button>
              </td>
              <td className="pr-2">
                <Button {...args} size={size} as="a">
                  {text}
                </Button>
              </td>
              <td className="pr-2">
                <Button {...args} size={size} disabled>
                  {text}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}

export const Primary: Story = {
  ...ButtonTemplate,
}

export const Secondary: Story = {
  ...ButtonTemplate,
  args: {
    intent: 'secondary',
  },
}

export const Danger: Story = {
  ...ButtonTemplate,
  args: {
    intent: 'danger',
  },
}

export const Outline: Story = {
  ...ButtonTemplate,
  args: {
    intent: 'outline',
  },
}

export const Ghost: Story = {
  ...ButtonTemplate,
  args: {
    intent: 'ghost',
  },
}

export const Link: Story = {
  ...ButtonTemplate,
  args: {
    intent: 'link',
  },
}
