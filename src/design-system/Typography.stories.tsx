import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment, useEffect, useRef, useState } from 'react';

const meta = {
  title: 'Design System/Typography',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const fontFamilies = ['roboto', 'inter', 'ubuntu-sans-mono'];

const SampleRow: React.FC<{
  className: string;
  label: string;
}> = ({ className, label }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const [metrics, setMetrics] = useState({
    fontSize: '—',
    fontWeight: '-',
    letterSpacing: '-',
    lineHeight: '—',
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { fontSize, fontWeight, letterSpacing, lineHeight } = window.getComputedStyle(el);
    setMetrics({ fontSize, fontWeight, letterSpacing, lineHeight });
  }, []);

  return (
    <>
      <tr className="border-t border-b border-gray-300">
        <td>
          <span ref={ref} className={className}>
            {label}
          </span>
        </td>
      </tr>
      <tr className="align-top h-[50px]">
        <td className="text-xs font-mono space-x-2">
          <span>{`"${className}"`}</span>
          <span>{metrics.fontSize}</span>
          <span>{metrics.lineHeight}</span>
          <span>{metrics.letterSpacing === 'normal' ? '0px' : metrics.letterSpacing}</span>
          <span>{metrics.fontWeight}</span>
        </td>
      </tr>
    </>
  );
};

export const TextExample: Story = {
  render: () => {
    // Safelist: text-2xl text-xl text-lg text-md text-sm text-xs

    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
      <table className="[&_td]:whitespace-nowrap border-collapse border-spacing-0">
        <tbody>
          {sizes.map((size) => {
            const cls = `text-${size}`;
            return (
              <SampleRow
                key={size}
                className={cls}
                label="The quick brown fox jumped over the lazy dog. [0123456789]"
              />
            );
          })}
        </tbody>
      </table>
    );
  },
};

export const HeadingExample: Story = {
  render: () => {
    // Safelist: text-heading-sm text-heading-md text-heading-lg text-heading-xl text-heading-2xl
    //           text-heading-3xl text-heading-4xl text-heading-5xl text-heading-6xl text-heading-7xl
    //           text-heading-8xl text-heading-9xl
    const sizes = ['9xl', '8xl', '7xl', '6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm'];

    return (
      <table className="[&_td]:whitespace-nowrap border-collapse border-spacing-0">
        <tbody>
          {sizes.map((size) => {
            const cls = `text-heading-${size}`;
            return <SampleRow key={size} className={cls} label="Hello World" />;
          })}
        </tbody>
      </table>
    );
  },
};
