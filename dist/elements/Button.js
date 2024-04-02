import { jsx as i } from "react/jsx-runtime";
import { useButtonProps as m } from "@restart/ui/Button";
import { cva as u } from "class-variance-authority";
import { forwardRef as g } from "react";
import { cn as p } from "../lib/utils.js";
const f = u("uppercase inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    intent: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/60 shadow-sm",
      danger: "bg-danger text-danger-foreground hover:bg-danger/90 shadow-sm",
      outline: "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
      ghost: "hover:bg-secondary hover:text-secondary-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      xs: "px-2.5 py-1.5 text-xs rounded",
      sm: "px-3 py-2 text-xs rounded-md",
      md: "px-4 py-2 text-sm rounded-md",
      lg: "px-4 py-2 text-base rounded-md",
      xl: "px-6 py-3 text-base rounded-md"
    }
  },
  defaultVariants: {
    intent: "primary",
    size: "md"
  }
}), c = g(({ as: r, children: o, className: t, disabled: n, ...e }, s) => {
  const [a, { tagName: d }] = m({
    tagName: r,
    disabled: n,
    ...e
  });
  return i(d, { ...e, ...a, ref: s, className: p(f(e), t), children: o });
});
c.displayName = "Button";
export {
  f as buttonVariants,
  c as default
};
