import { jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useContext as d } from "react";
import { cn as i } from "../lib/utils.js";
import { Context as c } from "./FormGroup.js";
const p = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", f = n(({ as: o = "label", className: e, htmlFor: t, ...r }, a) => {
  const m = o, { controlId: s } = d(c);
  return l(m, { ...r, ref: a, htmlFor: t || s, className: i(p, e) });
});
f.displayName = "FormLabel";
export {
  f as default
};
