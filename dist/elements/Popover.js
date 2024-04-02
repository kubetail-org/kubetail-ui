import { jsx as t } from "react/jsx-runtime";
import * as o from "@radix-ui/react-popover";
import { forwardRef as i } from "react";
import { cn as s } from "../lib/utils.js";
const c = o.Root, v = o.Anchor, g = o.Close, P = o.Trigger, m = i(({ className: e, align: a = "center", sideOffset: r = 4, ...d }, n) => t(o.Portal, { children: t(o.Content, { ref: n, align: a, sideOffset: r, className: s("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...d }) }));
m.displayName = o.Content.displayName;
export {
  c as Popover,
  v as PopoverAnchor,
  g as PopoverClose,
  m as PopoverContent,
  P as PopoverTrigger
};
