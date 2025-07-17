import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "appearance-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all ring-0 ring-transparent ring-offset-2 active:ring-2 active:ring-border-focusRing disabled:pointer-events-none disabled:bg-bg-disabled disabled:text-text-disabled disabled:shadow-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          'bg-bg-primary text-text-on-color shadow-sm-strong hover:bg-bg-primary-hover active:bg-bg-primary-active',
        secondary: 'bg-bg-secondary text-text shadow-sm hover:bg-bg-secondary-hover',
        outline: 'border border-border-input bg-bg shadow-sm hover:bg-bg-elevated disabled:bg-bg',
        ghost: 'hover:bg-bg-elevated active:bg-bg disabled:bg-bg',
        destructive:
          'bg-bg-error-strong text-white shadow-sm hover:bg-bg-error-strong-hover active:bg-bg-error-strong-active',
        link: 'text-primary underline-offset-4 hover:underline disabled:bg-bg',
      },
      size: {
        md: 'h-[40px] px-4 py-2 has-[>svg]:px-3',
        sm: 'h-[36px] rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-[44px] rounded-md px-6 has-[>svg]:px-4',
        xl: 'h-[48px] rounded-md px-8 has-[>svg]:px-6',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  ButtonVariantProps & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
