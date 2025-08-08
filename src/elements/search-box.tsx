import { forwardRef } from 'react';
import { Search } from 'lucide-react';

import { Input } from '@/elements/input';
import { cn } from '@/lib/utils';

export type SearchBoxProps = React.ComponentProps<typeof Input> & {
  containerClassName?: string;
};

/**
 * A compact search box.
 * - Uses shadcn <Input/>
 * - Leading search icon
 */
const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ className, containerClassName, placeholder = '', ...props }, ref) => {
    const { disabled } = props;

    return (
      <div className={cn('relative w-full max-w-sm', containerClassName)}>
        <Search
          aria-hidden
          className={cn(
            'pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground',
            disabled && 'opacity-50',
          )}
        />
        <Input ref={ref} type="search" placeholder={placeholder} className={cn('pl-9', className)} {...props} />
      </div>
    );
  },
);

SearchBox.displayName = 'SearchBox';

export { SearchBox };
