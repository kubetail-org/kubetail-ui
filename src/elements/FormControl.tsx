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

import { Context as FormGroupContext } from './FormGroup.js';
import FormControlFeedback from './FormControlFeedback.js';

const baseCls = 'flex h-10 w-full rounded border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground ring-offset-background focus:outline-none focus:border-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  as?: React.ElementType;
  id?: string;
}

const FormControl = forwardRef((
  {
    as = 'input',
    className,
    id,
    ...props
  }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const Tag = as;
  const { controlId } = useContext(FormGroupContext);

  return (
    <Tag
      {...props}
      ref={ref}
      id={id || controlId}
      className={cn(baseCls, className)}
    />
  );
});

FormControl.displayName = 'FormControl';

type FormControlType = typeof FormControl;

interface FormControlExportType extends FormControlType {
  Feedback: typeof FormControlFeedback;
}

const FormControlExport: FormControlExportType = Object.assign(
  FormControl,
  {
    Feedback: FormControlFeedback,
  },
);

export default FormControlExport;
