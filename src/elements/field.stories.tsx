import type { Meta } from '@storybook/react-vite';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/elements/field';
import { Input } from '@/elements/input';

const meta = {
  title: 'Elements/Field',
  tags: ['autodocs'],
  component: Field,
  parameters: {
    docs: {
      description: {
        component: `
A composable Field component for building accessible form layouts.
        `,
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

export function Demo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="demo-name">Name</FieldLabel>
        <Input id="demo-name" placeholder="Ada Lovelace" />
        <FieldDescription>The name displayed on your profile.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="demo-email">Email</FieldLabel>
        <Input id="demo-email" type="email" placeholder="m@example.com" aria-invalid />
        <FieldError>Please enter a valid email address.</FieldError>
      </Field>
    </FieldGroup>
  );
}

export function WithFieldSet() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Profile</FieldLegend>
      <FieldDescription>Tell us a bit about yourself.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fs-username">Username</FieldLabel>
          <Input id="fs-username" placeholder="ada" />
        </Field>
        <FieldSeparator>or</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="fs-email">Email</FieldLabel>
          <Input id="fs-email" type="email" placeholder="m@example.com" />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

export function Horizontal() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldTitle>Notifications</FieldTitle>
        <FieldDescription>Receive emails about activity.</FieldDescription>
      </FieldContent>
      <Input type="checkbox" className="size-4" defaultChecked />
    </Field>
  );
}
