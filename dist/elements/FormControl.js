import { jsx as d } from "react/jsx-runtime";
import { forwardRef as l, useContext as a } from "react";
import { cn as c } from "../lib/utils.js";
import { Context as m } from "./FormGroup.js";
import u from "./FormControlFeedback.js";
const p = "flex h-10 w-full rounded border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground ring-offset-background focus:outline-none focus:border-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium", o = l(({ as: r = "input", className: t, id: e, ...n }, s) => {
  const f = r, { controlId: i } = a(m);
  return d(f, { ...n, ref: s, id: e || i, className: c(p, t) });
});
o.displayName = "FormControl";
const k = Object.assign(o, {
  Feedback: u
});
export {
  k as default
};
