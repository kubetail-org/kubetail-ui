import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/elements/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/elements/dropdown-menu';

const meta = {
  title: 'Elements/Dropdown Menu',
  tags: ['autodocs'],
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Dropdown Menu component.

**Peer Dependencies**

- @radix-ui/react-dropdown-menu ^1
        `,
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

type Checked = DropdownMenuCheckboxItemProps['checked'];

const CheckboxesExample = () => {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar} disabled>
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Checkboxes = {
  render: () => <CheckboxesExample />,
} satisfies Story;

const RadioGroupExample = () => {
  const [position, setPosition] = useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const RadioGroup = {
  render: () => <RadioGroupExample />,
} satisfies Story;
