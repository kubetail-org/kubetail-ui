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
import React, { createContext, useMemo } from 'react';
import { cn } from '@/lib/utils';
const baseCls = 'bg-chrome-50';
const noop = () => { };
export const Context = createContext({
    sortBy: null,
    onSortByChange: noop,
});
const Header = ({ className, sortBy, onSortByChange, ...props }) => {
    const value = {
        sortBy: sortBy || null,
        onSortByChange: onSortByChange || noop,
    };
    const context = useMemo(() => value, [value]);
    return (React.createElement(Context.Provider, { value: context },
        React.createElement("thead", { ...props, className: cn(baseCls, className) })));
};
Header.displayName = 'DataTableHeader';
export default Header;
