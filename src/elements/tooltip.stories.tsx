import type { Meta } from '@storybook/react-vite';

import { Button } from '@/elements/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/elements/tooltip';

const meta = {
  title: 'Elements/Tooltip',
  tags: ['autodocs'],
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Tooltip component.

        `,
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export function Demo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
