import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
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
