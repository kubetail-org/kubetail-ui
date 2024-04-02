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

import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

const baseCN = 'container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-4';

type Props = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
};

const Container = ({ as = 'div', children, className }: Props) => {
  const Tag = as;

  return (
    <Tag className={cn(baseCN, className)}>
      {children}
    </Tag>
  );
};

export default Container;
