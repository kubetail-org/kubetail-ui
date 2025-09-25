import { render } from '@testing-library/react';
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from './card';

describe('Card', () => {
  it('renders Card with children', () => {
    const { getByTestId } = render(
      <Card data-testid="card">
        <div>Child</div>
      </Card>,
    );
    expect(getByTestId('card')).toBeInTheDocument();
    expect(getByTestId('card')).toHaveTextContent('Child');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(<Card data-testid="card" className="custom-class" />);
    expect(getByTestId('card')).toHaveClass('custom-class');
  });
});

describe('CardHeader', () => {
  it('renders CardHeader with children', () => {
    const { getByTestId } = render(
      <CardHeader data-testid="card-header">
        <div>Header</div>
      </CardHeader>,
    );
    expect(getByTestId('card-header')).toBeInTheDocument();
    expect(getByTestId('card-header')).toHaveTextContent('Header');
  });
});

describe('CardTitle', () => {
  it('renders CardTitle with children', () => {
    const { getByTestId } = render(<CardTitle data-testid="card-title">Title</CardTitle>);
    expect(getByTestId('card-title')).toBeInTheDocument();
    expect(getByTestId('card-title')).toHaveTextContent('Title');
  });
});

describe('CardDescription', () => {
  it('renders CardDescription with children', () => {
    const { getByTestId } = render(<CardDescription data-testid="card-description">Description</CardDescription>);
    expect(getByTestId('card-description')).toBeInTheDocument();
    expect(getByTestId('card-description')).toHaveTextContent('Description');
  });
});

describe('CardAction', () => {
  it('renders CardAction with children', () => {
    const { getByTestId } = render(<CardAction data-testid="card-action">Action</CardAction>);
    expect(getByTestId('card-action')).toBeInTheDocument();
    expect(getByTestId('card-action')).toHaveTextContent('Action');
  });
});

describe('CardContent', () => {
  it('renders CardContent with children', () => {
    const { getByTestId } = render(<CardContent data-testid="card-content">Content</CardContent>);
    expect(getByTestId('card-content')).toBeInTheDocument();
    expect(getByTestId('card-content')).toHaveTextContent('Content');
  });
});

describe('CardFooter', () => {
  it('renders CardFooter with children', () => {
    const { getByTestId } = render(<CardFooter data-testid="card-footer">Footer</CardFooter>);
    expect(getByTestId('card-footer')).toBeInTheDocument();
    expect(getByTestId('card-footer')).toHaveTextContent('Footer');
  });
});
