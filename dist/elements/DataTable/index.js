import { jsx as t } from "react/jsx-runtime";
import { createContext as l, useMemo as d } from "react";
import { cn as a } from "../../lib/utils.js";
import n from "./Body.js";
import c from "./DataCell.js";
import x from "./Header.js";
import p from "./HeaderCell.js";
import f from "./Row.js";
const b = l({
  size: "md"
}), u = "overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg", v = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-base"
}, r = ({ className: m, children: s, size: e = "md" }) => {
  const o = { size: e }, i = d(() => o, [o]);
  return t(b.Provider, { value: i, children: t("div", { className: a(u, m), children: t("table", { className: a("min-w-full divide-y divide-chrome-300", e && v[e]), children: s }) }) });
};
r.displayName = "DataTable";
const j = Object.assign(r, {
  Body: n,
  DataCell: c,
  Header: x,
  HeaderCell: p,
  Row: f
});
export {
  b as Context,
  j as default
};
