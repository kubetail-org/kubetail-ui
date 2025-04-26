// Copyright 2024-2025 Andres Morey
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

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-yellow-600 dark:text-yellow-400 [&>svg]:text-yellow-600 [&>svg]:dark:text-yellow-400 border-yellow-400',
        destructive:
          'border-danger/50 text-danger dark:border-danger [&>svg]:text-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface AlertAttributes
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

/**
 * A wrapper component for alert content,
 * typically used with `AlertTitle` and `AlertDescription`.
 */
const AlertContent = React.forwardRef<
  HTMLDivElement,
  AlertAttributes
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
AlertContent.displayName = 'AlertContent';

/**
 * UI Component for displaying alert title
 * used inside `AlertContent`
 */
const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  >
    {children}
  </h5>
));
AlertTitle.displayName = 'AlertTitle';

/**
 * UI Component for displaying description text about the alert
 * used inside `AlertContent`
 */
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

const Alert = ({ children, ...props }: AlertAttributes) => (
  <AlertContent {...props}>
    <ExclamationCircleIcon className="size-5 h-5 w-5" aria-hidden="true" />
    <AlertTitle>Attention</AlertTitle>
    <AlertDescription>{children}</AlertDescription>
  </AlertContent>
);

export default Alert;
