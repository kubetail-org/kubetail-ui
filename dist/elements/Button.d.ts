/// <reference types="react" />
import type { ButtonProps } from '@restart/ui/Button';
import { type VariantProps } from 'class-variance-authority';
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export declare const buttonVariants: (props?: ({
    intent?: "link" | "danger" | "primary" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & ButtonVariantProps & import("react").RefAttributes<unknown>>;
export default Button;
