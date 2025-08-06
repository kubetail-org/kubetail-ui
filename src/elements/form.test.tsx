import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from './input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from './form';

const TestFormComponent = ({
  defaultValues = { testField: '' },
  hasError = false,
  errorMessage = 'This field is required',
}: {
  defaultValues?: Record<string, any>;
  hasError?: boolean;
  errorMessage?: string;
}) => {
  const form = useForm({
    defaultValues,
  });

  React.useEffect(() => {
    if (hasError) {
      form.setError('testField', { message: errorMessage });
    } else {
      form.clearErrors('testField');
    }
  }, [form, hasError, errorMessage]);

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="testField"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Test Label</FormLabel>
            <FormControl>
              <Input placeholder="Enter text" {...field} />
            </FormControl>
            <FormDescription>This is a test description.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

// Component to test individual form components with custom props
const CustomFormItemComponent = ({ className }: { className?: string }) => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="test"
        render={() => (
          <FormItem className={className}>
            <div>Content</div>
          </FormItem>
        )}
      />
    </Form>
  );
};

const CustomFormLabelComponent = ({ className }: { className?: string }) => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="test"
        render={() => (
          <FormItem>
            <FormLabel className={className}>Custom Label</FormLabel>
          </FormItem>
        )}
      />
    </Form>
  );
};

const CustomFormDescriptionComponent = ({ className }: { className?: string }) => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="test"
        render={() => (
          <FormItem>
            <FormDescription className={className}>Custom Description</FormDescription>
          </FormItem>
        )}
      />
    </Form>
  );
};

const CustomFormMessageComponent = ({ children }: { children?: React.ReactNode }) => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="test"
        render={() => (
          <FormItem>
            <FormMessage>{children}</FormMessage>
          </FormItem>
        )}
      />
    </Form>
  );
};

const FormFieldContextTestComponent = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField control={form.control} name="contextTest" render={() => <div>Mock render</div>} />
    </Form>
  );
};

