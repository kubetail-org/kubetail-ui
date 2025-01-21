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

import Button from './Button';
import type { ButtonVariantProps } from './Button';

describe('Button', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Button>My Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders variants properly', () => {
    ['primary', 'secondary', 'white', 'danger', 'success']
      .forEach((variant) => {
        const { asFragment } = render(<Button intent={variant as ButtonVariantProps['intent']} />);
        expect(asFragment()).toMatchSnapshot();
      });
  });

  it('renders sizes properly', () => {
    ['xs', 'sm', 'md', 'lg', 'xl']
      .forEach((size) => {
        const { asFragment } = render(<Button size={size as ButtonVariantProps['size']}>My Button</Button>);
        expect(asFragment()).toMatchSnapshot();
      });
  });

  it('renders disabled=true properly', () => {
    const { asFragment } = render(<Button disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders as link when href is set', () => {
    const { asFragment } = render(<Button href="#" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders as input tag properly', () => {
    const { asFragment } = render(<Button as="input" value="My Button" type="submit" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('appends custom className', () => {
    const { asFragment } = render(<Button className="my-extra-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
