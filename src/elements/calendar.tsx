import { DayPicker, getDefaultClassNames } from 'react-day-picker';

import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({ className, showOutsideDays = true, ...props }: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="single"
      showOutsideDays={showOutsideDays}
      classNames={{
        today: 'bg-accent text-accent-foreground',
        selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        root: cn(defaultClassNames.root, className),
        chevron: `${defaultClassNames.chevron} fill-amber-500`,
        weekday: 'text-muted-foreground font-normal text-sm',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        outside: 'text-muted-foreground',
      }}
      {...props}
    />
  );
};

export { Calendar };
