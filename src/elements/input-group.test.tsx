import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group';

describe('InputGroup', () => {
  it('renders with children', () => {
    const { getByTestId } = render(
      <InputGroup data-testid="input-group">
        <InputGroupInput placeholder="Enter text" />
      </InputGroup>,
    );
    expect(getByTestId('input-group')).toBeInTheDocument();
    expect(getByTestId('input-group')).toHaveAttribute('data-slot', 'input-group');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(<InputGroup data-testid="input-group" className="custom-class" />);
    expect(getByTestId('input-group')).toHaveClass('custom-class');
  });
});

describe('InputGroupAddon', () => {
  it('renders with default inline-start alignment', () => {
    const { getByTestId } = render(<InputGroupAddon data-testid="addon">@</InputGroupAddon>);
    expect(getByTestId('addon')).toHaveAttribute('data-align', 'inline-start');
    expect(getByTestId('addon')).toHaveTextContent('@');
  });

  it('supports inline-end alignment', () => {
    const { getByTestId } = render(
      <InputGroupAddon data-testid="addon" align="inline-end">
        end
      </InputGroupAddon>,
    );
    expect(getByTestId('addon')).toHaveAttribute('data-align', 'inline-end');
  });

  it('focuses sibling input on click', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <InputGroup>
        <InputGroupAddon data-testid="addon">@</InputGroupAddon>
        <InputGroupInput placeholder="Enter text" />
      </InputGroup>,
    );
    getByTestId('addon').click();
    expect(getByPlaceholderText('Enter text')).toHaveFocus();
  });
});

describe('InputGroupButton', () => {
  it('renders as a button with type=button by default', () => {
    const { getByRole } = render(<InputGroupButton>Click</InputGroupButton>);
    expect(getByRole('button')).toHaveAttribute('type', 'button');
    expect(getByRole('button')).toHaveTextContent('Click');
  });

  it('applies size data attribute', () => {
    const { getByRole } = render(<InputGroupButton size="icon-sm">Icon</InputGroupButton>);
    expect(getByRole('button')).toHaveAttribute('data-size', 'icon-sm');
  });
});

describe('InputGroupText', () => {
  it('renders as a span with children', () => {
    const { getByTestId } = render(<InputGroupText data-testid="text">Label</InputGroupText>);
    expect(getByTestId('text').tagName).toBe('SPAN');
    expect(getByTestId('text')).toHaveTextContent('Label');
  });
});

describe('InputGroupInput', () => {
  it('renders an input with the control data slot', () => {
    const { getByPlaceholderText } = render(<InputGroupInput placeholder="Enter text" />);
    const input = getByPlaceholderText('Enter text');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('data-slot', 'input-group-control');
  });
});

describe('InputGroupTextarea', () => {
  it('renders a textarea with the control data slot', () => {
    const { getByPlaceholderText } = render(<InputGroupTextarea placeholder="Enter text" />);
    const textarea = getByPlaceholderText('Enter text');
    expect(textarea.tagName).toBe('TEXTAREA');
    expect(textarea).toHaveAttribute('data-slot', 'input-group-control');
  });
});
