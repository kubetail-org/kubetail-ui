// Copyright 2024-2025 Andres Morey
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
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

/**
 * UI component for displaying alerts
 */
const Alert = ({ children }: Props) => (
  <div className="rounded-md bg-yellow-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
        <div className="mt-2 text-sm text-yellow-700">
          <div>{children}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Alert;
