import { jsx as e } from "react/jsx-runtime";
import { createContext as m, forwardRef as c, useMemo as n } from "react";
import { cn as p } from "../lib/utils.js";
const i = m({}), f = "space-y-1", u = c(({ className: r, controlId: o, ...t }, s) => {
  const a = n(() => ({ controlId: o }), [o]);
  return e(i.Provider, { value: a, children: e("div", { ...t, ref: s, className: p(f, r) }) });
});
u.displayName = "FormGroup";
export {
  i as Context,
  u as default
};
