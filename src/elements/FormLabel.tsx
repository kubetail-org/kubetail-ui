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

import { forwardRef, useContext } from 'react';

import { cn } from '@/lib/utils';

import { Context as FormGroupContext } from './FormGroup';

const baseCls = 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';

interface Props extends React.ComponentPropsWithoutRef<'label'> {
  as?: React.ElementType;
  htmlFor?: string;
}

const FormLabel = forwardRef((
  {
    as = 'label',
    className,
    htmlFor,
    ...props
  }: Props,
  ref: React.ForwardedRef<HTMLLabelElement>,
) => {
  const Tag = as;
  const { controlId } = useContext(FormGroupContext);

  return (
    <Tag
      {...props}
      ref={ref}
      htmlFor={htmlFor || controlId}
      className={cn(baseCls, className)}
    />
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
