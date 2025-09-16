import { render } from '@testing-library/react';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/elements/dialog';

describe('DialogContent', () => {
  it('renders DialogContent with children', () => {
    const { getByTestId } = render(
      <Dialog defaultOpen>
        <DialogTitle />
        <DialogDescription />
        <DialogContent data-testid="content">
          <div>Child</div>
        </DialogContent>
      </Dialog>,
    );
    expect(getByTestId('content')).toBeInTheDocument();
    expect(getByTestId('content')).toHaveTextContent('Child');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(
      <Dialog defaultOpen>
        <DialogTitle />
        <DialogDescription />
        <DialogContent data-testid="content" className="custom-class" />
      </Dialog>,
    );
    expect(getByTestId('content')).toHaveClass('custom-class');
  });
});

describe('DialogHeader', () => {
  it('renders DialogHeader with children', () => {
    const { getByTestId } = render(
      <DialogHeader data-testid="header">
        <div>Child</div>
      </DialogHeader>,
    );
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('header')).toHaveTextContent('Child');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(<DialogHeader data-testid="header" className="custom-class" />);
    expect(getByTestId('header')).toHaveClass('custom-class');
  });
});

describe('DialogFooter', () => {
  it('renders DialogFooter with children', () => {
    const { getByTestId } = render(
      <DialogFooter data-testid="footer">
        <div>Child</div>
      </DialogFooter>,
    );
    expect(getByTestId('footer')).toBeInTheDocument();
    expect(getByTestId('footer')).toHaveTextContent('Child');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(<DialogFooter data-testid="footer" className="custom-class" />);
    expect(getByTestId('footer')).toHaveClass('custom-class');
  });
});

describe('DialogTitle', () => {
  it('renders DialogTitle with children', () => {
    const { getByTestId } = render(
      <Dialog defaultOpen>
        <DialogTitle data-testid="title">
          <div>Child</div>
        </DialogTitle>
      </Dialog>,
    );
    expect(getByTestId('title')).toBeInTheDocument();
    expect(getByTestId('title')).toHaveTextContent('Child');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(
      <Dialog>
        <DialogTitle data-testid="title" className="custom-class" />
      </Dialog>,
    );
    expect(getByTestId('title')).toHaveClass('custom-class');
  });
});

describe('DialogDescription', () => {
  it('renders DialogDescription with children', () => {
    const { getByTestId } = render(
      <Dialog defaultOpen>
        <DialogDescription data-testid="description">Child</DialogDescription>
      </Dialog>,
    );
    expect(getByTestId('description')).toBeInTheDocument();
    expect(getByTestId('description')).toHaveTextContent('Child');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(
      <Dialog>
        <DialogDescription data-testid="description" className="custom-class" />
      </Dialog>,
    );
    expect(getByTestId('description')).toHaveClass('custom-class');
  });
});
