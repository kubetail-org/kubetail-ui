import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Toggle } from './toggle';

describe('Toggle', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Toggle aria-label="Toggle">Toggle</Toggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders pressed state properly', () => {
    const { asFragment } = render(
      <Toggle aria-label="Toggle" pressed>
        Toggle
      </Toggle>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders unpressed state properly', () => {
    const { asFragment } = render(
      <Toggle aria-label="Toggle" pressed={false}>
        Toggle
      </Toggle>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders disabled state properly', () => {
    const { asFragment } = render(
      <Toggle aria-label="Toggle" disabled>
        Toggle
      </Toggle>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders disabled and pressed state properly', () => {
    const { asFragment } = render(
      <Toggle aria-label="Toggle" disabled pressed>
        Toggle
      </Toggle>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Toggle aria-label="Toggle" className="custom-class">
        Toggle
      </Toggle>,
    );
    const toggleEl = container.querySelector('[data-slot="toggle"]');
    expect(toggleEl).toHaveClass('custom-class');
  });

  it('handles controlled state properly', () => {
    const handleChange = vi.fn();
    const { container, rerender } = render(
      <Toggle aria-label="Toggle" pressed={false} onPressedChange={handleChange}>
        Toggle
      </Toggle>,
    );

    const toggleEl = container.querySelector('[data-slot="toggle"]') as HTMLElement;
    expect(toggleEl).toHaveAttribute('data-state', 'off');

    rerender(
      <Toggle aria-label="Toggle" pressed onPressedChange={handleChange}>
        Toggle
      </Toggle>,
    );
    expect(toggleEl).toHaveAttribute('data-state', 'on');
  });

  it('calls onPressedChange when clicked', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Toggle aria-label="Toggle" onPressedChange={handleChange}>
        Toggle
      </Toggle>,
    );

    const toggleEl = container.querySelector('[data-slot="toggle"]') as HTMLElement;
    fireEvent.click(toggleEl);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('toggles state when clicked in uncontrolled mode', () => {
    const { container } = render(<Toggle aria-label="Toggle">Toggle</Toggle>);

    const toggleEl = container.querySelector('[data-slot="toggle"]') as HTMLElement;

    expect(toggleEl).toHaveAttribute('data-state', 'off');

    fireEvent.click(toggleEl);
    expect(toggleEl).toHaveAttribute('data-state', 'on');

    fireEvent.click(toggleEl);
    expect(toggleEl).toHaveAttribute('data-state', 'off');
  });

  it('does not respond to clicks when disabled', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Toggle aria-label="Toggle" disabled onPressedChange={handleChange}>
        Toggle
      </Toggle>,
    );

    const toggleEl = container.querySelector('[data-slot="toggle"]') as HTMLElement;
    fireEvent.click(toggleEl);

    expect(handleChange).not.toHaveBeenCalled();
    expect(toggleEl).toHaveAttribute('data-state', 'off');
  });

  it('is accessible and has correct role', () => {
    const { container } = render(<Toggle aria-label="Toggle bold">Toggle</Toggle>);

    const toggleEl = container.querySelector('[data-slot="toggle"]') as HTMLElement;

    expect(toggleEl).toHaveAttribute('aria-label', 'Toggle bold');
    expect(toggleEl).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders outline variant', () => {
    const { asFragment } = render(
      <Toggle aria-label="Toggle" variant="outline">
        Toggle
      </Toggle>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders small size', () => {
    const { asFragment } = render(
      <Toggle aria-label="Toggle" size="sm">
        Toggle
      </Toggle>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders large size', () => {
    const { asFragment } = render(
      <Toggle aria-label="Toggle" size="lg">
        Toggle
      </Toggle>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('supports defaultPressed prop', () => {
    const { container } = render(
      <Toggle aria-label="Toggle" defaultPressed>
        Toggle
      </Toggle>,
    );
    const toggleEl = container.querySelector('[data-slot="toggle"]');
    expect(toggleEl).toHaveAttribute('data-state', 'on');
  });

  it('forwards ref properly', () => {
    const ref = vi.fn();
    render(
      <Toggle aria-label="Toggle" ref={ref}>
        Toggle
      </Toggle>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('supports additional HTML attributes', () => {
    const { container } = render(
      <Toggle aria-label="Toggle" id="test-toggle" data-testid="custom-toggle">
        Toggle
      </Toggle>,
    );

    const toggleEl = container.querySelector('[data-slot="toggle"]');
    expect(toggleEl).toHaveAttribute('id', 'test-toggle');
    expect(toggleEl).toHaveAttribute('data-testid', 'custom-toggle');
  });
});
