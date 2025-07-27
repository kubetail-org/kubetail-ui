/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Calendar } from '@/elements/calendar';

const meta = {
  title: 'Elements/Calendar',
  tags: ['autodocs'],
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Calendar component.

**Peer Dependencies**

- react-day-picker (also requires import of 'react-day-picker/style.css')
        `,
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border border-border" />;
  },
};
