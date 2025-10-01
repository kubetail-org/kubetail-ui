import type { Meta } from '@storybook/react-vite';

import { Separator } from '@/elements/separator';

const meta = {
  title: 'Elements/Separator',
  tags: ['autodocs'],
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Separator component.

**Peer Dependencies**

- @radix-ui/react-separator ^1
        `,
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

export function Demo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
