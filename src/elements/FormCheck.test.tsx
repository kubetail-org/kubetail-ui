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

import FormCheck from './FormCheck';

describe('FormCheck', () => {
  it('renders properly', () => {
    const { asFragment } = render(<FormCheck label="My Label" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('appends custom className to wrapper element', () => {
    const { asFragment } = render(<FormCheck className="extra-class" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders `disabled` properly', () => {
    const { asFragment } = render(<FormCheck disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders `disabled=false` properly', () => {
    const { asFragment } = render(<FormCheck disabled={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
