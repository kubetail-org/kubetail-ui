import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Checkbox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders checked state properly', () => {
    const { asFragment } = render(<Checkbox checked />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders unchecked state properly', () => {
    const { asFragment } = render(<Checkbox checked={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders disabled state properly', () => {
    const { asFragment } = render(<Checkbox disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders disabled and checked state properly', () => {
    const { asFragment } = render(<Checkbox disabled checked />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className', () => {
    const { container } = render(<Checkbox className="custom-class" />);
    const checkbox = container.querySelector('[data-slot="checkbox"]');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('handles controlled state properly', () => {
    const handleChange = vi.fn();
    const { container, rerender } = render(
      <Checkbox checked={false} onCheckedChange={handleChange} />
    );
    
    const checkbox = container.querySelector('[data-slot="checkbox"]') as HTMLElement;
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    rerender(<Checkbox checked={true} onCheckedChange={handleChange} />);
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('calls onCheckedChange when clicked', () => {
    const handleChange = vi.fn();
    const { container } = render(<Checkbox onCheckedChange={handleChange} />);
    
    const checkbox = container.querySelector('[data-slot="checkbox"]') as HTMLElement;
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('toggles state when clicked in uncontrolled mode', () => {
    const { container } = render(<Checkbox />);
    
    const checkbox = container.querySelector('[data-slot="checkbox"]') as HTMLElement;
    
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'checked');
    
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  it('does not respond to clicks when disabled', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Checkbox disabled onCheckedChange={handleChange} />
    );
    
    const checkbox = container.querySelector('[data-slot="checkbox"]') as HTMLElement;
    fireEvent.click(checkbox);
    
    expect(handleChange).not.toHaveBeenCalled();
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  it('is accessible and focusable', () => {
    const { container } = render(<Checkbox />);
    
    const checkbox = container.querySelector('[data-slot="checkbox"]') as HTMLElement;
    
    expect(checkbox).not.toHaveAttribute('tabindex', '-1');
    
    expect(checkbox).toHaveAttribute('role', 'checkbox');
    
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('supports focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    const { container } = render(
      <Checkbox onFocus={handleFocus} onBlur={handleBlur} />
    );
    
    const checkbox = container.querySelector('[data-slot="checkbox"]') as HTMLElement;
    
    fireEvent.focus(checkbox);
    expect(handleFocus).toHaveBeenCalled();
    
    fireEvent.blur(checkbox);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('sets aria-invalid when invalid', () => {
    const { container } = render(<Checkbox aria-invalid />);
    const checkbox = container.querySelector('[data-slot="checkbox"]');
    expect(checkbox).toHaveAttribute('aria-invalid');
  });

  it('supports defaultChecked prop', () => {
    const { container } = render(<Checkbox defaultChecked />);
    const checkbox = container.querySelector('[data-slot="checkbox"]');
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('supports indeterminate state', () => {
    const { container } = render(<Checkbox checked="indeterminate" />);
    const checkbox = container.querySelector('[data-slot="checkbox"]');
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  it('renders check icon in checked state', () => {
    const { container } = render(<Checkbox checked />);
    const indicator = container.querySelector('[data-slot="checkbox-indicator"]');
    const checkIcon = indicator?.querySelector('svg');
    expect(checkIcon).toBeInTheDocument();
    expect(checkIcon).toHaveClass('size-3.5');
  });

  it('forwards ref properly', () => {
    const ref = vi.fn();
    render(<Checkbox ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('supports additional HTML attributes', () => {
    const { container } = render(
      <Checkbox 
        id="test-checkbox" 
        data-testid="custom-checkbox"
        aria-label="Test checkbox"
      />
    );
    
    const checkbox = container.querySelector('[data-slot="checkbox"]');
    expect(checkbox).toHaveAttribute('id', 'test-checkbox');
    expect(checkbox).toHaveAttribute('data-testid', 'custom-checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Test checkbox');
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<Checkbox />);
    const checkbox = container.querySelector('[data-slot="checkbox"]');
    
    expect(checkbox).toHaveClass(
      'peer',
      'border-input',
      'size-4',
      'shrink-0',
      'rounded-[4px]',
      'border',
      'shadow-xs',
      'transition-shadow',
      'outline-none'
    );
  });

  it('has correct indicator styling when checked', () => {
    const { container } = render(<Checkbox checked />);
    const indicator = container.querySelector('[data-slot="checkbox-indicator"]');
    
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass(
      'flex',
      'items-center',
      'justify-center',
      'text-current',
      'transition-none'
    );
  });
});
