import { forwardRef } from 'react';
import type React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingStyles = cva('font-semibold', {
  variants: {
    size: {
      '9xl': 'text-[8rem] leading-[12rem]',
      '8xl': 'text-[6rem] leading-[9rem]',
      '7xl': 'text-[4.5rem] leading-[6.75rem]',
      '6xl': 'text-[3.75rem] leading-[5.375rem]',
      '5xl': 'text-[3rem] leading-[4.5rem]',
      '4xl': 'text-[2.25rem] leading-[3.25rem]',
      '3xl': 'text-[1.875rem] leading-[2.625rem]',
      '2xl': 'text-[1.5rem] leading-[2.375rem]',
      xl: 'text-[1.25rem] leading-[2rem]',
      lg: 'text-[1.125rem] leading-[1.875rem]',
      md: 'text-[1rem] leading-[1.5rem]',
      sm: 'text-[0.875rem] leading-[1.25rem]',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'semibold',
  },
});

type SizeVariant = NonNullable<VariantProps<typeof headingStyles>['size']>;

// Map a reasonable default HTML tag for each size token.
const defaultTagBySize: Record<SizeVariant, React.ElementType> = {
  '9xl': 'h1',
  '8xl': 'h2',
  '7xl': 'h3',
  '6xl': 'h4',
  '5xl': 'h5',
  '4xl': 'h6',
  '3xl': 'div',
  '2xl': 'div',
  xl: 'div',
  lg: 'div',
  md: 'div',
  sm: 'div',
};

export type HeadingProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof headingStyles> & {
    /**
     * Custom element to render. Accepts any valid JSX intrinsic tag name.
     * If omitted, component chooses an appropriate tag based on `size`.
     */
    as?: React.ElementType;
  };

export const Heading = forwardRef<React.ElementType, HeadingProps>(
  ({ as, size, weight, className, children, ...rest }, ref) => {
    const Component = as ?? defaultTagBySize[(size ?? 'md') as SizeVariant];
    return (
      <Component {...rest} ref={ref} className={cn(headingStyles({ size, weight }), className)}>
        {children}
      </Component>
    );
  },
);

Heading.displayName = 'Heading';
