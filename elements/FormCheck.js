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
const react_1 = __importDefault(require("react"));
const utils_1 = require("@/lib/utils");
const wrapperBaseCls = 'flex items-center';
const inputBaseCls = 'h-4 w-4 text-primary-600 rounded border-input bg-background ring-offset-background focus:outline-none focus:border-input focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50';
const labelBaseCls = 'ml-2 block text-sm text-chrome-900';
const FormCheck = react_1.default.forwardRef((_a, ref) => {
    var { as = 'input', className, id, label } = _a, props = __rest(_a, ["as", "className", "id", "label"]);
    const Tag = as;
    return (react_1.default.createElement("div", { className: (0, utils_1.cn)(wrapperBaseCls, className) },
        react_1.default.createElement(Tag, Object.assign({}, props, { ref: ref, id: id, type: "checkbox", className: inputBaseCls })),
        label && (react_1.default.createElement("label", { htmlFor: id, className: labelBaseCls }, label))));
});
FormCheck.displayName = 'FormCheck';
exports.default = FormCheck;
