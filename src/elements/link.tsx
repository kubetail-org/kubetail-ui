import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const linkStyles = cva(
  'inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline transition-colors outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-sm cursor-pointer',
  {
    variants: {
      variant: {
        default: '',
        external: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type LinkVariantProps = VariantProps<typeof linkStyles>;

type LinkComponent = React.ElementType;

let configuredLinkComponent: LinkComponent | null = null;

/**
 * Set a custom component to be used by `RouterLink` (e.g. your router's Link component).
 *
 * @example
 * import { setLinkComponent } from '@kubetail/ui/elements/link';
 * import { Link } from 'react-router-dom';
 * setLinkComponent(Link);
 */
function setLinkComponent(component: LinkComponent) {
  configuredLinkComponent = component;
}

/**
 * Get the currently configured link component.
 */
function getLinkComponent(): LinkComponent | null {
  return configuredLinkComponent;
}

type LinkProps = React.ComponentProps<'a'> &
  LinkVariantProps & {
    asChild?: boolean;
  };

/**
 * `Link` renders a styled anchor element.
 *
 * Supports `asChild` via Radix UI Slot for composition with custom components.
 *
 * @param props.variant - "default" | "external" (adds target="_blank" and rel="noopener noreferrer")
 * @param props.asChild - render as child element via Radix Slot
 */
function Link({ className, variant, asChild = false, ...props }: LinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="link"
      className={cn(linkStyles({ variant, className }))}
      {...(variant === 'external' && !asChild ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    />
  );
}

type RouterLinkProps = Omit<LinkProps, 'asChild'> & Record<string, unknown>;

/**
 * `RouterLink` renders using the component set via `setLinkComponent()`,
 * falling back to a plain `<a>` tag if none has been configured.
 *
 * @example
 * // In your app entry:
 * import { setLinkComponent } from '@kubetail/ui/elements/link';
 * import { Link as RRLink } from 'react-router-dom';
 * setLinkComponent(RRLink);
 *
 * // Then use RouterLink anywhere:
 * <RouterLink to="/dashboard">Dashboard</RouterLink>
 */
function RouterLink({ className, variant, ...props }: RouterLinkProps) {
  const Comp = configuredLinkComponent || 'a';

  return (
    <Comp
      data-slot="link"
      className={cn(linkStyles({ variant, className }))}
      {...(variant === 'external' && Comp === 'a' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    />
  );
}

export { Link, RouterLink, linkStyles, setLinkComponent, getLinkComponent };
