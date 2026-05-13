import type { Meta } from '@storybook/react-vite';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/elements/input-group';

const meta = {
  title: 'Elements/InputGroup',
  tags: ['autodocs'],
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component: `
A composable InputGroup component for combining inputs with addons, buttons, and labels.
        `,
      },
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;

export function Default() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Enter text..." />
    </InputGroup>
  );
}

export function WithInlineAddons() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Copy</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

export function WithBlockAddons() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupTextarea placeholder="Write a message..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton>Send</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

export function Disabled() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Disabled" disabled />
    </InputGroup>
  );
}
