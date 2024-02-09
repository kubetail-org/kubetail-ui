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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const solid_1 = require("@heroicons/react/24/solid");
const react_1 = __importDefault(require("react"));
const Alert = ({ children }) => (react_1.default.createElement("div", { className: "rounded-md bg-yellow-50 p-4" },
    react_1.default.createElement("div", { className: "flex" },
        react_1.default.createElement("div", { className: "flex-shrink-0" },
            react_1.default.createElement(solid_1.ExclamationTriangleIcon, { className: "h-5 w-5 text-yellow-400", "aria-hidden": "true" })),
        react_1.default.createElement("div", { className: "ml-3" },
            react_1.default.createElement("h3", { className: "text-sm font-medium text-yellow-800" }, "Attention"),
            react_1.default.createElement("div", { className: "mt-2 text-sm text-yellow-700" },
                react_1.default.createElement("div", null, children))))));
exports.default = Alert;
