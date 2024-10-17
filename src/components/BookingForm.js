import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [comment, setComment] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
  });

  function validateEmail(email) {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  function handleDateChange(e) {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE', payload: new Date(newDate) });
    setErrors((prev) => ({
      ...prev,
      date: newDate ? '' : 'Please select a date.',
    }));
  }

  function handleTimeChange(e) {
    setSelectedTime(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (name.length < 3)
      newErrors.name = 'Name must be at least 3 characters long.';
    if (!validateEmail(email)) newErrors.email = 'Please enter a valid email.';
    if (guests < 1 || guests > 10)
      newErrors.guests = 'Guests number must be between 1 and 10.';
    if (!date) newErrors.date = 'Please select a date.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    if (
      !window.confirm(
        'The table will be booked right away. Are you sure all the details are correct?'
      )
    )
      return;
    console.log('Form data:', {
      name,
      email,
      guests,
      date,
      selectedTime,
      occasion,
      comment,
    });
    const formData = {
      name,
      email,
      guests,
      date,
      selectedTime,
      occasion,
      comment,
    };

    submitForm(formData);
    setName('');
    setEmail('');
    setGuests('');
    setDate('');
    setSelectedTime('');
    setOccasion('');
    setComment('');
  };

  return (
    <>
      <h2 className="res-form-title">Reservation form</h2>
      <form
        className="res-form"
        onSubmit={handleOnSubmit}
      >
        <div>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            minLength={3}
            maxLength={50}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({
                ...prev,
                name:
                  e.target.value.length < 3
                    ? 'Name must be at least 3 characters long.'
                    : '',
              }));
            }}
          />
          {errors.name && (
            <p style={{ color: 'red', fontSize: '1.4rem', paddingTop: '5px' }}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            minLength={4}
            maxLength={40}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({
                ...prev,
                email: !validateEmail(e.target.value)
                  ? 'Please enter a valid email.'
                  : '',
              }));
            }}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '1.4rem', paddingTop: '5px' }}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guests">Number of guests *</label>
          <input
            type="number"
            id="guests"
            placeholder="Number of guests"
            required
            min={1}
            max={10}
            value={guests}
            onChange={(e) => {
              setGuests(parseInt(e.target.value, 10)); // Zapewniamy, że wartość jest liczbą
              setErrors((prev) => ({
                ...prev,
                guests:
                  e.target.value < 1 || e.target.value > 10
                    ? 'Guests number must be between 1 and 10.'
                    : '',
              }));
            }}
          />
          {errors.guests && (
            <p style={{ color: 'red', fontSize: '1.4rem', paddingTop: '5px' }}>
              {errors.guests}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-date">Choose date *</label>
          <input
            type="date"
            id="res-date"
            required
            value={date}
            onChange={handleDateChange}
          />
          {errors.date && (
            <p style={{ color: 'red', fontSize: '1.4rem', paddingTop: '5px' }}>
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-time">Choose time *</label>
          <select
            id="res-time"
            required
            value={selectedTime}
            onChange={handleTimeChange}
          >
            {availableTimes && availableTimes.length > 0 ? (
              availableTimes.map((time) => (
                <option
                  key={time}
                  value={time}
                >
                  {time}
                </option>
              ))
            ) : (
              <option>No available times</option>
            )}
          </select>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Other</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            placeholder="Additional Comments"
            rows={8}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="button res-button"
            disabled={
              !name ||
              !email ||
              !guests ||
              !date ||
              Object.keys(errors).some((key) => errors[key])
            }
          >
            Book a table
          </button>
          <p className="res-form__req-fields">Fields with * are required!</p>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
