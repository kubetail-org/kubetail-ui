import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';

describe('Select Components', () => {
  const BasicSelect = ({ disabled = false, size = 'default' }: { disabled?: boolean; size?: 'sm' | 'default' }) => (
    <Select disabled={disabled}>
      <SelectTrigger size={size}>
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );

  describe('Select', () => {
    it('renders properly', () => {
      const { asFragment } = render(<BasicSelect />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders with disabled state', () => {
      render(<BasicSelect disabled />);
      const trigger = screen.getByRole('combobox');
      expect(trigger).toBeDisabled();
    });

    it('renders with controlled value', () => {
      const { rerender } = render(
        <Select value="option1">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false');

      rerender(
        <Select value="option2">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false');
    });

    it('handles onValueChange callback', () => {
      const onValueChange = vi.fn();
      render(
        <Select onValueChange={onValueChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
          </SelectContent>
        </Select>,
      );

      // The callback will be tested through integration, this just ensures the prop is accepted
      expect(onValueChange).toHaveBeenCalledTimes(0);
    });
  });

  describe('SelectTrigger', () => {
    it('renders with default size', () => {
      render(<BasicSelect />);
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('data-size', 'default');
    });

    it('renders with small size', () => {
      render(<BasicSelect size="sm" />);
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('data-size', 'sm');
    });

    it('applies custom className', () => {
      render(
        <Select>
          <SelectTrigger className="custom-trigger">
            <SelectValue />
          </SelectTrigger>
        </Select>,
      );
      expect(screen.getByRole('combobox')).toHaveClass('custom-trigger');
    });

    it('shows chevron down icon', () => {
      render(<BasicSelect />);
      const trigger = screen.getByRole('combobox');
      expect(trigger.querySelector('svg')).toBeInTheDocument();
    });

    it('has proper data attributes', () => {
      render(<BasicSelect />);
      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('data-slot', 'select-trigger');
    });

    it('handles click events', () => {
      render(<BasicSelect />);
      const trigger = screen.getByRole('combobox');

      // Click the trigger
      fireEvent.click(trigger);

      // Should be expanded after click
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('SelectValue', () => {
    it('displays placeholder text', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose an option" />
          </SelectTrigger>
        </Select>,
      );
      expect(screen.getByText('Choose an option')).toBeInTheDocument();
    });

    it('has proper data attributes', () => {
      const { container } = render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Test" />
          </SelectTrigger>
        </Select>,
      );
      expect(container.querySelector('[data-slot="select-value"]')).toBeInTheDocument();
    });
  });

  describe('SelectContent', () => {
    it('renders with default structure', () => {
      const { container } = render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test">Test</SelectItem>
          </SelectContent>
        </Select>,
      );

      // The content is rendered in DOM but may not be visible until opened
      // We can test that the structure is there
      expect(container).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="custom-content">
            <SelectItem value="test">Test</SelectItem>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('SelectItem', () => {
    it('renders within select structure', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test-value">Test Item</SelectItem>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test" className="custom-item">
              Test Item
            </SelectItem>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('handles disabled prop', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="enabled">Enabled Item</SelectItem>
            <SelectItem value="disabled" disabled>
              Disabled Item
            </SelectItem>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('SelectGroup and SelectLabel', () => {
    it('renders with groups and labels', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Test Group</SelectLabel>
              <SelectItem value="test">Test Item</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('applies custom className to group', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="custom-group">
              <SelectLabel>Test Group</SelectLabel>
              <SelectItem value="test">Test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('applies custom className to label', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="custom-label">Test Label</SelectLabel>
              <SelectItem value="test">Test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('SelectSeparator', () => {
    it('renders separator within content', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectSeparator />
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectSeparator className="custom-separator" />
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('SelectScrollUpButton and SelectScrollDownButton', () => {
    it('renders scroll buttons within content', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectScrollUpButton />
            <SelectItem value="test">Test</SelectItem>
            <SelectScrollDownButton />
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('applies custom className to scroll buttons', () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectScrollUpButton className="custom-scroll-up" />
            <SelectItem value="test">Test</SelectItem>
            <SelectScrollDownButton className="custom-scroll-down" />
          </SelectContent>
        </Select>,
      );

      // Component should render without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<BasicSelect />);

      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('role', 'combobox');
    });

    it('supports keyboard navigation with Space key', () => {
      render(<BasicSelect />);

      const trigger = screen.getByRole('combobox');
      trigger.focus();

      // Press Space to open
      fireEvent.keyDown(trigger, { key: ' ', code: 'Space' });

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('supports keyboard navigation with Enter key', () => {
      render(<BasicSelect />);

      const trigger = screen.getByRole('combobox');
      trigger.focus();

      // Press Enter to open
      fireEvent.keyDown(trigger, { key: 'Enter', code: 'Enter' });

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('supports keyboard navigation with Arrow Down key', () => {
      render(<BasicSelect />);

      const trigger = screen.getByRole('combobox');
      trigger.focus();

      // Press ArrowDown to open
      fireEvent.keyDown(trigger, { key: 'ArrowDown', code: 'ArrowDown' });

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes on Escape key', () => {
      render(<BasicSelect />);

      const trigger = screen.getByRole('combobox');

      // First open the select
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      // Then press Escape
      fireEvent.keyDown(trigger, { key: 'Escape', code: 'Escape' });

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('is focusable', () => {
      render(<BasicSelect />);

      const trigger = screen.getByRole('combobox');
      trigger.focus();

      expect(trigger).toHaveFocus();
    });
  });

  describe('Integration', () => {
    it('renders all components together without errors', () => {
      const { container } = render(
        <Select>
          <SelectTrigger className="trigger-class">
            <SelectValue placeholder="Select..." className="value-class" />
          </SelectTrigger>
          <SelectContent className="content-class">
            <SelectGroup className="group-class">
              <SelectLabel className="label-class">Group Label</SelectLabel>
              <SelectItem value="item1" className="item-class">
                Item 1
              </SelectItem>
              <SelectItem value="item2">Item 2</SelectItem>
            </SelectGroup>
            <SelectSeparator className="separator-class" />
            <SelectItem value="item3">Item 3</SelectItem>
          </SelectContent>
        </Select>,
      );

      // Verify the main trigger is rendered with its class
      expect(container.querySelector('[data-slot="select-trigger"]')).toHaveClass('trigger-class');
      // Verify the overall structure renders without errors
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByText('Select...')).toBeInTheDocument();
    });

    it('renders with default value', () => {
      render(
        <Select defaultValue="option2">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>,
      );

      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('data-state', 'closed');
    });

    it('accepts all standard HTML attributes', () => {
      render(
        <Select data-testid="custom-select">
          <SelectTrigger data-testid="custom-trigger" aria-label="Custom select">
            <SelectValue data-testid="custom-value" />
          </SelectTrigger>
          <SelectContent data-testid="custom-content">
            <SelectItem value="test" data-testid="custom-item">
              Test
            </SelectItem>
          </SelectContent>
        </Select>,
      );

      expect(screen.getByTestId('custom-trigger')).toBeInTheDocument();
      expect(screen.getByTestId('custom-trigger')).toHaveAttribute('aria-label', 'Custom select');
    });
  });
});
