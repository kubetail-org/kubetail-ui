import type { Meta } from '@storybook/react-vite';
import { Atom } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/elements/sidebar';

const meta = {
  title: 'Elements/Sidebar',
  tags: ['autodocs'],
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: `
A reusable Sidebar component.

        `,
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

export function Basic() {
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

export function FullyFeatured() {
  const items = [
    {
      title: 'Home',
      url: '#',
    },
    {
      title: 'Inbox',
      url: '#',
    },
    {
      title: 'Calendar',
      url: '#',
    },
    {
      title: 'Search',
      url: '#',
    },
    {
      title: 'Settings',
      url: '#',
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>Header</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.title === 'Home'}
                      // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label
                      render={<a href={item.url} />}
                    >
                      <Atom />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>Footer</SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <main>
        <SidebarTrigger />
        <h1>Main content</h1>
      </main>
    </SidebarProvider>
  );
}

export function FloatingExample() {
  const items = [
    {
      title: 'Home',
      url: '#',
    },
    {
      title: 'Inbox',
      url: '#',
    },
    {
      title: 'Calendar',
      url: '#',
    },
    {
      title: 'Search',
      url: '#',
    },
    {
      title: 'Settings',
      url: '#',
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>Header</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.title === 'Home'}
                      // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label
                      render={<a href={item.url} />}
                    >
                      <Atom />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
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
