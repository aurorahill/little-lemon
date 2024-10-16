import BookingForm from './BookingForm';
import { render, screen } from '@testing-library/react';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Reservation form');
  expect(headingElement).toBeInTheDocument();
});
