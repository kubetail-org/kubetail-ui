import type { PropsWithChildren } from 'react';
import Body from './Body';
import DataCell from './DataCell';
import Header from './Header';
import HeaderCell from './HeaderCell';
import Row from './Row';
export type DataTableSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type DataTableContext = {
    size: DataTableSize;
};
export declare const Context: import("react").Context<DataTableContext>;
interface Props extends PropsWithChildren {
    className?: string;
    size?: DataTableSize;
}
declare const DataTable: {
    ({ className, children, size, }: Props): import("react/jsx-runtime").JSX.Element;
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
