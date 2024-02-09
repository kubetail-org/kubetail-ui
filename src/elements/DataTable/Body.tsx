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

import React from 'react';

import { cn } from '@/lib/utils';

const baseCls = 'divide-y divide-gray-200 bg-white';

const Body = ({ className, ...props }: React.ComponentPropsWithoutRef<'tbody'>) => (
  <tbody {...props} className={cn(baseCls, className)} />
);

Body.displayName = 'DataTableBody';

export default Body;
