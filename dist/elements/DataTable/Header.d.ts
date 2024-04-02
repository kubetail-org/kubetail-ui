import type { ComponentPropsWithoutRef } from 'react';
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
export declare const Context: import("react").Context<SortByContext>;
declare const Header: {
    ({ className, sortBy, onSortByChange, ...props }: Props): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Header;
