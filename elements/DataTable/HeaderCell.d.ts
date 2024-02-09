import React from 'react';
interface Props extends React.ComponentPropsWithoutRef<'th'> {
    sortField?: string;
    initialSortDirection?: 'ASC' | 'DESC';
}
declare const HeaderCell: {
    ({ children, className, sortField, initialSortDirection, ...props }: Props): React.JSX.Element;
    displayName: string;
};
export default HeaderCell;
