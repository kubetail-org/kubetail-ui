// Copyright 2024 Andres Morey
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import FormCheck from './FormCheck.js';
import FormControl from './FormControl.js';
import FormFeedback from './FormFeedback.js';
import FormFieldset from './FormFieldset.js';
import FormGroup from './FormGroup.js';
import FormLabel from './FormLabel.js';
import FormOption from './FormOption.js';
import FormSelect from './FormSelect.js';

const baseCls = 'space-y-8';

const Form = forwardRef((
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'form'>,
  ref: React.ForwardedRef<HTMLFormElement>,
) => (
  <form
    {...props}
    ref={ref}
    className={cn(baseCls, className)}
  />
));

Form.displayName = 'Form';

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

const FormExport: FormExportType = Object.assign(
  Form,
  {
    Check: FormCheck,
    Control: FormControl,
    Group: FormGroup,
    Feedback: FormFeedback,
    Fieldset: FormFieldset,
    Label: FormLabel,
    Option: FormOption,
    Select: FormSelect,
  },
);

export default FormExport;
