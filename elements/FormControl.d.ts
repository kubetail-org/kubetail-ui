import React from 'react';
import FormControlFeedback from './FormControlFeedback.js';
interface Props extends React.ComponentPropsWithoutRef<'input'> {
    as?: React.ElementType;
    id?: string;
}
declare const FormControl: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
type FormControlType = typeof FormControl;
interface FormControlExportType extends FormControlType {
    Feedback: typeof FormControlFeedback;
}
declare const FormControlExport: FormControlExportType;
export default FormControlExport;
