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

import { forwardRef, ComponentProps } from 'react';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, type, ...props }, ref) => (
  <input
    {...props}
    type={type}
    ref={ref}
    className={cn(
      'w-full rounded-md focus-visible:ring-ring shadow-sm focus-visible:outline-0 border border-border/80 file:border-0 file:focus:ring-1 file:focus:ring-ring file:h-10 file:text-muted-foreground file:focus:outline-none file:focus:ring-0 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground text-muted-foreground disabled:opacity-50 disabled:border-border/70 disabled:cursor-not-allowed text-foreground file:text-sm file:font-medium px-3',
      className,
    )}
  />
));
Input.displayName = 'Input';

export { Input };
