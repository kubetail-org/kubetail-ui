import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Skeleton } from '@/elements/skeleton';

function BasicSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

describe('Skelton', () => {
  describe('Basic rendering', () => {
    it('renders properly', () => {
      const { asFragment } = render(<BasicSkeleton />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
