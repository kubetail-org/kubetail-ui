// Calendar.stories.tsx
import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';

import { Calendar } from '@/elements/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Elements/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A reusable Calendar component.

**Peer Dependencies**

- react-day-picker (also requires import of 'react-day-picker/style.css')
        `,
      },
      source: {
        type: 'dynamic', // extract whole function
      },
    },
  },
};
export default meta;

// instead of `export const Default: Story = {...}`, do:
export function Default() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border border-border" />;
}

// optional: give it a nicer name in the UI
Default.storyName = 'Default';
