import { jsx as s } from "react/jsx-runtime";
import { useContext as e } from "react";
import { cn as o } from "../../lib/utils.js";
import { Context as m } from "./index.js";
const r = "whitespace-nowrap", l = {
  xs: "px-2 py-1",
  sm: "px-2 py-1.5",
  md: "px-3 py-3.5",
  lg: "px-3 py-3.5",
  xl: "px-3 py-3.5"
}, x = ({ className: t, ...p }) => {
  const { size: a } = e(m);
  return s("td", { ...p, className: o(r, l[a], t) });
};
x.displayName = "DataTableDataCell";
export {
  x as default
};
