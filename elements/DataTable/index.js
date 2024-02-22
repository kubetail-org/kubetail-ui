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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const react_1 = __importStar(require("react"));
const utils_1 = require("@/lib/utils");
const Body_js_1 = __importDefault(require("./Body.js"));
const DataCell_js_1 = __importDefault(require("./DataCell.js"));
const Header_js_1 = __importDefault(require("./Header.js"));
const HeaderCell_js_1 = __importDefault(require("./HeaderCell.js"));
const Row_js_1 = __importDefault(require("./Row.js"));
exports.Context = (0, react_1.createContext)({
    size: 'md',
});
const baseCls = 'overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg';
const sizeCNMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
};
const DataTable = ({ className, children, size = 'md', }) => {
    const value = { size };
    const context = (0, react_1.useMemo)(() => value, [value]);
    return (react_1.default.createElement(exports.Context.Provider, { value: context },
        react_1.default.createElement("div", { className: (0, utils_1.cn)(baseCls, className) },
            react_1.default.createElement("table", { className: (0, utils_1.cn)('min-w-full divide-y divide-chrome-30', size && sizeCNMap[size]) }, children))));
};
DataTable.displayName = 'DataTable';
const DataTableExport = Object.assign(DataTable, {
    Body: Body_js_1.default,
    DataCell: DataCell_js_1.default,
    Header: Header_js_1.default,
    HeaderCell: HeaderCell_js_1.default,
    Row: Row_js_1.default,
});
exports.default = DataTableExport;
