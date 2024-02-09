import type { ButtonProps } from '@restart/ui/Button';
import { type VariantProps } from 'class-variance-authority';
import React from 'react';
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export declare const buttonVariants: (props?: ({
    intent?: "link" | "primary" | "secondary" | "danger" | "outline" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & ButtonVariantProps & React.RefAttributes<unknown>>;
export default Button;
