import type { Meta } from '@storybook/react-vite';

import { Skeleton } from '@/elements/skeleton';

const meta = {
  title: 'Elements/Skeleton',
  tags: ['autodocs'],
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Skeleton component.
        `,
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

export function Demo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
