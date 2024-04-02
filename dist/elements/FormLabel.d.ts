/// <reference types="react" />
interface Props extends React.ComponentPropsWithoutRef<'label'> {
    as?: React.ElementType;
    htmlFor?: string;
}
declare const FormLabel: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLLabelElement>>;
export default FormLabel;
