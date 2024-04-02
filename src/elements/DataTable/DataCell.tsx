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

import { useContext } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

import { Context as TableContext } from './index';
import type { DataTableSize } from './index';

const baseCls = 'whitespace-nowrap';

const sizeCNMap: Record<DataTableSize, string> = {
  xs: 'px-2 py-1',
  sm: 'px-2 py-1.5',
  md: 'px-3 py-3.5',
  lg: 'px-3 py-3.5',
  xl: 'px-3 py-3.5',
};

const DataCell = ({ className, ...props }: ComponentPropsWithoutRef<'td'>) => {
  const { size } = useContext(TableContext);

  return (
    <td
      {...props}
      className={cn(
        baseCls,
        sizeCNMap[size],
        className,
      )}
    />
  );
};

DataCell.displayName = 'DataTableDataCell';

export default DataCell;
