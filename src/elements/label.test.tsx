import { render, screen } from '@testing-library/react';

import { Label } from './label';

describe('Label', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Label>My Label</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with text content', () => {
    render(<Label>Username</Label>);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');

    expect(label).toHaveClass('flex');
    expect(label).toHaveClass('items-center');
    expect(label).toHaveClass('gap-2');
    expect(label).toHaveClass('text-sm');
    expect(label).toHaveClass('leading-none');
    expect(label).toHaveClass('font-medium');
    expect(label).toHaveClass('select-none');
  });

  it('applies data-slot attribute', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('data-slot', 'label');
  });

  it('appends custom className', () => {
    const { asFragment } = render(<Label className="my-extra-class">Test Label</Label>);
    const label = screen.getByText('Test Label');

    expect(label).toHaveClass('my-extra-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('merges custom className with default classes', () => {
    render(<Label className="custom-class">Test Label</Label>);
    const label = screen.getByText('Test Label');

    // Should have both default and custom classes
    expect(label).toHaveClass('flex');
    expect(label).toHaveClass('items-center');
    expect(label).toHaveClass('custom-class');
  });

  it('forwards HTML attributes', () => {
    render(
      <Label id="test-label" data-testid="custom-label" title="Test title">
        Test Label
      </Label>,
    );

    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('id', 'test-label');
    expect(label).toHaveAttribute('data-testid', 'custom-label');
    expect(label).toHaveAttribute('title', 'Test title');
  });

  it('supports htmlFor attribute', () => {
    render(<Label htmlFor="input-id">Associated Label</Label>);
    const label = screen.getByText('Associated Label');
    expect(label).toHaveAttribute('for', 'input-id');
  });

  it('renders as label element by default', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label.tagName).toBe('LABEL');
  });

  it('applies disabled group styling classes', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');

    expect(label).toHaveClass('group-data-[disabled=true]:pointer-events-none');
    expect(label).toHaveClass('group-data-[disabled=true]:opacity-50');
    expect(label).toHaveClass('peer-disabled:cursor-not-allowed');
    expect(label).toHaveClass('peer-disabled:opacity-50');
  });

  it('renders with complex children', () => {
    const { asFragment } = render(
      <Label>
        <span>Required</span>
        <strong>*</strong>
      </Label>,
    );

    expect(screen.getByText('Required')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles empty content', () => {
    const { asFragment } = render(<Label />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('supports ref forwarding', () => {
    const ref = vi.fn();
    render(<Label ref={ref}>Test Label</Label>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLLabelElement));
  });

  it('supports event handlers', () => {
    const handleClick = vi.fn();
    const handleMouseOver = vi.fn();

    render(
      <Label onClick={handleClick} onMouseOver={handleMouseOver}>
        Clickable Label
      </Label>,
    );

    const label = screen.getByText('Clickable Label');
    label.click();
    expect(handleClick).toHaveBeenCalled();

    label.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(handleMouseOver).toHaveBeenCalled();
  });
});
