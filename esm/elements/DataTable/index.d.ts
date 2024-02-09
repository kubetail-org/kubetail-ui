import React from 'react';
import Body from './Body.js';
import DataCell from './DataCell.js';
import Header from './Header.js';
import HeaderCell from './HeaderCell.js';
import Row from './Row.js';
export type DataTableSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type DataTableContext = {
    size: DataTableSize;
};
export declare const Context: React.Context<DataTableContext>;
interface Props extends React.PropsWithChildren {
    className?: string;
    size?: DataTableSize;
}
declare const DataTable: {
    ({ className, children, size, }: Props): React.JSX.Element;
    displayName: string;
};
type DataTableType = typeof DataTable;
interface DataTableExportType extends DataTableType {
    Body: typeof Body;
    DataCell: typeof DataCell;
    Header: typeof Header;
    HeaderCell: typeof HeaderCell;
    Row: typeof Row;
}
declare const DataTableExport: DataTableExportType;
export default DataTableExport;
