import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from '@/elements/heading';

const meta = {} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextExample: Story = {
  render: () => (
    <>
      <div className="text-2xl font-normal">Text 2XL Regular</div>
      <div className="text-2xl font-medium">Text 2XL Medium</div>
      <div className="text-xl font-normal">Text XL Regular</div>
      <div className="text-xl font-medium">Text XL Medium</div>
      <div className="text-lg font-normal">Text L Regular</div>
      <div className="text-lg font-medium">Text L Medium</div>
      <div className="text-md font-normal">Text M Regular</div>
      <div className="text-md font-medium">Text M Medium</div>
      <div className="text-sm font-normal">Text S Regular</div>
      <div className="text-sm font-medium">Text S Medium</div>
      <div className="text-xs font-normal">Text XS Regular</div>
      <div className="text-xs font-medium">Text XS Medium</div>
    </>
  ),
};

export const HeadingExample: Story = {
  render: () => (
    <div className="whitespace-nowrap">
      <Heading size="9xl">Heading 9XL Semibold</Heading>
      <Heading size="8xl">Heading 8XL Semibold</Heading>
      <Heading size="7xl">Heading 7XL Semibold</Heading>
      <Heading size="6xl">Heading 6XL Semibold</Heading>
      <Heading size="5xl">Heading 5XL Semibold</Heading>
      <Heading size="4xl">Heading 4XL Semibold</Heading>
      <Heading size="3xl">Heading 3XL Semibold</Heading>
      <Heading size="2xl">Heading 2XL Semibold</Heading>
      <Heading size="xl">Heading XL Semibold</Heading>
      <Heading size="lg">Heading L Semibold</Heading>
      <Heading size="md">Heading M Semibold</Heading>
      <Heading size="sm">Heading S Semibold</Heading>
    </div>
  ),
}
