import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from './dropdown-menu';

// Basic dropdown menu setup
const BasicDropdownMenu = ({ open = false }: { open?: boolean }) => (
  <DropdownMenu open={open}>
    <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Complex dropdown menu with all components
const ComplexDropdownMenu = ({ open = false }: { open?: boolean }) => (
  <DropdownMenu open={open}>
    <DropdownMenuTrigger>Complex Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
          <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem>Show Toolbar</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked>Show Sidebar</DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value="theme-light">
        <DropdownMenuRadioItem value="theme-light">Light</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="theme-dark">Dark</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="theme-system">System</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Sub item 1</DropdownMenuItem>
          <DropdownMenuItem>Sub item 2</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
);

describe('DropdownMenu', () => {
  describe('Basic rendering', () => {
    it('renders the trigger properly', () => {
      const { asFragment } = render(<BasicDropdownMenu />);
      expect(screen.getByText('Open Menu')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders content when open', () => {
      const { asFragment } = render(<BasicDropdownMenu open />);
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies data-slot attributes correctly', () => {
      render(<BasicDropdownMenu open />);
      const trigger = screen.getByText('Open Menu');
      const content = screen.getByRole('menu');

      expect(trigger).toHaveAttribute('data-slot', 'dropdown-menu-trigger');
      expect(content).toHaveAttribute('data-slot', 'dropdown-menu-content');
    });
  });

  describe('DropdownMenuItem', () => {
    it('renders default variant properly', () => {
      const { asFragment } = render(<BasicDropdownMenu open />);
      const item = screen.getByText('Item 1');
      expect(item).toHaveAttribute('data-variant', 'default');
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders destructive variant properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      const item = screen.getByText('Delete');
      expect(item).toHaveAttribute('data-variant', 'destructive');
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders with inset properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem inset>Inset Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      const item = screen.getByText('Inset Item');
      expect(item).toHaveAttribute('data-inset', 'true');
      expect(asFragment()).toMatchSnapshot();
    });

    it('handles onClick events', () => {
      const handleClick = vi.fn();

      render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleClick}>Clickable Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      fireEvent.click(screen.getByText('Clickable Item'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies custom className', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="custom-class">Custom Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Custom Item')).toHaveClass('custom-class');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('DropdownMenuCheckboxItem', () => {
    it('renders unchecked state properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem>Unchecked Item</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders checked state properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>Checked Item</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('handles onCheckedChange events', () => {
      const handleCheckedChange = vi.fn();

      render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem onCheckedChange={handleCheckedChange}>Toggle Item</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      fireEvent.click(screen.getByText('Toggle Item'));
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('applies custom className', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem className="custom-checkbox">Custom Checkbox</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Custom Checkbox')).toHaveClass('custom-checkbox');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('DropdownMenuRadioGroup and DropdownMenuRadioItem', () => {
    it('renders radio group properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="option1">
              <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('handles onValueChange events', () => {
      const handleValueChange = vi.fn();

      render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="option1" onValueChange={handleValueChange}>
              <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      fireEvent.click(screen.getByText('Option 2'));
      expect(handleValueChange).toHaveBeenCalledWith('option2');
    });

    it('applies custom className to radio items', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="option1">
              <DropdownMenuRadioItem className="custom-radio" value="option1">
                Custom Radio
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Custom Radio')).toHaveClass('custom-radio');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('DropdownMenuLabel', () => {
    it('renders properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Label Text</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Label Text')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders with inset properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel inset>Inset Label</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      const label = screen.getByText('Inset Label');
      expect(label).toHaveAttribute('data-inset', 'true');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="custom-label">Custom Label</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Custom Label')).toHaveClass('custom-label');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('DropdownMenuSeparator', () => {
    it('renders properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuSeparator data-testid="separator" />
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByTestId('separator')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator className="custom-separator" data-testid="separator" />
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByTestId('separator')).toHaveClass('custom-separator');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('DropdownMenuShortcut', () => {
    it('renders properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Item
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('⌘K')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Item
              <DropdownMenuShortcut className="custom-shortcut">⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('⌘K')).toHaveClass('custom-shortcut');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('DropdownMenuSub components', () => {
    it('renders sub menu properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Sub Item</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Sub Menu')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders sub trigger with inset properly', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger inset>Inset Sub Menu</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Sub Item</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      const subTrigger = screen.getByText('Inset Sub Menu');
      expect(subTrigger).toHaveAttribute('data-inset', 'true');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className to sub components', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="custom-sub-trigger">Custom Sub Menu</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="custom-sub-content">
                <DropdownMenuItem>Sub Item</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(screen.getByText('Custom Sub Menu')).toHaveClass('custom-sub-trigger');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Complex dropdown menu', () => {
    it('renders all components together properly', () => {
      const { asFragment } = render(<ComplexDropdownMenu open />);

      // Check all components are rendered
      expect(screen.getByText('My Account')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
      expect(screen.getByText('Show Toolbar')).toBeInTheDocument();
      expect(screen.getByText('Show Sidebar')).toBeInTheDocument();
      expect(screen.getByText('Light')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
      expect(screen.getByText('System')).toBeInTheDocument();
      expect(screen.getByText('More options')).toBeInTheDocument();
      expect(screen.getByText('⇧⌘P')).toBeInTheDocument();
      expect(screen.getByText('⌘,')).toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Content positioning', () => {
    it('renders with custom sideOffset', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className to content', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent className="custom-content">
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      const content = screen.getByRole('menu');
      expect(content).toHaveClass('custom-content');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA roles', () => {
      render(<BasicDropdownMenu open />);

      // When open, trigger might be hidden, so we check for the content and items
      expect(screen.getByRole('menu')).toBeInTheDocument(); // content
      expect(screen.getAllByRole('menuitem')).toHaveLength(3); // items
      expect(screen.getByRole('separator')).toBeInTheDocument(); // separator
    });

    it('supports keyboard navigation', () => {
      render(<BasicDropdownMenu />);

      const trigger = screen.getByText('Open Menu');
      fireEvent.click(trigger);

      // Should be able to navigate with keyboard
      fireEvent.keyDown(trigger, { key: 'ArrowDown' });
      fireEvent.keyDown(trigger, { key: 'Enter' });
    });
  });

  describe('Error handling', () => {
    it('handles missing props gracefully', () => {
      expect(() => {
        render(
          <DropdownMenu>
            <DropdownMenuTrigger />
            <DropdownMenuContent />
          </DropdownMenu>,
        );
      }).not.toThrow();
    });

    it('handles disabled state', () => {
      const { asFragment } = render(
        <DropdownMenu open>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
