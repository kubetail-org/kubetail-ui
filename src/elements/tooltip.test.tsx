import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '@/elements/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/elements/tooltip';

function BasicTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}

describe('Tooltip', () => {
  describe('Basic rendering', () => {
    it('renders properly', () => {
      const { asFragment } = render(<BasicTooltip />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
