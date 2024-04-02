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

import { createContext, forwardRef, useMemo } from 'react';

import { cn } from '@/lib/utils';

type ContextState = {
  controlId: string | undefined,
};

const Context = createContext({} as ContextState); // for passing `controlId`
const baseCls = 'space-y-1';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  controlId?: string;
}

const FormGroup = forwardRef((
  {
    className,
    controlId,
    ...props
  }: Props,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const context = useMemo(() => ({ controlId }), [controlId]);

  return (
    <Context.Provider value={context}>
      <div
        {...props}
        ref={ref}
        className={cn(baseCls, className)}
      />
    </Context.Provider>
  );
});

FormGroup.displayName = 'FormGroup';

export { Context };
export default FormGroup;
