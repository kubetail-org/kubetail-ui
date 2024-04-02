/// <reference types="react" />
import FormControlFeedback from './FormControlFeedback';
interface Props extends React.ComponentPropsWithoutRef<'input'> {
    as?: React.ElementType;
    id?: string;
}
declare const FormControl: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement>>;
type FormControlType = typeof FormControl;
interface FormControlExportType extends FormControlType {
    Feedback: typeof FormControlFeedback;
}
declare const FormControlExport: FormControlExportType;
export default FormControlExport;
