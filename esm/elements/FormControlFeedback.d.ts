import React from 'react';
interface Props extends React.ComponentPropsWithoutRef<'div'> {
    as?: React.ElementType;
}
declare const FormControlFeedback: {
    ({ as, className, ...props }: Props): React.JSX.Element;
    displayName: string;
};
export default FormControlFeedback;
