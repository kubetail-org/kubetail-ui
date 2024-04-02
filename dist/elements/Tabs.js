import { jsx as o } from "react/jsx-runtime";
import * as e from "@radix-ui/react-tabs";
import { forwardRef as n } from "react";
import { cn as a } from "../lib/utils.js";
const g = e.Root, r = n(({ className: i, ...s }, t) => o(e.List, { ref: t, className: a("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", i), ...s }));
r.displayName = e.List.displayName;
const f = n(({ className: i, ...s }, t) => o(e.Trigger, { ref: t, className: a("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", i), ...s }));
f.displayName = e.Trigger.displayName;
const m = n(({ className: i, ...s }, t) => o(e.Content, { ref: t, className: a("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", i), ...s }));
m.displayName = e.Content.displayName;
export {
  g as Tabs,
  m as TabsContent,
  r as TabsList,
  f as TabsTrigger
};
