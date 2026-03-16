import type { Meta } from '@storybook/react-vite';

import { Label } from '@/elements/label';
import { Switch } from '@/elements/switch';

const meta = {
  title: 'Elements/Switch',
  tags: ['autodocs'],
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Switch component.

**Peer Dependencies**

- @radix-ui/react-switch
        `,
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

// Named function export so Docs "dynamic" source shows the full body
export function Demo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Enable Notifications</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  );
}
