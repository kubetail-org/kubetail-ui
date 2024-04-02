import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { ExclamationTriangleIcon as s } from "@heroicons/react/24/solid";
const d = ({ children: t }) => e("div", { className: "rounded-md bg-yellow-50 p-4", children: l("div", { className: "flex", children: [e("div", { className: "flex-shrink-0", children: e(s, { className: "h-5 w-5 text-yellow-400", "aria-hidden": "true" }) }), l("div", { className: "ml-3", children: [e("h3", { className: "text-sm font-medium text-yellow-800", children: "Attention" }), e("div", { className: "mt-2 text-sm text-yellow-700", children: e("div", { children: t }) })] })] }) });
export {
  d as default
};
