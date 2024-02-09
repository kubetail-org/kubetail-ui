import React from 'react';
import FormCheck from './FormCheck.js';
import FormControl from './FormControl.js';
import FormFeedback from './FormFeedback.js';
import FormFieldset from './FormFieldset.js';
import FormGroup from './FormGroup.js';
import FormLabel from './FormLabel.js';
import FormOption from './FormOption.js';
import FormSelect from './FormSelect.js';
declare const Form: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> & React.RefAttributes<HTMLFormElement>>;
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
