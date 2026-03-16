import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Switch } from './switch';

describe('Switch', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders checked state properly', () => {
    const { asFragment } = render(<Switch checked />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders unchecked state properly', () => {
    const { asFragment } = render(<Switch checked={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders disabled state properly', () => {
    const { asFragment } = render(<Switch disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders disabled and checked state properly', () => {
    const { asFragment } = render(<Switch disabled checked />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className', () => {
    const { container } = render(<Switch className="custom-class" />);
    const switchEl = container.querySelector('[data-slot="switch"]');
    expect(switchEl).toHaveClass('custom-class');
  });

  it('handles controlled state properly', () => {
    const handleChange = vi.fn();
    const { container, rerender } = render(<Switch checked={false} onCheckedChange={handleChange} />);

    const switchEl = container.querySelector('[data-slot="switch"]') as HTMLElement;
    expect(switchEl).toHaveAttribute('data-state', 'unchecked');

    rerender(<Switch checked onCheckedChange={handleChange} />);
    expect(switchEl).toHaveAttribute('data-state', 'checked');
  });

  it('calls onCheckedChange when clicked', () => {
    const handleChange = vi.fn();
    const { container } = render(<Switch onCheckedChange={handleChange} />);

    const switchEl = container.querySelector('[data-slot="switch"]') as HTMLElement;
    fireEvent.click(switchEl);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('toggles state when clicked in uncontrolled mode', () => {
    const { container } = render(<Switch />);

    const switchEl = container.querySelector('[data-slot="switch"]') as HTMLElement;

    expect(switchEl).toHaveAttribute('data-state', 'unchecked');

    fireEvent.click(switchEl);
    expect(switchEl).toHaveAttribute('data-state', 'checked');

    fireEvent.click(switchEl);
    expect(switchEl).toHaveAttribute('data-state', 'unchecked');
  });

  it('does not respond to clicks when disabled', () => {
    const handleChange = vi.fn();
    const { container } = render(<Switch disabled onCheckedChange={handleChange} />);

    const switchEl = container.querySelector('[data-slot="switch"]') as HTMLElement;
    fireEvent.click(switchEl);

    expect(handleChange).not.toHaveBeenCalled();
    expect(switchEl).toHaveAttribute('data-state', 'unchecked');
  });

  it('is accessible and focusable', () => {
    const { container } = render(<Switch />);

    const switchEl = container.querySelector('[data-slot="switch"]') as HTMLElement;

    expect(switchEl).not.toHaveAttribute('tabindex', '-1');
    expect(switchEl).toHaveAttribute('role', 'switch');
    expect(switchEl).toHaveAttribute('aria-checked', 'false');
  });

  it('supports focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    const { container } = render(<Switch onFocus={handleFocus} onBlur={handleBlur} />);

    const switchEl = container.querySelector('[data-slot="switch"]') as HTMLElement;

    fireEvent.focus(switchEl);
    expect(handleFocus).toHaveBeenCalled();

    fireEvent.blur(switchEl);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('supports defaultChecked prop', () => {
    const { container } = render(<Switch defaultChecked />);
    const switchEl = container.querySelector('[data-slot="switch"]');
    expect(switchEl).toHaveAttribute('data-state', 'checked');
  });

  it('renders thumb element', () => {
    const { container } = render(<Switch />);
    const thumb = container.querySelector('[data-slot="switch-thumb"]');
    expect(thumb).toBeInTheDocument();
  });

  it('forwards ref properly', () => {
    const ref = vi.fn();
    render(<Switch ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('supports additional HTML attributes', () => {
    const { container } = render(
      <Switch id="test-switch" data-testid="custom-switch" aria-label="Test switch" />,
    );

    const switchEl = container.querySelector('[data-slot="switch"]');
    expect(switchEl).toHaveAttribute('id', 'test-switch');
    expect(switchEl).toHaveAttribute('data-testid', 'custom-switch');
    expect(switchEl).toHaveAttribute('aria-label', 'Test switch');
  });
});
