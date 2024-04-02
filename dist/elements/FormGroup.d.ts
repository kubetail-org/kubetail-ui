/// <reference types="react" />
type ContextState = {
    controlId: string | undefined;
};
declare const Context: import("react").Context<ContextState>;
interface Props extends React.ComponentPropsWithoutRef<'div'> {
    controlId?: string;
}
declare const FormGroup: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export { Context };
export default FormGroup;
