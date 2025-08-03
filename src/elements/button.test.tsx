import { render } from '@testing-library/react';

import { Button } from './button';
import type { ButtonVariantProps } from './button';

describe('Button', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Button>My Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders variants properly', () => {
    ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'].forEach((variant) => {
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

  it('renders asChild properly', () => {
    const { asFragment, getByText } = render(
      <Button asChild>
        <a href="/test">Child Link</a>
      </Button>,
    );
    expect(getByText('Child Link').tagName).toBe('A');
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles onClick', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    getByText('Click Me').click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with aria-invalid', () => {
    const { getByRole } = render(<Button aria-invalid>Invalid</Button>);
    expect(getByRole('button')).toHaveAttribute('aria-invalid');
  });

  it('renders with an icon', () => {
    const Icon = () => <svg data-testid="icon" />;
    const { getByTestId } = render(
      <Button>
        <Icon />
        Icon Btn
      </Button>,
    );
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('renders as link variant with href', () => {
    const { getByText } = render(
      <Button asChild variant="link">
        <a href="/test">Link Btn</a>
      </Button>,
    );
    expect(getByText('Link Btn')).toHaveAttribute('href', '/test');
  });
});
