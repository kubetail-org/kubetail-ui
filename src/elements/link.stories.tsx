import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExternalLinkIcon } from 'lucide-react';

import { Link } from '@/elements/link';

const meta = {
  title: 'Elements/Link',
  tags: ['autodocs'],
  component: Link,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Link component with multiple abstraction levels:

- **\`linkStyles\`** — low-level cva style string for custom usage
- **\`Link\`** — styled \`<a>\` element with \`asChild\` support
- **\`RouterLink\`** — uses the component configured via \`setLinkComponent()\`

Variants: \`default\` and \`external\` (adds \`target="_blank"\`). Override color via \`className\` (e.g. \`className="text-destructive"\`).

**Peer Dependencies**

- @radix-ui/react-slot ^1

## Using \`linkStyles\`

Use the low-level \`linkStyles\` function to get just the class string without rendering a component:

\`\`\`tsx
import { linkStyles } from '@kubetail/ui/elements/link';

// Use in any element
<span className={linkStyles()}>Styled as a link</span>
<span className={linkStyles({ variant: 'external' })}>External style</span>
<span className={linkStyles({ className: 'text-destructive' })}>Custom color</span>
\`\`\`

## Using \`Link\`

A styled \`<a>\` element that supports variants and \`asChild\` for composition:

\`\`\`tsx
import { Link } from '@kubetail/ui/elements/link';

<Link href="/dashboard">Dashboard</Link>
<Link href="https://example.com" variant="external">Opens in new tab</Link>
<Link href="/delete" className="text-destructive">Delete</Link>

// Compose with another element via asChild
<Link asChild>
  <span>Styled as a link</span>
</Link>
\`\`\`

## Using \`RouterLink\`

Configure your router's link component once at the app entry point, then use \`RouterLink\` everywhere:

\`\`\`tsx
// app entry (e.g. main.tsx)
import { setLinkComponent } from '@kubetail/ui/elements/link';
import { Link } from 'react-router-dom';
setLinkComponent(Link);

// then in any component
import { RouterLink } from '@kubetail/ui/elements/link';
<RouterLink to="/dashboard">Dashboard</RouterLink>
<RouterLink to="/settings" variant="external">Docs</RouterLink>
\`\`\`

If no component is configured, \`RouterLink\` falls back to a plain \`<a>\` tag.
        `,
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/example',
    children: 'Default link',
  },
};

export const External: Story = {
  render: () => (
    <Link variant="external" href="https://example.com">
      External link <ExternalLinkIcon className="size-3" />
    </Link>
  ),
};

export const CustomColor: Story = {
  args: {
    href: '/example',
    className: 'text-destructive',
    children: 'Danger-colored link',
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="/styled-span">I&apos;m composed via asChild</a>,
  },
};
