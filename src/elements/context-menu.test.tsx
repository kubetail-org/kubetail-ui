import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from './context-menu';

// Helper to open a context menu by right-clicking the trigger
function openContextMenu(triggerText: string) {
  const trigger = screen.getByText(triggerText);
  fireEvent.contextMenu(trigger);
}

// Basic context menu setup
const BasicContextMenu = () => (
  <ContextMenu>
    <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Item 1</ContextMenuItem>
      <ContextMenuItem>Item 2</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Item 3</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

describe('ContextMenu', () => {
  describe('Basic rendering', () => {
    it('renders the trigger properly', () => {
      const { asFragment } = render(<BasicContextMenu />);
      expect(screen.getByText('Right-click me')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders content when opened via right-click', () => {
      const { asFragment } = render(<BasicContextMenu />);
      openContextMenu('Right-click me');
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies data-slot attributes correctly', () => {
      render(<BasicContextMenu />);
      const trigger = screen.getByText('Right-click me');
      expect(trigger).toHaveAttribute('data-slot', 'context-menu-trigger');

      openContextMenu('Right-click me');
      const content = screen.getByRole('menu');
      expect(content).toHaveAttribute('data-slot', 'context-menu-content');
    });
  });

  describe('ContextMenuItem', () => {
    it('renders default variant properly', () => {
      render(<BasicContextMenu />);
      openContextMenu('Right-click me');
      const item = screen.getByText('Item 1');
      expect(item).toHaveAttribute('data-variant', 'default');
    });

    it('renders destructive variant properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      const item = screen.getByText('Delete');
      expect(item).toHaveAttribute('data-variant', 'destructive');
    });

    it('renders with inset properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem inset>Inset Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      const item = screen.getByText('Inset Item');
      expect(item).toHaveAttribute('data-inset', 'true');
    });

    it('handles onClick events', () => {
      const handleClick = vi.fn();

      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={handleClick}>Clickable Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );

      openContextMenu('Trigger');
      fireEvent.click(screen.getByText('Clickable Item'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies custom className', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem className="custom-class">Custom Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Custom Item')).toHaveClass('custom-class');
    });
  });

  describe('ContextMenuCheckboxItem', () => {
    it('renders unchecked state properly', () => {
      const { asFragment } = render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuCheckboxItem>Unchecked Item</ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Unchecked Item')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders checked state properly', () => {
      const { asFragment } = render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuCheckboxItem checked>Checked Item</ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Checked Item')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('handles onCheckedChange events', () => {
      const handleCheckedChange = vi.fn();

      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuCheckboxItem onCheckedChange={handleCheckedChange}>Toggle Item</ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>,
      );

      openContextMenu('Trigger');
      fireEvent.click(screen.getByText('Toggle Item'));
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });
  });

  describe('ContextMenuRadioGroup and ContextMenuRadioItem', () => {
    it('renders radio group properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuRadioGroup value="option1">
              <ContextMenuRadioItem value="option1">Option 1</ContextMenuRadioItem>
              <ContextMenuRadioItem value="option2">Option 2</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('handles onValueChange events', () => {
      const handleValueChange = vi.fn();

      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuRadioGroup value="option1" onValueChange={handleValueChange}>
              <ContextMenuRadioItem value="option1">Option 1</ContextMenuRadioItem>
              <ContextMenuRadioItem value="option2">Option 2</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>,
      );

      openContextMenu('Trigger');
      fireEvent.click(screen.getByText('Option 2'));
      expect(handleValueChange).toHaveBeenCalledWith('option2');
    });
  });

  describe('ContextMenuLabel', () => {
    it('renders properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Label Text</ContextMenuLabel>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Label Text')).toBeInTheDocument();
    });

    it('renders with inset properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel inset>Inset Label</ContextMenuLabel>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Inset Label')).toHaveAttribute('data-inset', 'true');
    });
  });

  describe('ContextMenuSeparator', () => {
    it('renders properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Item 1</ContextMenuItem>
            <ContextMenuSeparator data-testid="separator" />
            <ContextMenuItem>Item 2</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByTestId('separator')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuSeparator className="custom-separator" data-testid="separator" />
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByTestId('separator')).toHaveClass('custom-separator');
    });
  });

  describe('ContextMenuShortcut', () => {
    it('renders properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              Item
              <ContextMenuShortcut>⌘K</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('⌘K')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              Item
              <ContextMenuShortcut className="custom-shortcut">⌘K</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('⌘K')).toHaveClass('custom-shortcut');
    });
  });

  describe('ContextMenuSub components', () => {
    it('renders sub menu trigger properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuSub>
              <ContextMenuSubTrigger>Sub Menu</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Sub Item</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Sub Menu')).toBeInTheDocument();
    });

    it('renders sub trigger with inset properly', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>Inset Sub Menu</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Sub Item</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      expect(screen.getByText('Inset Sub Menu')).toHaveAttribute('data-inset', 'true');
    });
  });

  describe('Complex context menu', () => {
    it('renders all components together properly', () => {
      const { asFragment } = render(
        <ContextMenu>
          <ContextMenuTrigger>Complex Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Paste
                <ContextMenuShortcut>⌘V</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem>Show Hidden</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked>Show Details</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="list">
              <ContextMenuRadioItem value="list">List View</ContextMenuRadioItem>
              <ContextMenuRadioItem value="grid">Grid View</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>More options</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Sub item 1</ContextMenuItem>
                <ContextMenuItem>Sub item 2</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>,
      );

      openContextMenu('Complex Trigger');

      expect(screen.getByText('Actions')).toBeInTheDocument();
      expect(screen.getByText('Copy')).toBeInTheDocument();
      expect(screen.getByText('Paste')).toBeInTheDocument();
      expect(screen.getByText('Show Hidden')).toBeInTheDocument();
      expect(screen.getByText('Show Details')).toBeInTheDocument();
      expect(screen.getByText('List View')).toBeInTheDocument();
      expect(screen.getByText('Grid View')).toBeInTheDocument();
      expect(screen.getByText('More options')).toBeInTheDocument();
      expect(screen.getByText('⌘C')).toBeInTheDocument();
      expect(screen.getByText('⌘V')).toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Error handling', () => {
    it('handles missing props gracefully', () => {
      expect(() => {
        render(
          <ContextMenu>
            <ContextMenuTrigger />
            <ContextMenuContent />
          </ContextMenu>,
        );
      }).not.toThrow();
    });

    it('handles disabled state', () => {
      render(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem disabled>Disabled Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>,
      );
      openContextMenu('Trigger');
      const item = screen.getByText('Disabled Item');
      expect(item).toHaveAttribute('data-disabled');
    });
  });
});
