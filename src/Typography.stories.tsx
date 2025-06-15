import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment, useEffect, useRef, useState } from 'react';

import { Heading, type HeadingProps } from '@/elements/heading';

const meta = {} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const fontFamilies = ['roboto', 'inter', 'ubuntu-sans-mono'];

const SampleTextRow: React.FC<{
  className: string;
  classLabel: string;
  rowKey: string | number;
}> = ({ className, classLabel, rowKey }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const [metrics, setMetrics] = useState({
    fontSize: '—',
    lineHeight: '—',
    letterSpacing: '-',
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Wait for layout, then read the computed styles
    const { fontSize, lineHeight, letterSpacing } = window.getComputedStyle(el);
    setMetrics({ fontSize, lineHeight, letterSpacing });
  }, []);

  return (
    <tr className="align-bottom border-t border-b border-gray-200" key={rowKey}>
      <td className="pr-4">
        <span ref={ref} className={className}>
          The quick brown fox jumps over the lazy dog.
        </span>
      </td>
      <td className="pr-3 text-xs font-mono">{metrics.fontSize}</td>
      <td className="pr-3 text-xs font-mono">{metrics.lineHeight}</td>
      <td className="pr-3 text-xs font-mono">{metrics.letterSpacing === 'normal' ? '0px' : metrics.letterSpacing}</td>
      <td className="h-[30px] text-xs font-mono">{classLabel}</td>
    </tr>
  );
};

export const TextExample: Story = {
  render: () => {
    // Safelist: font-roboto font-inter font-ubuntu-sans-mono
    //           font-normal font-medium
    //           text-2xl text-xl text-lg text-md text-sm text-xs

    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    const weights = ['normal', 'medium'];

    return (
      <table className="[&_td]:whitespace-nowrap border-collapse border-spacing-0">
        {fontFamilies.map((family) => (
          <Fragment key={family}>
            {weights.map((weight) => (
              <tbody key={`${family}/${weight}`}>
                <tr>
                  <td colSpan={2} className="pt-10">
                    <div className="capitalize text-xl font-medium">
                      {family} {weight}
                    </div>
                  </td>
                </tr>
                {sizes.map((size) => {
                  const cls = `font-${family} font-${weight} text-${size}`;
                  return <SampleTextRow key={size} rowKey={size} className={cls} classLabel={`"${cls}"`} />;
                })}
              </tbody>
            ))}
          </Fragment>
        ))}
      </table>
    );
  },
};

const SampleHeadingRow: React.FC<{
  className: string;
  classLabel: string;
  size: HeadingProps['size'];
}> = ({ className, classLabel, size }) => {
  const ref = useRef(null);

  const [metrics, setMetrics] = useState({
    fontSize: '—',
    lineHeight: '—',
    letterSpacing: '-',
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Wait for layout, then read the computed styles
    const { fontSize, lineHeight, letterSpacing } = window.getComputedStyle(el);
    setMetrics({ fontSize, lineHeight, letterSpacing });
  }, []);

  return (
    <tr className="align-bottom border-t border-b border-gray-200">
      <td className="pr-4">
        <Heading ref={ref} size={size} className={className}>
          The quick brown fox jumps over the lazy dog.
        </Heading>
      </td>
      <td className="pr-3 text-xs font-mono">{metrics.fontSize}</td>
      <td className="pr-3 text-xs font-mono">{metrics.lineHeight}</td>
      <td className="pr-3 text-xs font-mono">{metrics.letterSpacing === 'normal' ? '0px' : metrics.letterSpacing}</td>
      <td className="h-[30px] text-xs font-mono">{`<Heading className=${classLabel} size="${size}" />`}</td>
    </tr>
  );
};

export const HeadingExample: Story = {
  render: () => {
    // Safelist: font-roboto font-inter font-ubuntu-sans-mono
    const sizes = [
      '9xl',
      '8xl',
      '7xl',
      '6xl',
      '5xl',
      '4xl',
      '3xl',
      '2xl',
      'xl',
      'lg',
      'md',
      'sm',
    ] as HeadingProps['size'][];

    return (
      <table className="[&_td]:whitespace-nowrap border-collapse border-spacing-0">
        {fontFamilies.map((family) => (
          <tbody key={family}>
            <tr>
              <td colSpan={2} className="pt-10">
                <div className="capitalize text-xl font-medium">{family}</div>
              </td>
            </tr>
            {sizes.map((size) => {
              const cls = `font-${family}`;
              return <SampleHeadingRow key={size} size={size} className={cls} classLabel={`"${cls}"`} />;
            })}
          </tbody>
        ))}
      </table>
    );
  },
};
