import type { ComponentPropsWithoutRef } from 'react';
interface Props extends ComponentPropsWithoutRef<'th'> {
    sortField?: string;
    initialSortDirection?: 'ASC' | 'DESC';
}
declare const HeaderCell: {
    ({ children, className, sortField, initialSortDirection, ...props }: Props): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default HeaderCell;
