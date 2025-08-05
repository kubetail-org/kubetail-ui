import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose } from './popover';

const BasicPopover = ({ open = false, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) => (
  <Popover open={open} onOpenChange={onOpenChange}>
    <PopoverTrigger>Open Popover</PopoverTrigger>
    <PopoverContent>
      <div>Popover content</div>
    </PopoverContent>
  </Popover>
);

const PopoverWithAnchor = ({ open = false }: { open?: boolean }) => (
  <Popover open={open}>
    <PopoverAnchor>
      <div>Anchor element</div>
    </PopoverAnchor>
    <PopoverTrigger>Open Popover</PopoverTrigger>
    <PopoverContent>
      <div>Popover content</div>
      <PopoverClose>Close</PopoverClose>
    </PopoverContent>
  </Popover>
);

const ComplexPopover = ({
  open = false,
  align = 'center' as const,
  sideOffset = 4,
  className = '',
}: {
  open?: boolean;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  className?: string;
}) => (
  <Popover open={open}>
    <PopoverTrigger>Complex Popover</PopoverTrigger>
    <PopoverContent align={align} sideOffset={sideOffset} className={className}>
      <div>
        <h3>Popover Title</h3>
        <p>This is a complex popover with multiple elements.</p>
        <button type="button">Action Button</button>
        <PopoverClose>Close Button</PopoverClose>
      </div>
    </PopoverContent>
  </Popover>
);

describe('Popover', () => {
  describe('Basic rendering', () => {
    it('renders the trigger correctly', () => {
      render(<BasicPopover />);
      expect(screen.getByText('Open Popover')).toBeInTheDocument();
    });

    it('does not render content when closed', () => {
      render(<BasicPopover />);
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });

    it('renders content when open', () => {
      render(<BasicPopover open />);
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  describe('Data attributes', () => {
    it('applies data-slot to trigger', () => {
      const { container } = render(<BasicPopover open />);

      const popoverTrigger = container.querySelector('[data-slot="popover-trigger"]');
      expect(popoverTrigger).toBeInTheDocument();
    });

    it('applies data-slot to anchor when used', () => {
      const { container } = render(<PopoverWithAnchor open />);
      const popoverAnchor = container.querySelector('[data-slot="popover-anchor"]');
      expect(popoverAnchor).toBeInTheDocument();
    });
  });

  describe('Interactive behavior', () => {
    it('calls onOpenChange when state changes', () => {
      const onOpenChange = vi.fn();
      render(<BasicPopover onOpenChange={onOpenChange} />);

      const trigger = screen.getByText('Open Popover');
      fireEvent.click(trigger);

      expect(onOpenChange).toHaveBeenCalledWith(true);
    });
  });

  describe('PopoverContent props', () => {
    it('renders with different align values', () => {
      const { rerender } = render(<ComplexPopover open align="start" />);
      expect(screen.getByText('Popover Title')).toBeInTheDocument();

      rerender(<ComplexPopover open align="center" />);
      expect(screen.getByText('Popover Title')).toBeInTheDocument();

      rerender(<ComplexPopover open align="end" />);
      expect(screen.getByText('Popover Title')).toBeInTheDocument();
    });

    it('renders with different sideOffset values', () => {
      // Test that component renders without crashing with different sideOffset values
      const { rerender } = render(<ComplexPopover open sideOffset={4} />);
      expect(screen.getByText('Popover Title')).toBeInTheDocument();

      rerender(<ComplexPopover open sideOffset={10} />);
      expect(screen.getByText('Popover Title')).toBeInTheDocument();
    });
  });

  describe('Styling and rendering', () => {
    it('renders content with proper structure', () => {
      render(<BasicPopover open />);

      expect(screen.getByText('Popover content')).toBeInTheDocument();

      const trigger = screen.getByText('Open Popover');
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes when open', () => {
      render(<BasicPopover open />);

      const trigger = screen.getByText('Open Popover');
      const content = screen.getByText('Popover content');

      expect(content).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    });

    it('has correct closed state attributes', () => {
      render(<BasicPopover open={false} />);

      const trigger = screen.getByText('Open Popover');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    });
  });

  describe('Portal rendering', () => {
    it('renders content in a portal when open', () => {
      render(<BasicPopover open />);

      const content = screen.getByText('Popover content');
      expect(content).toBeInTheDocument();

      expect(content.closest('[role="dialog"]')).toBeInTheDocument();
    });
  });

  describe('Component composition', () => {
    it('renders complex content correctly', () => {
      render(<ComplexPopover open />);

      expect(screen.getByText('Popover Title')).toBeInTheDocument();
      expect(screen.getByText('This is a complex popover with multiple elements.')).toBeInTheDocument();
      expect(screen.getByText('Action Button')).toBeInTheDocument();
      expect(screen.getByText('Close Button')).toBeInTheDocument();
    });

    it('renders with PopoverClose components', () => {
      render(<PopoverWithAnchor open />);

      expect(screen.getByText('Popover content')).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
    });
  });

  describe('Error handling', () => {
    it('handles missing trigger gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <Popover>
          <PopoverContent>Content without trigger</PopoverContent>
        </Popover>,
      );

      expect(screen.queryByText('Content without trigger')).not.toBeInTheDocument();

      consoleSpy.mockRestore();
    });

    it('handles missing content gracefully', () => {
      render(
        <Popover>
          <PopoverTrigger>Trigger without content</PopoverTrigger>
        </Popover>,
      );

      expect(screen.getByText('Trigger without content')).toBeInTheDocument();
    });
  });

  describe('Props forwarding', () => {
    it('forwards props to PopoverContent', () => {
      render(
        <Popover open>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent data-testid="popover-content" role="dialog">
            Content
          </PopoverContent>
        </Popover>,
      );

      const content = screen.getByTestId('popover-content');
      expect(content).toHaveAttribute('role', 'dialog');
    });

    it('forwards props to PopoverTrigger', () => {
      render(
        <Popover>
          <PopoverTrigger data-testid="popover-trigger" disabled>
            Trigger
          </PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>,
      );

      const trigger = screen.getByTestId('popover-trigger');
      expect(trigger).toBeInTheDocument();
    });

    it('forwards props to PopoverAnchor', () => {
      render(
        <Popover open>
          <PopoverAnchor data-testid="popover-anchor">
            <div>Anchor</div>
          </PopoverAnchor>
          <PopoverTrigger>Trigger</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>,
      );

      const anchor = screen.getByTestId('popover-anchor');
      expect(anchor).toBeInTheDocument();
    });
  });

  describe('Component state management', () => {
    it('renders correctly with controlled open state', () => {
      const { rerender } = render(<BasicPopover open={false} />);

      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();

      rerender(<BasicPopover open />);

      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });

    it('maintains state attributes correctly', () => {
      const { container, rerender } = render(<BasicPopover open={false} />);

      let trigger = container.querySelector('[data-slot="popover-trigger"]');
      expect(trigger).toHaveAttribute('data-state', 'closed');

      rerender(<BasicPopover open />);

      trigger = container.querySelector('[data-slot="popover-trigger"]');
      expect(trigger).toHaveAttribute('data-state', 'open');
    });
  });
});
