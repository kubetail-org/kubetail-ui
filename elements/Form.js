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
const FormCheck_js_1 = __importDefault(require("./FormCheck.js"));
const FormControl_js_1 = __importDefault(require("./FormControl.js"));
const FormFeedback_js_1 = __importDefault(require("./FormFeedback.js"));
const FormFieldset_js_1 = __importDefault(require("./FormFieldset.js"));
const FormGroup_js_1 = __importDefault(require("./FormGroup.js"));
const FormLabel_js_1 = __importDefault(require("./FormLabel.js"));
const FormOption_js_1 = __importDefault(require("./FormOption.js"));
const FormSelect_js_1 = __importDefault(require("./FormSelect.js"));
const baseCls = 'space-y-8';
const Form = react_1.default.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("form", Object.assign({}, props, { ref: ref, className: (0, utils_1.cn)(baseCls, className) })));
});
Form.displayName = 'Form';
const FormExport = Object.assign(Form, {
    Check: FormCheck_js_1.default,
    Control: FormControl_js_1.default,
    Group: FormGroup_js_1.default,
    Feedback: FormFeedback_js_1.default,
    Fieldset: FormFieldset_js_1.default,
    Label: FormLabel_js_1.default,
    Option: FormOption_js_1.default,
    Select: FormSelect_js_1.default,
});
exports.default = FormExport;
