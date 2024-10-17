import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['12:00', '13:00', '14:00'];
  render(<BookingForm />);
  const headingElement = screen.getByText('Reservation form');
  expect(headingElement).toBeInTheDocument();
});

const mockSubmitForm = jest.fn();
const mockDispatch = jest.fn();

describe('BookingForm Component', () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={['12:00', '13:00', '14:00']}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test('Renders the form correctly', () => {
    // Sprawdzanie, czy formularz został poprawnie wyrenderowany
    expect(screen.getByLabelText(/Name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time \*/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Fields with \* are required!/i)
    ).toBeInTheDocument();
  });

  test('Shows error when name is too short', () => {
    // Wpisanie za krótkiego imienia
    fireEvent.change(screen.getByLabelText(/Name \*/i), {
      target: { value: 'Jo' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /Book a table/i }));

    // Sprawdzenie, czy pojawia się odpowiedni komunikat o błędzie
    expect(
      screen.getByText('Name must be at least 3 characters long.')
    ).toBeInTheDocument();
  });

  test('Shows error when email is invalid', () => {
    // Wpisanie nieprawidłowego adresu e-mail
    fireEvent.change(screen.getByLabelText(/Email \*/i), {
      target: { value: 'invalidemail' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /Book a table/i }));

    // Sprawdzenie, czy pojawia się odpowiedni komunikat o błędzie
    expect(screen.getByText('Please enter a valid email.')).toBeInTheDocument();
  });

  test('Shows error when number of guests is out of bounds', () => {
    // Wpisanie niepoprawnej liczby gości (poniżej 1)
    fireEvent.change(screen.getByLabelText(/Number of guests \*/i), {
      target: { value: '0' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /Book a table/i }));

    // Sprawdzenie, czy pojawia się odpowiedni komunikat o błędzie
    expect(
      screen.getByText('Guests number must be between 1 and 10.')
    ).toBeInTheDocument();

    // Wpisanie niepoprawnej liczby gości (powyżej 10)
    fireEvent.change(screen.getByLabelText(/Number of guests \*/i), {
      target: { value: '11' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /Book a table/i }));

    expect(
      screen.getByText('Guests number must be between 1 and 10.')
    ).toBeInTheDocument();
  });

  test('Shows error when date is not selected', () => {
    // Wypełniamy formularz oprócz daty
    fireEvent.change(screen.getByLabelText(/Name \*/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email \*/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests \*/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText(/Choose time \*/i), {
      target: { value: '12:00' },
    });

    // Próba przesłania formularza bez wyboru daty
    fireEvent.submit(screen.getByRole('button', { name: /Book a table/i }));

    // Sprawdzamy komunikat o błędzie dla daty
    expect(screen.getByText('Please select a date.')).toBeInTheDocument();
  });

  // test('Submits form with valid data', () => {
  //   // Wypełniamy formularz poprawnymi danymi
  //   fireEvent.change(screen.getByLabelText(/Name \*/i), {
  //     target: { value: 'John Doe' },
  //   });
  //   fireEvent.change(screen.getByLabelText(/Email \*/i), {
  //     target: { value: 'john@example.com' },
  //   });
  //   fireEvent.change(screen.getByLabelText(/Number of guests \*/i), {
  //     target: { value: 4 },
  //   }); // liczba
  //   fireEvent.change(screen.getByLabelText(/Choose date \*/i), {
  //     target: { value: '2024-10-20' },
  //   });
  //   fireEvent.change(screen.getByLabelText(/Choose time \*/i), {
  //     target: { value: '12:00' },
  //   });

  //   // Sprawdzamy, czy przycisk submit nie jest zablokowany
  //   expect(
  //     screen.getByRole('button', { name: /Book a table/i })
  //   ).not.toBeDisabled();

  //   // Symulujemy kliknięcie przycisku submit
  //   fireEvent.click(screen.getByRole('button', { name: /Book a table/i }));

  //   // Sprawdzamy, czy funkcja submitForm została wywołana z poprawnymi danymi
  //   expect(mockSubmitForm).toHaveBeenCalledWith({
  //     name: 'John Doe',
  //     email: 'john@example.com',
  //     guests: 4, // liczba
  //     date: '2024-10-20',
  //     selectedTime: '12:00',
  //     occasion: '',
  //     comment: '',
  //   });
  // });
});
