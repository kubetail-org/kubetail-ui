import type { Meta, StoryObj } from '@storybook/react-vite';
import { AtomIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const meta = {
  title: 'Design System/Colors',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BackgroundColors: Story = {
  render: () => {
    const bgClasses = [
      'bg-bg',
      'bg-bg-subtle',
      'bg-bg-disabled',
      'bg-bg-primary',
      'bg-bg-primary-hover',
      'bg-bg-primary-active',
      'bg-bg-secondary',
      'bg-bg-secondary-hover',
      'bg-bg-secondary-active',
      'bg-bg-error-strong',
      'bg-bg-error-strong-hover',
      'bg-bg-error-strong-active',
      'bg-bg-elevated',
    ];
    return (
      <ul className="space-y-4">
        {bgClasses.map((bgCls) => (
          <li>
            <div className={cn('w-[40px] h-[40px] border border-dotted border-gray-200', bgCls)} />
            <code className="text-xs text-text-muted">&quot;{bgCls}&quot;</code>
          </li>
        ))}
      </ul>
    );
  },
};

export const BorderColors: Story = {
  render: () => {
    const classes = [
      'border-border',
      'border-border-hover',
      'border-border-input',
      'border-border-input-hover',
      'border-border-disabled',
      'border-border-focusRing',
    ];
    return (
      <ul className="space-y-4">
        {classes.map((cls) => (
          <li>
            <div className={cn('w-[40px] h-[40px] border', cls)} />
            <code className="text-xs text-text-muted">&quot;border {cls}&quot;</code>
          </li>
        ))}
      </ul>
    );
  },
};

export const IconColors: Story = {
  render: () => {
    const classes = ['text-icon', 'text-icon-disabled'];
    return (
      <ul className="space-y-4">
        {classes.map((cls) => (
          <li>
            <AtomIcon className={cn('w-[40px] h-[40px]', cls)} />
            <code className="text-xs text-text-muted">&quot;{cls}&quot;</code>
          </li>
        ))}
      </ul>
    );
  },
};

export const TextColors: Story = {
  render: () => {
    const classes = ['text-text', 'text-text-muted', 'text-text-disabled', 'text-text-on-color'];
    return (
      <ul className="space-y-4">
        {classes.map((cls) => (
          <li>
            <div className={cls}>Hello world</div>
            <code className="text-xs text-text-muted">&quot;{cls}&quot;</code>
          </li>
        ))}
      </ul>
    );
  },
};
