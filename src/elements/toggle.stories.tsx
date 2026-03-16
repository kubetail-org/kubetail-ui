import type { Meta } from '@storybook/react-vite';
import { Bold, Italic, Underline } from 'lucide-react';

import { Toggle } from '@/elements/toggle';

const meta = {
  title: 'Elements/Toggle',
  tags: ['autodocs'],
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: `
A two-state button that can be either on or off.

**Peer Dependencies**

- @radix-ui/react-toggle
        `,
      },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

export function Demo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Toggle aria-label="Toggle bold">
          <Bold />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <Italic />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <Underline />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Toggle variant="outline" aria-label="Toggle bold">
          <Bold />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle underline">
          <Underline />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Toggle size="sm" aria-label="Toggle bold">
          <Bold />
        </Toggle>
        <Toggle size="default" aria-label="Toggle bold">
          <Bold />
        </Toggle>
        <Toggle size="lg" aria-label="Toggle bold">
          <Bold />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Toggle aria-label="Toggle bold" defaultPressed>
          <Bold />
        </Toggle>
        <Toggle aria-label="Toggle bold" disabled>
          <Bold />
        </Toggle>
      </div>
      <div>
        <Toggle aria-label="Toggle italic">
          <Italic />
          Italic
        </Toggle>
      </div>
    </div>
  );
}
