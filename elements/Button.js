"use strict";
// Copyright 2024 Andres Morey
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonVariants = void 0;
const Button_1 = require("@restart/ui/Button");
const class_variance_authority_1 = require("class-variance-authority");
const react_1 = __importDefault(require("react"));
const utils_1 = require("@/lib/utils");
exports.buttonVariants = (0, class_variance_authority_1.cva)('uppercase inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        intent: {
            primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/60 shadow-sm',
            danger: 'bg-danger text-danger-foreground hover:bg-danger/90 shadow-sm',
            outline: 'border border-input bg-background hover:bg-secondary hover:text-secondary-foreground',
            ghost: 'hover:bg-secondary hover:text-secondary-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
            xs: 'px-2.5 py-1.5 text-xs rounded',
            sm: 'px-3 py-2 text-xs rounded-md',
            md: 'px-4 py-2 text-sm rounded-md',
            lg: 'px-4 py-2 text-base rounded-md',
            xl: 'px-6 py-3 text-base rounded-md',
        },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'md',
    },
});
const Button = react_1.default.forwardRef((_a, ref) => {
    var { as, children, className, disabled } = _a, props = __rest(_a, ["as", "children", "className", "disabled"]);
    const [ariaButtonProps, { tagName: Tag }] = (0, Button_1.useButtonProps)(Object.assign({ tagName: as, disabled }, props));
    return (react_1.default.createElement(Tag, Object.assign({}, props, ariaButtonProps, { ref: ref, className: (0, utils_1.cn)((0, exports.buttonVariants)(props), className) }), children));
});
Button.displayName = 'Button';
exports.default = Button;
