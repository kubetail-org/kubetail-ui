import type { Meta, StoryObj } from '@storybook/react'

import FormCheck from './FormCheck'

const meta = {
  title: 'Elements/FormCheck',
  tags: ['autodocs'],
  component: FormCheck,
  args: {
    label: 'My Label',
  },
} satisfies Meta<typeof FormCheck>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