const IntegrationTestComponent = ({ defaultValues }: { defaultValues?: Record<string, any> }) => {
  const form = useForm({
    defaultValues,
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="integration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Integration Test</FormLabel>
            <FormControl>
              <Input placeholder="Integration test" {...field} />
            </FormControl>
            <FormDescription>Integration test description</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

const UseFormFieldErrorTestComponent = () => {
  const formField = useFormField();
  return <div>{formField.name}</div>;
};

const UseFormFieldTestComponent = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="hookTest"
        render={() => {
          const HookConsumer = () => {
            const formField = useFormField();
            return (
              <div>
                <span data-testid="field-name">{formField.name}</span>
                <span data-testid="form-item-id">{formField.formItemId}</span>
                <span data-testid="form-description-id">{formField.formDescriptionId}</span>
                <span data-testid="form-message-id">{formField.formMessageId}</span>
                <span data-testid="has-error">{formField.error ? 'true' : 'false'}</span>
              </div>
            );
          };
          return (
            <FormItem>
              <HookConsumer />
            </FormItem>
          );
        }}
      />
    </Form>
  );
};

describe('Form Components', () => {
  describe('Form', () => {
    it('renders form properly', () => {
      const { asFragment } = render(<TestFormComponent />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders with default values', () => {
      render(<TestFormComponent defaultValues={{ testField: 'default value' }} />);
      expect(screen.getByDisplayValue('default value')).toBeInTheDocument();
    });
  });

  describe('FormItem', () => {
    it('renders with correct data-slot attribute', () => {
      const { container } = render(<TestFormComponent />);
      const formItem = container.querySelector('[data-slot="form-item"]');
      expect(formItem).toBeInTheDocument();
      expect(formItem).toHaveClass('grid', 'gap-2');
    });

    it('applies custom className', () => {
      const { container } = render(<CustomFormItemComponent className="custom-class" />);
      const formItem = container.querySelector('[data-slot="form-item"]');
      expect(formItem).toHaveClass('custom-class');
    });
  });

  describe('FormLabel', () => {
    it('renders label with correct attributes', () => {
      render(<TestFormComponent />);
      const label = screen.getByText('Test Label');
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute('data-slot', 'form-label');
    });

    it('shows error state when field has error', () => {
      render(<TestFormComponent hasError />);
      const label = screen.getByText('Test Label');
      expect(label).toHaveAttribute('data-error', 'true');
      expect(label).toHaveClass('data-[error=true]:text-destructive');
    });

    it('does not show error state when field has no error', () => {
      render(<TestFormComponent />);
      const label = screen.getByText('Test Label');
      expect(label).toHaveAttribute('data-error', 'false');
    });

    it('applies custom className', () => {
      render(<CustomFormLabelComponent className="custom-label-class" />);
      const label = screen.getByText('Custom Label');
      expect(label).toHaveClass('custom-label-class');
    });
  });

  describe('FormControl', () => {
    it('renders with correct data-slot attribute', () => {
      const { container } = render(<TestFormComponent />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('data-slot', 'form-control');
    });

    it('sets aria-describedby correctly without error', () => {
      const { container } = render(<TestFormComponent />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('aria-describedby');
      const describedBy = input?.getAttribute('aria-describedby');
      expect(describedBy).toMatch(/-form-item-description$/);
    });

    it('sets aria-describedby correctly with error', () => {
      const { container } = render(<TestFormComponent hasError />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('aria-describedby');
      const describedBy = input?.getAttribute('aria-describedby');
      expect(describedBy).toMatch(/-form-item-description .+-form-item-message$/);
    });

    it('sets aria-invalid to false when no error', () => {
      const { container } = render(<TestFormComponent />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    it('sets aria-invalid to true when error exists', () => {
      const { container } = render(<TestFormComponent hasError />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('FormDescription', () => {
    it('renders description with correct attributes', () => {
      render(<TestFormComponent />);
      const description = screen.getByText('This is a test description.');
      expect(description).toBeInTheDocument();
      expect(description).toHaveAttribute('data-slot', 'form-description');
      expect(description).toHaveClass('text-muted-foreground', 'text-sm');
    });

    it('has correct id attribute', () => {
      render(<TestFormComponent />);
      const description = screen.getByText('This is a test description.');
      expect(description).toHaveAttribute('id');
      expect(description.getAttribute('id')).toMatch(/-form-item-description$/);
    });

    it('applies custom className', () => {
      render(<CustomFormDescriptionComponent className="custom-description-class" />);
      const description = screen.getByText('Custom Description');
      expect(description).toHaveClass('custom-description-class');
    });
  });

  describe('FormMessage', () => {
    it('displays error message when error exists', () => {
      render(<TestFormComponent hasError errorMessage="Custom error message" />);
      const message = screen.getByText('Custom error message');
      expect(message).toBeInTheDocument();
      expect(message).toHaveAttribute('data-slot', 'form-message');
      expect(message).toHaveClass('text-destructive', 'text-sm');
    });

    it('does not render when no error exists', () => {
      const { container } = render(<TestFormComponent />);
      const message = container.querySelector('[data-slot="form-message"]');
      expect(message).not.toBeInTheDocument();
    });

    it('has correct id attribute', () => {
      render(<TestFormComponent hasError />);
      const message = screen.getByText('This field is required');
      expect(message).toHaveAttribute('id');
      expect(message.getAttribute('id')).toMatch(/-form-item-message$/);
    });

    it('renders children when provided and no error', () => {
      render(<CustomFormMessageComponent>Custom message content</CustomFormMessageComponent>);
      expect(screen.getByText('Custom message content')).toBeInTheDocument();
    });

    it('prioritizes error message over children', () => {
      render(<TestFormComponent hasError errorMessage="Error takes priority" />);
      expect(screen.getByText('Error takes priority')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<TestFormComponent hasError />);
      const message = screen.getByText('This field is required');
      expect(message).toHaveClass('text-destructive', 'text-sm');
    });

    it('returns null when no body content', () => {
      const { container } = render(<CustomFormMessageComponent />);
      const message = container.querySelector('[data-slot="form-message"]');
      expect(message).not.toBeInTheDocument();
    });
  });

  describe('FormField', () => {
    it('renders form field with controller', () => {
      const { asFragment } = render(<TestFormComponent />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('handles field changes', () => {
      render(<TestFormComponent />);
      const input = screen.getByPlaceholderText('Enter text');

      fireEvent.change(input, { target: { value: 'new value' } });
      expect(input).toHaveValue('new value');
    });

    it('provides correct field context', () => {
      const { container } = render(<FormFieldContextTestComponent />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('useFormField hook', () => {
    it('returns correct field properties', () => {
      render(<UseFormFieldTestComponent />);

      expect(screen.getByTestId('field-name')).toHaveTextContent('hookTest');
      expect(screen.getByTestId('form-item-id')).toHaveTextContent(/^.+-form-item$/);
      expect(screen.getByTestId('form-description-id')).toHaveTextContent(/^.+-form-item-description$/);
      expect(screen.getByTestId('form-message-id')).toHaveTextContent(/^.+-form-item-message$/);
      expect(screen.getByTestId('has-error')).toHaveTextContent('false');
    });

    it('throws error when used outside FormField context', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        render(<UseFormFieldErrorTestComponent />);
      }).toThrow();

      consoleSpy.mockRestore();
    });
  });

  describe('Integration tests', () => {
    it('form components work together correctly', () => {
      render(<IntegrationTestComponent defaultValues={{ integration: 'test value' }} />);

      const label = screen.getByText('Integration Test');
      const input = screen.getByDisplayValue('test value');
      const description = screen.getByText('Integration test description');

      expect(label).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(description).toBeInTheDocument();

      const labelId = label.getAttribute('for');
      const inputId = input.getAttribute('id');
      expect(labelId).toBe(inputId);

      const describedBy = input.getAttribute('aria-describedby');
      const descriptionId = description.getAttribute('id');
      expect(describedBy).toContain(descriptionId);
    });

    it('handles form validation and error display', () => {
      const ValidationTestComponentWrapper = () => {
        const form = useForm();

        const [component, setComponent] = React.useState(
          <Form {...form}>
            <FormField
              control={form.control}
              name="validation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Validation Test</FormLabel>
                  <FormControl>
                    <Input placeholder="Validation test" {...field} />
                  </FormControl>
                  <FormDescription>Validation test description</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>,
        );

        React.useEffect(() => {
          // Simulate error after initial render
          const timer = setTimeout(() => {
            form.setError('validation', { message: 'Validation error' });
            setComponent(
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="validation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Validation Test</FormLabel>
                      <FormControl>
                        <Input placeholder="Validation test" {...field} />
                      </FormControl>
                      <FormDescription>Validation test description</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>,
            );
          }, 100);

          return () => clearTimeout(timer);
        }, [form]);

        return component;
      };

      render(<ValidationTestComponentWrapper />);

      expect(screen.getByText('Validation Test')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Validation test')).toBeInTheDocument();
    });
  });
});
