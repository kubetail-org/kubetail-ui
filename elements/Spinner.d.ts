import React from 'react';
type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg';
type Props = {
    className?: string;
    size?: SpinnerSize;
};
declare const Spinner: ({ className, size }: Props) => React.JSX.Element;
export default Spinner;
