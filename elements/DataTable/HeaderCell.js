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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
const solid_1 = require("@heroicons/react/20/solid");
const react_1 = __importStar(require("react"));
const utils_1 = require("@/lib/utils");
const index_js_1 = require("./index.js");
const Header_js_1 = require("./Header.js");
const baseCN = 'text-left font-semibold text-gray-900 select-none';
const sortIconCN = 'ml-2 flex-none text-gray-400 group-hover:visible group-focus:visible';
const sizeCNMap = {
    xs: 'px-2 py-1.5',
    sm: 'px-2 py-1.5',
    md: 'px-3 py-3.5',
    lg: 'px-3 py-3.5',
    xl: 'px-3 py-3.5',
};
const HeaderCell = (_a) => {
    var { children, className, sortField, initialSortDirection = 'ASC' } = _a, props = __rest(_a, ["children", "className", "sortField", "initialSortDirection"]);
    const { size } = (0, react_1.useContext)(index_js_1.Context);
    const { sortBy, onSortByChange } = (0, react_1.useContext)(Header_js_1.Context);
    const sortDirection = sortBy && sortBy.field === sortField
        ? sortBy.direction : initialSortDirection;
    return (react_1.default.createElement("th", Object.assign({}, props, { className: (0, utils_1.cn)(baseCN, sizeCNMap[size], className) }),
        sortField && (react_1.default.createElement("span", { className: "group inline-flex cursor-pointer", onClick: () => {
                let newDirection = sortDirection;
                if ((sortBy === null || sortBy === void 0 ? void 0 : sortBy.field) === sortField)
                    newDirection = newDirection === 'ASC' ? 'DESC' : 'ASC';
                onSortByChange({ field: sortField, direction: newDirection });
            } },
            children,
            react_1.default.createElement("span", { className: (0, utils_1.cn)(sortIconCN, (sortBy === null || sortBy === void 0 ? void 0 : sortBy.field) === sortField ? 'visible' : 'invisible') }, sortDirection === 'ASC' ? react_1.default.createElement(solid_1.ChevronUpIcon, { className: "h-5 w-5" }) : react_1.default.createElement(solid_1.ChevronDownIcon, { className: "h-5 w-5" })))),
        !sortField && children));
};
HeaderCell.displayName = 'DataTableHeaderCell';
exports.default = HeaderCell;
