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

import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const wrapperBaseCls = 'flex items-center';
const inputBaseCls = 'h-4 w-4 text-primary-600 rounded border-input bg-background ring-offset-background focus:outline-none focus:border-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50';
const labelBaseCls = 'ml-2 block text-sm text-chrome-900';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  as?: React.ElementType;
  id?: string;
  label?: React.ReactNode;
}

const FormCheck = forwardRef((
  {
    as = 'input',
    className,
    id,
    label,
    ...props
  }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const Tag = as;

  return (
    <div className={cn(wrapperBaseCls, className)}>
      <Tag
        {...props}
        ref={ref}
        id={id}
        type="checkbox"
        className={inputBaseCls}
      />
      {label && (
        <label htmlFor={id} className={labelBaseCls}>
          {label}
        </label>
      )}
    </div>
  );
});

FormCheck.displayName = 'FormCheck';

export default FormCheck;
