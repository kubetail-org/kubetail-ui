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

import { render } from '@testing-library/react';

import FormGroup from './FormGroup';

describe('FormGroup', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<FormGroup>contents</FormGroup>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('appends custom className', () => {
    const { asFragment } = render(<FormGroup className="extra-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
