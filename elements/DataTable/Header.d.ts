import React from 'react';
export type SortBy = {
    field: string;
    direction: 'ASC' | 'DESC';
};
type OnSortByChange = (newSortBy: SortBy) => void;
interface Props extends React.ComponentPropsWithoutRef<'thead'> {
    sortBy?: SortBy;
    onSortByChange?: OnSortByChange;
}
type SortByContext = {
    sortBy: SortBy | null;
    onSortByChange: OnSortByChange;
};
export declare const Context: React.Context<SortByContext>;
declare const Header: {
    ({ className, sortBy, onSortByChange, ...props }: Props): React.JSX.Element;
    displayName: string;
};
export default Header;
