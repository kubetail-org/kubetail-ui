import React from 'react';
interface Props extends React.ComponentPropsWithoutRef<'input'> {
    as?: React.ElementType;
    id?: string;
    label?: React.ReactNode;
}
declare const FormCheck: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default FormCheck;
