/// <reference types="react" />
interface Props extends React.ComponentPropsWithoutRef<'input'> {
    as?: React.ElementType;
    id?: string;
    label?: React.ReactNode;
}
declare const FormCheck: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement>>;
export default FormCheck;
