import { CircleAlert, Info, Terminal, TriangleAlert } from 'lucide-react';
import type { Meta } from '@storybook/react-vite';

import { Alert, AlertTitle, AlertDescription, AlertAction } from '@/elements/alert';
import { Button } from '@/elements/button';

const meta = {
  title: 'Elements/Alert',
  tags: ['autodocs'],
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Displays a callout for important information, warnings, or errors.',
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

export function Default() {
  return (
    <Alert>
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  );
}

export function Destructive() {
  return (
    <Alert variant="destructive">
      <CircleAlert />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  );
}

export function WithAction() {
  return (
    <Alert>
      <Info />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>A new version is available. Update now to get the latest features.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">
          Update
        </Button>
      </AlertAction>
    </Alert>
  );
}

export function TitleOnly() {
  return (
    <Alert>
      <TriangleAlert />
      <AlertTitle>Warning: This action cannot be undone.</AlertTitle>
    </Alert>
  );
}

export function Demo() {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
      <Alert>
        <Info />
        <AlertTitle>Update available</AlertTitle>
        <AlertDescription>A new version is available. Update now to get the latest features.</AlertDescription>
        <AlertAction>
          <Button variant="outline" size="sm">
            Update
          </Button>
        </AlertAction>
      </Alert>
    </div>
  );
}
