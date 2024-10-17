import BookingForm from './BookingForm';
import { render, screen } from '@testing-library/react';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['12:00', '13:00', '14:00'];
  render(<BookingForm />);
  const headingElement = screen.getByText('Reservation form');
  expect(headingElement).toBeInTheDocument();
});
