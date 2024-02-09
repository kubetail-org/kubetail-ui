import React from 'react';
type ContextState = {
    controlId: string | undefined;
};
declare const Context: React.Context<ContextState>;
interface Props extends React.ComponentPropsWithoutRef<'div'> {
    controlId?: string;
}
declare const FormGroup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export { Context };
export default FormGroup;
