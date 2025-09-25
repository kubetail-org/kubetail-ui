import { render } from '@testing-library/react';

import { Spinner } from './spinner';

describe('Spinner', () => {
  it('renders with default props', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all size variants properly', () => {
    ['xs', 'sm', 'md', 'lg'].forEach((size) => {
      const { asFragment } = render(<Spinner size={size as 'xs' | 'sm' | 'md' | 'lg'} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('appends custom className', () => {
    const { asFragment } = render(<Spinner className="my-custom-class" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(<Spinner />);

    const statusDiv = container.querySelector('div[role="status"]');
    expect(statusDiv).toBeInTheDocument();

    const svg = container.querySelector('svg[aria-hidden="true"]');
    expect(svg).toBeInTheDocument();

    const srText = container.querySelector('.sr-only');
    expect(srText).toBeInTheDocument();
    expect(srText).toHaveTextContent('Loading...');
  });

  it('applies correct size classes', () => {
    const { container: xsContainer } = render(<Spinner size="xs" />);
    const xsSvg = xsContainer.querySelector('svg');
    expect(xsSvg).toHaveClass('w-4', 'h-4');

    const { container: smContainer } = render(<Spinner size="sm" />);
    const smSvg = smContainer.querySelector('svg');
    expect(smSvg).toHaveClass('w-6', 'h-6');

    const { container: mdContainer } = render(<Spinner size="md" />);
    const mdSvg = mdContainer.querySelector('svg');
    expect(mdSvg).toHaveClass('w-8', 'h-8');

    const { container: lgContainer } = render(<Spinner size="lg" />);
    const lgSvg = lgContainer.querySelector('svg');
    expect(lgSvg).toHaveClass('w-10', 'h-10');
  });

  it('applies base classes correctly', () => {
    const { container } = render(<Spinner />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveClass('animate-spin');
    expect(svg).toHaveClass('mr-2');
    expect(svg).toHaveClass('text-chrome-200');
    expect(svg).toHaveClass('fill-chrome-500');
  });

  it('merges custom className with base classes', () => {
    const { container } = render(<Spinner className="custom-class text-red-500" />);
    const svg = container.querySelector('svg');

    // Should have base classes
    expect(svg).toHaveClass('animate-spin');
    expect(svg).toHaveClass('mr-2');
    expect(svg).toHaveClass('w-8', 'h-8'); // default md size

    // Should have custom class
    expect(svg).toHaveClass('custom-class');
  });

  it('defaults to md size when no size prop is provided', () => {
    const { container } = render(<Spinner />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('w-8', 'h-8');
  });

  it('has correct SVG structure', () => {
    const { container } = render(<Spinner />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('viewBox', '0 0 100 101');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const paths = svg?.querySelectorAll('path');
    expect(paths).toHaveLength(2);

    // Check that paths have the expected fill attributes
    expect(paths?.[0]).toHaveAttribute('fill', 'currentColor');
    expect(paths?.[1]).toHaveAttribute('fill', 'currentFill');
  });
});
