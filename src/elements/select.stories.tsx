import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/elements/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/elements/select';

const meta = {
  title: 'Elements/Select',
  tags: ['autodocs'],
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Select component.

**Peer Dependencies**

- lucide-react
        `,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
} satisfies Story;

export const Sizes = {
  render: () => (
    <div className="flex items-end gap-3">
      {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
        <Select key={size}>
          <SelectTrigger size={size} className="w-[140px]">
            <SelectValue placeholder={size} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
} satisfies Story;

export const Size: StoryObj<{ size: 'xs' | 'sm' | 'default' | 'lg' }> = {
  args: {
    size: 'default',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg'],
    },
  },
  render: ({ size }: { size: 'xs' | 'sm' | 'default' | 'lg' }) => (
    <Select>
      <SelectTrigger size={size} className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const AsChild = {
  render: () => (
    <Select>
      <SelectTrigger render={<Button />}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
} satisfies Story;
