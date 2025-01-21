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

import FormControl from './FormControl';
import FormGroup from './FormGroup';

describe('FormControl', () => {
  it('renders properly', () => {
    const { asFragment } = render(<FormControl type="text" defaultValue="content" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('appends custom className', () => {
    const { asFragment } = render(<FormControl className="extra-class" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders `disabled` properly', () => {
    const { asFragment } = render(<FormControl disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders `disabled=false` properly', () => {
    const { asFragment } = render(<FormControl disabled={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders as textarea properly', () => {
    const { asFragment } = render(<FormControl as="textarea" defaultValue="contents" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('inherits id from FormGroup.controlId', () => {
    const { asFragment } = render(
      <FormGroup controlId="input-id">
        <FormControl />
      </FormGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
