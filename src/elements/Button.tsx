// Copyright 2024 Andres Morey
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useButtonProps } from '@restart/ui/Button';
import type { ButtonProps } from '@restart/ui/Button';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  'uppercase inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/60 shadow-sm',
        danger: 'bg-danger text-danger-foreground hover:bg-danger/90 shadow-sm',
        outline: 'border border-input bg-background hover:bg-secondary hover:text-secondary-foreground',
        ghost: 'hover:bg-secondary hover:text-secondary-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        xs: 'px-2.5 py-1.5 text-xs rounded',
        sm: 'px-3 py-2 text-xs rounded-md',
        md: 'px-4 py-2 text-sm rounded-md',
        lg: 'px-4 py-2 text-base rounded-md',
        xl: 'px-6 py-3 text-base rounded-md',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  },
);

const Button = forwardRef((
  {
    as,
    children,
    className,
    disabled,
    ...props
  }: ButtonProps & ButtonVariantProps,
  ref,
) => {
  const [ariaButtonProps, { tagName: Tag }] = useButtonProps({
    tagName: as,
    disabled,
    ...props,
  });

  return (
    <Tag
      {...props}
      {...ariaButtonProps}
      ref={ref}
      className={cn(buttonVariants(props), className)}
    >
      {children}
    </Tag>
  );
});

Button.displayName = 'Button';

export default Button;
