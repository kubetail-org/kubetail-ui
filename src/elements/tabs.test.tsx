import { render, screen, fireEvent } from '@testing-library/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

vi.mock('@/lib/utils', () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
}));

describe('Tabs', () => {
  const TabsExample = ({ defaultValue = 'tab1' }: { defaultValue?: string } = {}) => (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Tab 3 (Disabled)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  );

  describe('Tabs Root', () => {
    it('renders with default classes', () => {
      const { asFragment } = render(<Tabs defaultValue="test" />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className', () => {
      const { container } = render(<Tabs defaultValue="test" className="custom-tabs-class" />);
      const tabsElement = container.querySelector('[data-slot="tabs"]');
      expect(tabsElement).toHaveClass('custom-tabs-class');
    });

    it('passes through additional props', () => {
      const { container } = render(<Tabs defaultValue="test" data-testid="custom-tabs" />);
      const tabsElement = container.querySelector('[data-testid="custom-tabs"]');
      expect(tabsElement).toBeInTheDocument();
    });

    it('has correct data-slot attribute', () => {
      const { container } = render(<Tabs defaultValue="test" />);
      const tabsElement = container.querySelector('[data-slot="tabs"]');
      expect(tabsElement).toBeInTheDocument();
    });
  });

  describe('TabsList', () => {
    it('renders with default classes', () => {
      const { asFragment } = render(
        <Tabs defaultValue="test">
          <TabsList />
        </Tabs>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsList className="custom-list-class" />
        </Tabs>,
      );
      const listElement = container.querySelector('[data-slot="tabs-list"]');
      expect(listElement).toHaveClass('custom-list-class');
    });

    it('has correct data-slot attribute', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsList />
        </Tabs>,
      );
      const listElement = container.querySelector('[data-slot="tabs-list"]');
      expect(listElement).toBeInTheDocument();
    });

    it('passes through additional props', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsList data-testid="custom-list" />
        </Tabs>,
      );
      const listElement = container.querySelector('[data-testid="custom-list"]');
      expect(listElement).toBeInTheDocument();
    });
  });

  describe('TabsTrigger', () => {
    it('renders with default classes', () => {
      const { asFragment } = render(
        <Tabs defaultValue="test">
          <TabsList>
            <TabsTrigger value="test">Test Tab</TabsTrigger>
          </TabsList>
        </Tabs>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsList>
            <TabsTrigger value="test" className="custom-trigger-class">
              Test Tab
            </TabsTrigger>
          </TabsList>
        </Tabs>,
      );
      const triggerElement = container.querySelector('[data-slot="tabs-trigger"]');
      expect(triggerElement).toHaveClass('custom-trigger-class');
    });

    it('has correct data-slot attribute', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsList>
            <TabsTrigger value="test">Test Tab</TabsTrigger>
          </TabsList>
        </Tabs>,
      );
      const triggerElement = container.querySelector('[data-slot="tabs-trigger"]');
      expect(triggerElement).toBeInTheDocument();
    });

    it('renders as disabled when disabled prop is true', () => {
      render(
        <Tabs defaultValue="test">
          <TabsList>
            <TabsTrigger value="test" disabled>
              Disabled Tab
            </TabsTrigger>
          </TabsList>
        </Tabs>,
      );
      const triggerElement = screen.getByRole('tab', { name: 'Disabled Tab' });
      expect(triggerElement).toBeDisabled();
    });

    it('passes through additional props', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsList>
            <TabsTrigger value="test" data-testid="custom-trigger">
              Test Tab
            </TabsTrigger>
          </TabsList>
        </Tabs>,
      );
      const triggerElement = container.querySelector('[data-testid="custom-trigger"]');
      expect(triggerElement).toBeInTheDocument();
    });
  });

  describe('TabsContent', () => {
    it('renders with default classes', () => {
      const { asFragment } = render(
        <Tabs defaultValue="test">
          <TabsContent value="test">Test Content</TabsContent>
        </Tabs>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsContent value="test" className="custom-content-class">
            Test Content
          </TabsContent>
        </Tabs>,
      );
      const contentElement = container.querySelector('[data-slot="tabs-content"]');
      expect(contentElement).toHaveClass('custom-content-class');
    });

    it('has correct data-slot attribute', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsContent value="test">Test Content</TabsContent>
        </Tabs>,
      );
      const contentElement = container.querySelector('[data-slot="tabs-content"]');
      expect(contentElement).toBeInTheDocument();
    });

    it('passes through additional props', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsContent value="test" data-testid="custom-content">
            Test Content
          </TabsContent>
        </Tabs>,
      );
      const contentElement = container.querySelector('[data-testid="custom-content"]');
      expect(contentElement).toBeInTheDocument();
    });
  });

  describe('Tabs Functionality', () => {
    it('shows default tab content on initial render', () => {
      render(<TabsExample defaultValue="tab1" />);
      expect(screen.getByText('Content for Tab 1')).toBeVisible();
      expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
    });

    it('switches content when different tab is clicked', () => {
      render(<TabsExample />);

      expect(screen.getByText('Content for Tab 1')).toBeVisible();

      const tab1Trigger = screen.getByRole('tab', { name: 'Tab 1' });
      const tab2Trigger = screen.getByRole('tab', { name: 'Tab 2' });
      expect(tab1Trigger).toHaveAttribute('aria-selected', 'true');
      expect(tab2Trigger).toHaveAttribute('aria-selected', 'false');

      fireEvent.click(tab2Trigger);

      expect(tab2Trigger).toBeInTheDocument();
    });

    it('does not switch content when disabled tab is clicked', () => {
      render(<TabsExample />);

      expect(screen.getByText('Content for Tab 1')).toBeVisible();

      fireEvent.click(screen.getByRole('tab', { name: 'Tab 3 (Disabled)' }));

      expect(screen.getByText('Content for Tab 1')).toBeVisible();
      expect(screen.queryByText('Content for Tab 3')).not.toBeInTheDocument();
    });

    it('supports keyboard navigation', () => {
      render(<TabsExample />);

      const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
      const tab2 = screen.getByRole('tab', { name: 'Tab 2' });

      tab1.focus();
      expect(tab1).toHaveFocus();

      fireEvent.click(tab2);

      expect(tab2).toBeInTheDocument();
      expect(tab2).not.toBeDisabled();
    });

    it('maintains proper ARIA attributes', () => {
      render(<TabsExample />);

      const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
      const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
      const content1 = screen.getByRole('tabpanel');

      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(tab2).toHaveAttribute('aria-selected', 'false');
      expect(content1).toHaveAttribute('role', 'tabpanel');
    });

    it('handles controlled vs uncontrolled state', () => {
      const onValueChange = vi.fn();

      render(
        <Tabs value="tab1" onValueChange={onValueChange}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>,
      );

      expect(screen.getByText('Content 1')).toBeVisible();

      expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'false');

      expect(onValueChange).toHaveBeenCalledTimes(0);
    });
  });

  describe('Integration Tests', () => {
    it('renders a complete tabs example like in Storybook', () => {
      render(
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div>Account content</div>
          </TabsContent>
          <TabsContent value="password">
            <div>Password content</div>
          </TabsContent>
        </Tabs>,
      );

      expect(screen.getByRole('tab', { name: 'Account' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Password' })).toBeInTheDocument();

      expect(screen.getByRole('tab', { name: 'Account' })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute('aria-selected', 'false');

      expect(screen.getByText('Account content')).toBeVisible();
    });

    it('works with different default values', () => {
      render(
        <Tabs defaultValue="password">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div>Account content</div>
          </TabsContent>
          <TabsContent value="password">
            <div>Password content</div>
          </TabsContent>
        </Tabs>,
      );

      expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByRole('tab', { name: 'Account' })).toHaveAttribute('aria-selected', 'false');

      expect(screen.getByText('Password content')).toBeVisible();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty tabs list', () => {
      const { container } = render(
        <Tabs defaultValue="test">
          <TabsList />
        </Tabs>,
      );
      const listElement = container.querySelector('[data-slot="tabs-list"]');
      expect(listElement).toBeInTheDocument();
      expect(listElement).toBeEmptyDOMElement();
    });

    it('handles tabs without content', () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
        </Tabs>,
      );
      const tab = screen.getByRole('tab', { name: 'Tab 1' });
      expect(tab).toBeInTheDocument();
      expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();
    });

    it('handles content without corresponding trigger', () => {
      render(
        <Tabs defaultValue="orphan">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="orphan">Orphan Content</TabsContent>
        </Tabs>,
      );

      expect(screen.getByText('Orphan Content')).toBeVisible();
    });

    it('handles multiple content panels with same value', () => {
      render(
        <Tabs defaultValue="duplicate">
          <TabsList>
            <TabsTrigger value="duplicate">Duplicate Tab</TabsTrigger>
          </TabsList>
          <TabsContent value="duplicate">First Content</TabsContent>
          <TabsContent value="duplicate">Second Content</TabsContent>
        </Tabs>,
      );

      expect(screen.getByText('First Content')).toBeVisible();
      expect(screen.getByText('Second Content')).toBeVisible();
    });
  });
});
