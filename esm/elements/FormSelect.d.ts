import React from 'react';
interface Props extends React.ComponentPropsWithoutRef<'select'> {
    id?: string;
}
declare const FormSelect: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSelectElement>>;
export default FormSelect;
