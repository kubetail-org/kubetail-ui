import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';

import { Input } from '@/elements/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/elements/form';

const FormExample = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Enter text" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

const meta = {
  title: 'Elements/Form',
  tags: ['autodocs'],
  component: FormExample,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Form component.

**Peer Dependencies**

- @radix-ui/react-label
- @radix-ui/react-slot
- react-hook-form
        `,
      },
    },
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo = {
  render: () => <FormExample />,
} satisfies Story;
