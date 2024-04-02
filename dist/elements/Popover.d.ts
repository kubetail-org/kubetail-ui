/// <reference types="react" />
import * as PopoverPrimitive from '@radix-ui/react-popover';
declare const Popover: import("react").FC<PopoverPrimitive.PopoverProps>;
declare const PopoverAnchor: import("react").ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & import("react").RefAttributes<HTMLDivElement>>;
declare const PopoverClose: import("react").ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const PopoverTrigger: import("react").ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: import("react").ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger, };
