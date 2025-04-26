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

import { useMemo } from 'react'
import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

import Body from './Body'
import DataCell from './DataCell'
import Header from './Header'
import HeaderCell from './HeaderCell'
import Row from './Row'
import { Context } from './shared'
import type { DataTableSize } from './shared'

const baseCls = 'overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg'

const sizeCNMap: Record<DataTableSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-base',
}

interface Props extends PropsWithChildren {
  className?: string
  size?: DataTableSize
}

const DataTable = ({ className, children, size = 'md' }: Props) => {
  const context = useMemo(() => ({ size }), [size])

  return (
    <Context.Provider value={context}>
      <div className={cn(baseCls, className)}>
        <table className={cn('min-w-full divide-y divide-chrome-300', size && sizeCNMap[size])}>{children}</table>
      </div>
    </Context.Provider>
  )
}

DataTable.displayName = 'DataTable'

type DataTableType = typeof DataTable

interface DataTableExportType extends DataTableType {
  Body: typeof Body
  DataCell: typeof DataCell
  Header: typeof Header
  HeaderCell: typeof HeaderCell
  Row: typeof Row
}

const DataTableExport: DataTableExportType = Object.assign(DataTable, {
  Body,
  DataCell,
  Header,
  HeaderCell,
  Row,
})

export default DataTableExport
