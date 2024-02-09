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

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import React, { useContext } from 'react';

import { cn } from '@/lib/utils';

import { Context as TableContext } from './index.js';
import type { DataTableSize } from './index.js';
import { Context as HeaderContext } from './Header.js';

const baseCN = 'text-left font-semibold text-gray-900 select-none';
const sortIconCN = 'ml-2 flex-none text-gray-400 group-hover:visible group-focus:visible';

const sizeCNMap: Record<DataTableSize, string> = {
  xs: 'px-2 py-1.5',
  sm: 'px-2 py-1.5',
  md: 'px-3 py-3.5',
  lg: 'px-3 py-3.5',
  xl: 'px-3 py-3.5',
};

interface Props extends React.ComponentPropsWithoutRef<'th'> {
  sortField?: string;
  initialSortDirection?: 'ASC' | 'DESC';
}

const HeaderCell = ({
  children,
  className,
  sortField,
  initialSortDirection = 'ASC',
  ...props
}: Props) => {
  const { size } = useContext(TableContext);

  const { sortBy, onSortByChange } = useContext(HeaderContext);
  const sortDirection = sortBy && sortBy.field === sortField
    ? sortBy.direction : initialSortDirection;

  return (
    <th
      {...props}
      className={cn(
        baseCN,
        sizeCNMap[size],
        className,
      )}
    >
      {sortField && (
        <span
          className="group inline-flex cursor-pointer"
          onClick={() => {
            let newDirection = sortDirection;
            if (sortBy?.field === sortField) newDirection = newDirection === 'ASC' ? 'DESC' : 'ASC';
            onSortByChange({ field: sortField, direction: newDirection });
          }}
        >
          {children}
          <span className={cn(sortIconCN, sortBy?.field === sortField ? 'visible' : 'invisible')}>
            {sortDirection === 'ASC' ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
          </span>
        </span>
      )}
      {!sortField && children}
    </th>
  );
};

HeaderCell.displayName = 'DataTableHeaderCell';

export default HeaderCell;
