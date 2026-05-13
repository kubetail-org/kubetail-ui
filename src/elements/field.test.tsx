import { render } from '@testing-library/react';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './field';

describe('Field', () => {
  it('renders Field with children', () => {
    const { getByTestId } = render(
      <Field data-testid="field">
        <div>Child</div>
      </Field>,
    );
    expect(getByTestId('field')).toBeInTheDocument();
    expect(getByTestId('field')).toHaveTextContent('Child');
  });

  it('applies custom className', () => {
    const { getByTestId } = render(<Field data-testid="field" className="custom-class" />);
    expect(getByTestId('field')).toHaveClass('custom-class');
  });

  it('sets the orientation data attribute', () => {
    const { getByTestId } = render(<Field data-testid="field" orientation="horizontal" />);
    expect(getByTestId('field')).toHaveAttribute('data-orientation', 'horizontal');
  });
});

describe('FieldSet', () => {
  it('renders a fieldset with children', () => {
    const { getByTestId } = render(
      <FieldSet data-testid="field-set">
        <div>Child</div>
      </FieldSet>,
    );
    expect(getByTestId('field-set').tagName).toBe('FIELDSET');
    expect(getByTestId('field-set')).toHaveTextContent('Child');
  });
});

describe('FieldLegend', () => {
  it('renders FieldLegend with children', () => {
    const { getByTestId } = render(<FieldLegend data-testid="field-legend">Legend</FieldLegend>);
    expect(getByTestId('field-legend').tagName).toBe('LEGEND');
    expect(getByTestId('field-legend')).toHaveTextContent('Legend');
  });

  it('supports the label variant', () => {
    const { getByTestId } = render(
      <FieldLegend data-testid="field-legend" variant="label">
        Legend
      </FieldLegend>,
    );
    expect(getByTestId('field-legend')).toHaveAttribute('data-variant', 'label');
  });
});

describe('FieldGroup', () => {
  it('renders FieldGroup with children', () => {
    const { getByTestId } = render(<FieldGroup data-testid="field-group">Group</FieldGroup>);
    expect(getByTestId('field-group')).toHaveTextContent('Group');
  });
});

describe('FieldContent', () => {
  it('renders FieldContent with children', () => {
    const { getByTestId } = render(<FieldContent data-testid="field-content">Content</FieldContent>);
    expect(getByTestId('field-content')).toHaveTextContent('Content');
  });
});

describe('FieldLabel', () => {
  it('renders FieldLabel with children', () => {
    const { getByTestId } = render(<FieldLabel data-testid="field-label">Label</FieldLabel>);
    expect(getByTestId('field-label')).toHaveTextContent('Label');
  });
});

describe('FieldTitle', () => {
  it('renders FieldTitle with children', () => {
    const { getByTestId } = render(<FieldTitle data-testid="field-title">Title</FieldTitle>);
    expect(getByTestId('field-title')).toHaveTextContent('Title');
  });
});

describe('FieldDescription', () => {
  it('renders FieldDescription with children', () => {
    const { getByTestId } = render(<FieldDescription data-testid="field-description">Description</FieldDescription>);
    expect(getByTestId('field-description').tagName).toBe('P');
    expect(getByTestId('field-description')).toHaveTextContent('Description');
  });
});

describe('FieldSeparator', () => {
  it('renders FieldSeparator without content', () => {
    const { getByTestId } = render(<FieldSeparator data-testid="field-separator" />);
    expect(getByTestId('field-separator')).toHaveAttribute('data-content', 'false');
  });

  it('renders FieldSeparator with content', () => {
    const { getByTestId } = render(<FieldSeparator data-testid="field-separator">or</FieldSeparator>);
    expect(getByTestId('field-separator')).toHaveAttribute('data-content', 'true');
    expect(getByTestId('field-separator')).toHaveTextContent('or');
  });
});

describe('FieldError', () => {
  it('renders children when provided', () => {
    const { getByRole } = render(<FieldError>Something went wrong</FieldError>);
    expect(getByRole('alert')).toHaveTextContent('Something went wrong');
  });

  it('renders a single error message from the errors prop', () => {
    const { getByRole } = render(<FieldError errors={[{ message: 'Required' }]} />);
    expect(getByRole('alert')).toHaveTextContent('Required');
  });

  it('renders a list when multiple unique errors are provided', () => {
    const { getByRole, getAllByRole } = render(
      <FieldError errors={[{ message: 'Too short' }, { message: 'Too short' }, { message: 'Invalid' }]} />,
    );
    expect(getByRole('alert')).toBeInTheDocument();
    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders nothing when there are no errors and no children', () => {
    const { queryByRole } = render(<FieldError />);
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });
});
