/// <reference types="react" />
import FormCheck from './FormCheck';
import FormControl from './FormControl';
import FormFeedback from './FormFeedback';
import FormFieldset from './FormFieldset';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormOption from './FormOption';
import FormSelect from './FormSelect';
declare const Form: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> & import("react").RefAttributes<HTMLFormElement>>;
type FormType = typeof Form;
interface FormExportType extends FormType {
    Check: typeof FormCheck;
    Control: typeof FormControl;
    Group: typeof FormGroup;
    Feedback: typeof FormFeedback;
    Fieldset: typeof FormFieldset;
    Label: typeof FormLabel;
    Option: typeof FormOption;
    Select: typeof FormSelect;
}
declare const FormExport: FormExportType;
export default FormExport;
