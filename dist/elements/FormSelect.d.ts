/// <reference types="react" />
interface Props extends React.ComponentPropsWithoutRef<'select'> {
    id?: string;
}
declare const FormSelect: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLSelectElement>>;
export default FormSelect;
