import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from '@/elements/heading';

const meta = {} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const fontFamilies = ['roboto', 'inter', 'ubuntu-sans-mono'];

export const TextExample: Story = {
  render: () => {
    // Safelist: font-roboto font-inter font-ubuntu-sans-mono

    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    const weights = ['normal', 'medium'];

    return (
      <table className="[&_td]:whitespace-nowrap">
        {fontFamilies.map((family) => (
          <>
            {weights.map((weight) => (
              <tbody key={`${family}/${weight}`}>
                <tr>
                  <td colSpan={2} className="pt-3">
                    <div className="capitalize text-xl font-medium">
                      {family} {weight}
                    </div>
                  </td>
                </tr>
                {sizes.map((size) => {
                  const cls = `font-${family} font-${weight} text-${size}`;
                  return (
                    <tr className="align-middle" key={size}>
                      <td className="h-[30px] pr-4 text-xs font-mono">&quot;{cls}&quot;</td>
                      <td>
                        <span className={cls}>The quick brown fox jumps over the lazy dog.</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ))}
          </>
        ))}
      </table>
    );
  },
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
};
