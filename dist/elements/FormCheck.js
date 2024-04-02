import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import { cn as m } from "../lib/utils.js";
const f = "flex items-center", u = "h-4 w-4 text-primary-600 rounded border-input bg-background ring-offset-background focus:outline-none focus:border-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50", p = "ml-2 block text-sm text-chrome-900", d = l(({ as: s = "input", className: t, id: e, label: o, ...c }, n) => {
  const a = s;
  return i("div", { className: m(f, t), children: [r(a, { ...c, ref: n, id: e, type: "checkbox", className: u }), o && r("label", { htmlFor: e, className: p, children: o })] });
});
d.displayName = "FormCheck";
export {
  d as default
};
