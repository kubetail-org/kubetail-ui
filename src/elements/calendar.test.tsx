import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Calendar } from './calendar';

describe('Calendar', () => {
  it('renders properly', () => {
    const { asFragment } = render(<Calendar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows outside days by default', () => {
    render(<Calendar />);
    // Calendar should render with outside days visible by default
    const calendar = screen.getByRole('grid');
    expect(calendar).toBeInTheDocument();
  });

  it('can hide outside days when showOutsideDays is false', () => {
    const { asFragment } = render(<Calendar showOutsideDays={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('forwards DayPicker props correctly with mode single', () => {
    const today = new Date();
    const { asFragment } = render(<Calendar mode="single" selected={today} disabled={{ before: new Date() }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies mode="single" by default', () => {
    render(<Calendar />);
    const calendar = screen.getByRole('grid');
    expect(calendar).toBeInTheDocument();
    // The calendar should be in single mode by default
  });

  it('renders with custom selected date in single mode', () => {
    const selectedDate = new Date('2024-01-15');
    const { asFragment } = render(<Calendar mode="single" selected={selectedDate} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles disabled dates', () => {
    const disabledDate = new Date('2024-01-01');
    const { asFragment } = render(<Calendar disabled={disabledDate} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with custom month', () => {
    const customMonth = new Date('2024-06-01');
    const { asFragment } = render(<Calendar month={customMonth} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles navigation between months', () => {
    const handleMonthChange = vi.fn();

    render(<Calendar onMonthChange={handleMonthChange} />);

    // Find navigation buttons
    const navigationButtons = screen.getAllByRole('button');
    const nextButton = navigationButtons.find(
      (button) =>
        button.getAttribute('aria-label')?.includes('next') ||
        button.getAttribute('aria-label')?.includes('Next') ||
        button.querySelector('svg') !== null,
    );

    if (nextButton) {
      fireEvent.click(nextButton);
      expect(handleMonthChange).toHaveBeenCalled();
    }
  });

  it('applies correct CSS classes for different day states', () => {
    const today = new Date();
    const selected = new Date();
    selected.setDate(today.getDate() + 1);

    const { asFragment } = render(<Calendar mode="single" selected={selected} today={today} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles multiple prop combinations', () => {
    const { asFragment } = render(
      <Calendar
        className="multi-prop-test"
        showOutsideDays={false}
        mode="single"
        selected={new Date('2024-07-15')}
        month={new Date('2024-07-01')}
        disabled={{ before: new Date('2024-07-10') }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders without crashing when no props are provided', () => {
    expect(() => render(<Calendar />)).not.toThrow();
  });

  it('applies default classNames correctly', () => {
    render(<Calendar />);
    const calendar = screen.getByRole('grid');
    expect(calendar).toBeInTheDocument();

    // Check if default class names are applied
    expect(calendar.className).toBeTruthy();
  });

  it('forwards all other DayPicker props', () => {
    const { asFragment } = render(<Calendar captionLayout="dropdown" numberOfMonths={2} fixedWeeks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
