import { jsx as e } from "react/jsx-runtime";
import { createContext as l, useMemo as m } from "react";
import { cn as d } from "../../lib/utils.js";
const u = "bg-chrome-50", t = () => {
}, i = l({
  sortBy: null,
  onSortByChange: t
}), p = ({ className: r, sortBy: n, onSortByChange: a, ...s }) => {
  const o = {
    sortBy: n || null,
    onSortByChange: a || t
  }, c = m(() => o, [o]);
  return e(i.Provider, { value: c, children: e("thead", { ...s, className: d(u, r) }) });
};
p.displayName = "DataTableHeader";
export {
  i as Context,
  p as default
};
