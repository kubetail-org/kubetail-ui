import { render } from '@testing-library/react';

import { Input } from './input';

describe('Input', () => {
  it('renders contents properly', () => {
    const { asFragment } = render(<Input placeholder="Enter text" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
