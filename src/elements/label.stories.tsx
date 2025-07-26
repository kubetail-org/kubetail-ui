import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@/elements/checkbox';
import { Label } from '@/elements/label';

const meta = {
  title: 'Elements/Label',
  tags: ['autodocs'],
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Label component.

**Peer Dependencies**

- @radix-ui/react-label
        `,
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo = {
  render: () => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  ),
} satisfies Story;
