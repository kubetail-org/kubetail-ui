import { jsx as s } from "react/jsx-runtime";
import { forwardRef as c, useContext as f } from "react";
import { cn as i } from "../lib/utils.js";
import { Context as u } from "./FormGroup.js";
const d = "mt-1 block w-full h-10 rounded bg-background border border-input py-2 pl-3 pr-10 text-sm ring-offset-background focus:outline-none focus:border-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50", l = c(({ className: o, id: r, ...t }, e) => {
  const { controlId: n } = f(u);
  return s("select", { ...t, ref: e, id: r || n, className: i(d, o) });
});
l.displayName = "FormSelect";
export {
  l as default
};
