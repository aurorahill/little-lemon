import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from '../bookingsAPI';

// Mockowanie funkcji fetchAPI
jest.mock('../bookingsAPI', () => ({
  fetchAPI: jest.fn(),
}));

describe('Reservation component', () => {
  it('should initialize available times correctly', () => {
    // Przygotuj dane testowe
    const mockTimes = ['17:00', '17:30', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    // Sprawdź czy dostępne godziny są poprawnie zwracane przez initializeTimes
    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });

  it('should update available times correctly when date changes', () => {
    const mockDate = new Date(2022, 5, 15); // Przykładowa data
    const mockTimes = ['17:00', '17:30', '18:00'];

    fetchAPI.mockReturnValue(mockTimes);

    const initialState = [];
    const action = {
      type: 'UPDATE',
      payload: new Date(),
    };

    const result = updateTimes(initialState, action);

    expect(fetchAPI).toHaveBeenCalledWith(action.payload);
    expect(result).toEqual(mockTimes);
  });
});
