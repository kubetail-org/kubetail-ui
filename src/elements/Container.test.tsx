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

import { render } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Container>contents</Container>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('appends custom className', () => {
    const { asFragment } = render(<Container className="text-red-100" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders custom tagName properly', () => {
    const { asFragment } = render(<Container as="header" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
