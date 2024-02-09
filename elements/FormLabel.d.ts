import React from 'react';
interface Props extends React.ComponentPropsWithoutRef<'label'> {
    as?: React.ElementType;
    htmlFor?: string;
}
declare const FormLabel: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLLabelElement>>;
export default FormLabel;
