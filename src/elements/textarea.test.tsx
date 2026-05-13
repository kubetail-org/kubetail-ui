import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Textarea placeholder="Enter text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className', () => {
    const { getByPlaceholderText } = render(<Textarea placeholder="Class test" className="custom-class" />);
    expect(getByPlaceholderText('Class test')).toHaveClass('custom-class');
  });

  it('accepts and displays value', () => {
    const { getByDisplayValue } = render(<Textarea value="Hello" onChange={() => {}} />);
    expect(getByDisplayValue('Hello')).toBeInTheDocument();
  });

  it('renders as disabled', () => {
    const { getByPlaceholderText } = render(<Textarea placeholder="Disabled test" disabled />);
    expect(getByPlaceholderText('Disabled test')).toBeDisabled();
  });

  it('sets aria-invalid when invalid', () => {
    const { getByPlaceholderText } = render(<Textarea placeholder="Invalid test" aria-invalid />);
    expect(getByPlaceholderText('Invalid test')).toHaveAttribute('aria-invalid');
  });
});
