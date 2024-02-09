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
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import React from 'react';
const Alert = ({ children }) => (React.createElement("div", { className: "rounded-md bg-yellow-50 p-4" },
    React.createElement("div", { className: "flex" },
        React.createElement("div", { className: "flex-shrink-0" },
            React.createElement(ExclamationTriangleIcon, { className: "h-5 w-5 text-yellow-400", "aria-hidden": "true" })),
        React.createElement("div", { className: "ml-3" },
            React.createElement("h3", { className: "text-sm font-medium text-yellow-800" }, "Attention"),
            React.createElement("div", { className: "mt-2 text-sm text-yellow-700" },
                React.createElement("div", null, children))))));
export default Alert;
