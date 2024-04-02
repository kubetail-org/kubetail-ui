import { jsx as e } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { cn as i } from "../lib/utils.js";
import f from "./FormCheck.js";
import s from "./FormControl.js";
import F from "./FormFeedback.js";
import a from "./FormFieldset.js";
import c from "./FormGroup.js";
import l from "./FormLabel.js";
import n from "./FormOption.js";
import d from "./FormSelect.js";
const b = "space-y-8", o = p(({ className: r, ...m }, t) => e("form", { ...m, ref: t, className: i(b, r) }));
o.displayName = "Form";
const N = Object.assign(o, {
  Check: f,
  Control: s,
  Group: c,
  Feedback: F,
  Fieldset: a,
  Label: l,
  Option: n,
  Select: d
});
export {
  N as default
};
