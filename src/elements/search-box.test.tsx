import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SearchBox } from './search-box';

describe('SearchBox', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<SearchBox placeholder="Enter text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className', () => {
    const { getByPlaceholderText } = render(<SearchBox placeholder="Class test" className="custom-class" />);
    expect(getByPlaceholderText('Class test')).toHaveClass('custom-class');
  });

  it('accepts and displays value', () => {
    const { getByDisplayValue } = render(<SearchBox value="Hello" onChange={() => {}} />);
    expect(getByDisplayValue('Hello')).toBeInTheDocument();
  });

  it('renders as disabled', () => {
    const { getByPlaceholderText } = render(<SearchBox placeholder="Disabled test" disabled />);
    expect(getByPlaceholderText('Disabled test')).toBeDisabled();
  });

  it('sets aria-invalid when invalid', () => {
    const { getByPlaceholderText } = render(<SearchBox placeholder="Invalid test" aria-invalid />);
    expect(getByPlaceholderText('Invalid test')).toHaveAttribute('aria-invalid');
  });
});
