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

import { forwardRef, useContext } from 'react';

import { cn } from '@/lib/utils';

import { Context as FormGroupContext } from './FormGroup';

const baseCls =
  'mt-1 block w-full h-10 rounded bg-background border border-input py-2 pl-3 pr-10 text-sm ring-offset-background focus:outline-none focus:border-input focus:ring-1 focus:ring-ring focus:ring-offset-0 disabled:opacity-50';

interface Props extends React.ComponentPropsWithoutRef<'select'> {
  id?: string;
}

const FormSelect = forwardRef(({ className, id, ...props }: Props, ref: React.ForwardedRef<HTMLSelectElement>) => {
  const { controlId } = useContext(FormGroupContext);

  return <select {...props} ref={ref} id={id || controlId} className={cn(baseCls, className)} />;
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;
