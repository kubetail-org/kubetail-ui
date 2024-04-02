/// <reference types="react" />
import * as TabsPrimitive from '@radix-ui/react-tabs';
declare const Tabs: import("react").ForwardRefExoticComponent<TabsPrimitive.TabsProps & import("react").RefAttributes<HTMLDivElement>>;
declare const TabsList: import("react").ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: import("react").ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
declare const TabsContent: import("react").ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent, };
