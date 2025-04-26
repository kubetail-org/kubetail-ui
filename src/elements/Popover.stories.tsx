import type { Meta, StoryObj } from '@storybook/react'

import { Popover, PopoverContent, PopoverTrigger } from './Popover'

const meta = {
  title: 'Elements/Popover',
  tags: ['autodocs'],
  component: Popover,
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
}
