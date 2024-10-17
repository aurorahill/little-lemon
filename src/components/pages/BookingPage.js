import React, { useReducer } from 'react';
import Heading from '../Heading';
import heroImage from '../../assets/food/restaurant.jpg';
import BookingForm from '../BookingForm';
import { fetchAPI, submitAPI } from '../bookingsAPI';
import { useNavigate } from 'react-router-dom';

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE') {
    return fetchAPI(action.payload);
  }
  return state;
}

const Reservation = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/little-lemon/confirmation');
    }
  };

  return (
    <>
      <Heading
        heroImage={heroImage}
        text="Reserve a table"
      />
      <main>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </main>
    </>
  );
};

export default Reservation;
