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

import { createContext, useMemo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

const baseCls = 'bg-chrome-50';
const noop = () => {};

export type SortBy = {
  field: string;
  direction: 'ASC' | 'DESC';
};

type OnSortByChange = (newSortBy: SortBy) => void;

interface Props extends ComponentPropsWithoutRef<'thead'> {
  sortBy?: SortBy;
  onSortByChange?: OnSortByChange;
}

type SortByContext = {
  sortBy: SortBy | null;
  onSortByChange: OnSortByChange;
};

export const Context = createContext<SortByContext>({
  sortBy: null,
  onSortByChange: noop,
});

const Header = ({ className, sortBy, onSortByChange, ...props }: Props) => {
  const context = useMemo(
    () => ({
      sortBy: sortBy || null,
      onSortByChange: onSortByChange || noop,
    }),
    [sortBy, onSortByChange],
  );

  return (
    <Context.Provider value={context}>
      <thead {...props} className={cn(baseCls, className)} />
    </Context.Provider>
  );
};

Header.displayName = 'DataTableHeader';

export default Header;
