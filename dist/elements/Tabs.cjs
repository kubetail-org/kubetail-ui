"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),f=require("@radix-ui/react-tabs"),r=require("react"),a=require("../lib/utils.cjs");function d(e){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}return i.default=e,Object.freeze(i)}const s=d(f),b=s.Root,c=r.forwardRef(({className:e,...i},t)=>n.jsx(s.List,{ref:t,className:a.cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...i}));c.displayName=s.List.displayName;const u=r.forwardRef(({className:e,...i},t)=>n.jsx(s.Trigger,{ref:t,className:a.cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...i}));u.displayName=s.Trigger.displayName;const l=r.forwardRef(({className:e,...i},t)=>n.jsx(s.Content,{ref:t,className:a.cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...i}));l.displayName=s.Content.displayName;exports.Tabs=b;exports.TabsContent=l;exports.TabsList=c;exports.TabsTrigger=u;