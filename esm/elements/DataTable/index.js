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
import React, { createContext, useMemo } from 'react';
import { cn } from '@/lib/utils';
import Body from './Body.js';
import DataCell from './DataCell.js';
import Header from './Header.js';
import HeaderCell from './HeaderCell.js';
import Row from './Row.js';
export const Context = createContext({
    size: 'md',
});
const baseCls = 'overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg';
const sizeCNMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
};
const DataTable = ({ className, children, size = 'md', }) => {
    const value = { size };
    const context = useMemo(() => value, [value]);
    return (React.createElement(Context.Provider, { value: context },
        React.createElement("div", { className: cn(baseCls, className) },
            React.createElement("table", { className: cn('min-w-full divide-y divide-chrome-300', size && sizeCNMap[size]) }, children))));
};
DataTable.displayName = 'DataTable';
const DataTableExport = Object.assign(DataTable, {
    Body,
    DataCell,
    Header,
    HeaderCell,
    Row,
});
export default DataTableExport;
