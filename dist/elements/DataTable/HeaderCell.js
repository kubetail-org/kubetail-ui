import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { ChevronUpIcon as f, ChevronDownIcon as h } from "@heroicons/react/20/solid";
import { useContext as c } from "react";
import { cn as l } from "../../lib/utils.js";
import { Context as d } from "./index.js";
import { Context as N } from "./Header.js";
const u = "text-left font-semibold text-chrome-900 select-none", b = "ml-2 flex-none text-chrome-400 group-hover:visible group-focus:visible", v = {
  xs: "px-2 py-1.5",
  sm: "px-2 py-1.5",
  md: "px-3 py-3.5",
  lg: "px-3 py-3.5",
  xl: "px-3 py-3.5"
}, S = ({ children: i, className: p, sortField: o, initialSortDirection: a = "ASC", ...m }) => {
  const { size: x } = c(d), { sortBy: e, onSortByChange: C } = c(N), s = e && e.field === o ? e.direction : a;
  return r("th", { ...m, className: l(u, v[x], p), children: [o && r("span", { className: "group inline-flex cursor-pointer", onClick: () => {
    let n = s;
    (e == null ? void 0 : e.field) === o && (n = n === "ASC" ? "DESC" : "ASC"), C({ field: o, direction: n });
  }, children: [i, t("span", { className: l(b, (e == null ? void 0 : e.field) === o ? "visible" : "invisible"), children: s === "ASC" ? t(f, { className: "h-5 w-5" }) : t(h, { className: "h-5 w-5" }) })] }), !o && i] });
};
S.displayName = "DataTableHeaderCell";
export {
  S as default
};
