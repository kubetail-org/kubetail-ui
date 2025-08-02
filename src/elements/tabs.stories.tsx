import type { Meta } from '@storybook/react-vite';

import { Button } from '@/elements/button';
import { Input } from '@/elements/input';
import { Label } from '@/elements/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/elements/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/elements/card';

const meta = {
  title: 'Elements/Tabs',
  tags: ['autodocs'],
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Tabs component.

**Peer Dependencies**

- @radix-ui/react-tabs
        `,
      },
      source: {
        type: 'dynamic', // global, but explicit here for clarity
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

// CSF2 named function export — Docs will show the full function body
export function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Make changes to your account here. Click save when you&apos;re done.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password here. After saving, you&apos;ll be logged out.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
