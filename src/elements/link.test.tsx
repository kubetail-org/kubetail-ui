import { render } from '@testing-library/react';

import { Link, RouterLink, setLinkComponent, getLinkComponent } from './link';
import type { LinkVariantProps } from './link';

describe('Link', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Link href="/test">My Link</Link>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders variants properly', () => {
    ['default', 'external'].forEach((variant) => {
      const { asFragment } = render(
        <Link href="/test" variant={variant as LinkVariantProps['variant']}>
          Link
        </Link>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('appends custom className', () => {
    const { asFragment } = render(
      <Link href="/test" className="my-extra-class">
        Link
      </Link>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders asChild properly', () => {
    const { asFragment, getByText } = render(
      <Link asChild href="/test">
        <span>Child Content</span>
      </Link>,
    );
    expect(getByText('Child Content').tagName).toBe('SPAN');
    expect(asFragment()).toMatchSnapshot();
  });

  it('adds target and rel for external variant', () => {
    const { getByText } = render(
      <Link href="https://example.com" variant="external">
        External
      </Link>,
    );
    const el = getByText('External');
    expect(el).toHaveAttribute('target', '_blank');
    expect(el).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not add target/rel for external variant with asChild', () => {
    const { getByText } = render(
      <Link variant="external" asChild href="/test">
        <span>Child</span>
      </Link>,
    );
    const el = getByText('Child');
    expect(el).not.toHaveAttribute('target');
  });

  it('does not add target/rel for default variant', () => {
    const { getByText } = render(<Link href="/test">Normal</Link>);
    const el = getByText('Normal');
    expect(el).not.toHaveAttribute('target');
  });

  it('allows color override via className', () => {
    const { getByText } = render(
      <Link href="/test" className="text-destructive">
        Danger
      </Link>,
    );
    expect(getByText('Danger').className).toContain('text-destructive');
  });
});

describe('RouterLink', () => {
  afterEach(() => {
    setLinkComponent('a');
  });

  it('renders as anchor by default', () => {
    const { asFragment, getByText } = render(<RouterLink href="/test">Router Link</RouterLink>);
    expect(getByText('Router Link').tagName).toBe('A');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with configured component', () => {
    const CustomLink = ({ children, ...props }: React.ComponentProps<'a'>) => (
      <span data-testid="custom-link" {...props}>
        {children}
      </span>
    );
    setLinkComponent(CustomLink);

    const { getByTestId } = render(<RouterLink href="/test">Custom</RouterLink>);
    expect(getByTestId('custom-link')).toBeInTheDocument();
  });

  it('renders variants properly', () => {
    ['default', 'external'].forEach((variant) => {
      const { asFragment } = render(
        <RouterLink href="/test" variant={variant as LinkVariantProps['variant']}>
          Link
        </RouterLink>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('adds target/rel for external variant with default anchor', () => {
    const { getByText } = render(
      <RouterLink href="https://example.com" variant="external">
        External
      </RouterLink>,
    );
    expect(getByText('External')).toHaveAttribute('target', '_blank');
  });

  it('does not add target/rel for external variant with custom component', () => {
    const CustomLink = ({ children, ...props }: React.ComponentProps<'a'>) => (
      <span data-testid="custom-link" {...props}>
        {children}
      </span>
    );
    setLinkComponent(CustomLink);

    const { getByTestId } = render(
      <RouterLink href="/test" variant="external">
        External
      </RouterLink>,
    );
    expect(getByTestId('custom-link')).not.toHaveAttribute('target');
  });
});

describe('setLinkComponent / getLinkComponent', () => {
  afterEach(() => {
    setLinkComponent('a');
  });

  it('stores and retrieves the configured component', () => {
    const Custom = () => <span />;
    setLinkComponent(Custom);
    expect(getLinkComponent()).toBe(Custom);
  });
});
