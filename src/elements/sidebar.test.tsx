import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/elements/sidebar';

function BasicSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>Header</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>Group 1</SidebarGroup>
          <SidebarGroup>Group 2</SidebarGroup>
        </SidebarContent>
        <SidebarFooter>Footer</SidebarFooter>
      </Sidebar>
      <main>
        <SidebarTrigger />
        <h1>Main content</h1>
      </main>
    </SidebarProvider>
  );
}

describe('Sidebar', () => {
  describe('Basic rendering', () => {
    it('renders properly', () => {
      const { asFragment } = render(<BasicSidebar />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
