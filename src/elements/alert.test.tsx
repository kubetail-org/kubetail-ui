import { render } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription, AlertAction } from './alert';

describe('Alert', () => {
  it('renders with children', () => {
    const { getByRole } = render(<Alert>Alert content</Alert>);
    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Alert content');
  });

  it('applies custom className', () => {
    const { getByRole } = render(<Alert className="custom-class" />);
    expect(getByRole('alert')).toHaveClass('custom-class');
  });

  it('has data-slot attribute', () => {
    const { getByRole } = render(<Alert />);
    expect(getByRole('alert')).toHaveAttribute('data-slot', 'alert');
  });

  it('renders default variant', () => {
    const { getByRole } = render(<Alert />);
    expect(getByRole('alert')).toHaveClass('bg-card');
  });

  it('renders destructive variant', () => {
    const { getByRole } = render(<Alert variant="destructive" />);
    expect(getByRole('alert')).toHaveClass('text-destructive');
  });
});

describe.each([
  ['AlertTitle', AlertTitle, 'alert-title'],
  ['AlertDescription', AlertDescription, 'alert-description'],
  ['AlertAction', AlertAction, 'alert-action'],
] as const)('%s', (_, Component, slot) => {
  it('renders with children', () => {
    const { getByTestId } = render(<Component data-testid="el">Content</Component>);
    expect(getByTestId('el')).toBeInTheDocument();
    expect(getByTestId('el')).toHaveTextContent('Content');
  });

  it('has data-slot attribute', () => {
    const { getByTestId } = render(<Component data-testid="el">Content</Component>);
    expect(getByTestId('el')).toHaveAttribute('data-slot', slot);
  });

  it('applies custom className', () => {
    const { getByTestId } = render(
      <Component data-testid="el" className="custom-class">
        Content
      </Component>,
    );
    expect(getByTestId('el')).toHaveClass('custom-class');
  });
});

describe('Alert composition', () => {
  it('renders a full alert with all sub-components', () => {
    const { getByRole, getByTestId } = render(
      <Alert>
        <AlertTitle data-testid="title">Warning</AlertTitle>
        <AlertDescription data-testid="desc">Something happened.</AlertDescription>
        <AlertAction data-testid="action">
          <button type="button">Dismiss</button>
        </AlertAction>
      </Alert>,
    );
    expect(getByRole('alert')).toBeInTheDocument();
    expect(getByTestId('title')).toHaveTextContent('Warning');
    expect(getByTestId('desc')).toHaveTextContent('Something happened.');
    expect(getByTestId('action')).toHaveTextContent('Dismiss');
  });
});
