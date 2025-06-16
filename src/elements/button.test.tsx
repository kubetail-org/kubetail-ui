import { render } from '@testing-library/react';

import { Button } from './button';
import type { ButtonVariantProps } from './button';

describe('Button', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Button>My Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders variants properly', () => {
    ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'].forEach((variant) => {
      const { asFragment } = render(<Button variant={variant as ButtonVariantProps['variant']} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('renders sizes properly', () => {
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
      const { asFragment } = render(<Button size={size as ButtonVariantProps['size']}>My Button</Button>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('renders disabled=true properly', () => {
    const { asFragment } = render(<Button disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('appends custom className', () => {
    const { asFragment } = render(<Button className="my-extra-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
