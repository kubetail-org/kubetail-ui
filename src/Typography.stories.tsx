import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment, useEffect, useRef, useState } from 'react';

const meta = {} satisfies Meta;

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
    <tr className="align-middle border-t border-b border-gray-200">
      <td className="pr-4">
        <span ref={ref} className={className}>
          {label}
        </span>
      </td>
      <td className="pr-3 text-xs font-mono">{metrics.fontSize}</td>
      <td className="pr-3 text-xs font-mono">{metrics.lineHeight}</td>
      <td className="pr-3 text-xs font-mono">{metrics.letterSpacing === 'normal' ? '0px' : metrics.letterSpacing}</td>
      <td className="pr-4 text-xs font-mono">{metrics.fontWeight}</td>
      <td className="text-xs font-mono">{`"${className}"`}</td>
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
                  <td colSpan={6} className="pt-10">
                    <div className="capitalize text-xl font-medium">
                      {family} {weight}
                    </div>
                  </td>
                </tr>
                {sizes.map((size) => {
                  const cls = `font-${family} font-${weight} text-${size}`;
                  return (
                    <SampleRow
                      key={size}
                      className={cls}
                      label="The quick brown fox jumped over the lazy dog. [0123456789]"
                    />
                  );
                })}
              </tbody>
            ))}
          </Fragment>
        ))}
      </table>
    );
  },
};

export const HeadingExample: Story = {
  render: () => {
    // Safelist: font-roboto font-inter font-ubuntu-sans-mono
    //           text-heading-sm text-heading-md text-heading-lg text-heading-xl text-heading-2xl
    //           text-heading-3xl text-heading-4xl text-heading-5xl text-heading-6xl text-heading-7xl
    //           text-heading-8xl text-heading-9xl
    const sizes = ['9xl', '8xl', '7xl', '6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm'];

    return (
      <table className="[&_td]:whitespace-nowrap border-collapse border-spacing-0">
        {fontFamilies.map((family) => (
          <tbody key={family}>
            <tr>
              <td colSpan={6} className="pt-10">
                <div className="capitalize text-xl font-medium">{family}</div>
              </td>
            </tr>
            {sizes.map((size) => {
              const cls = `font-${family} text-heading-${size}`;
              return <SampleRow key={size} className={cls} label="Hello World" />;
            })}
          </tbody>
        ))}
      </table>
    );
  },
};
