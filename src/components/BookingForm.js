import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  // Stan formularza
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [comment, setComment] = useState('');

  function validateEmail(email) {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  function handleDateChange(e) {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE', payload: new Date(newDate) });
  }

  const getIsFormValid = () => {
    return (
      name.length > 2 &&
      validateEmail(email) &&
      guests < 11 &&
      guests > 0 &&
      date
    );
  };

  function handleTimeChange(e) {
    setSelectedTime(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      !window.confirm(
        'The table will be booked right away. Are you sure all the details are correct?'
      )
    )
      return;

    const formData = {
      name,
      email,
      guests,
      date,
      selectedTime,
      occasion,
      comment,
    };
    console.log(formData);

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
            onChange={(e) => setName(e.target.value)}
          />
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
            onChange={(e) => setEmail(e.target.value)}
          />
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
            onChange={(e) => setGuests(e.target.value)}
          />
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
          {!getIsFormValid() ? (
            <button
              type="submit"
              className="button res-button"
              style={{
                backgroundColor: '#a0a0a0',
                border: '1px solid #a0a0a0',
                color: 'rgb(70, 70, 70)',
              }}
            >
              Book a table
            </button>
          ) : (
            <button
              type="submit"
              className="button res-button"
            >
              Book a table
            </button>
          )}
          <p className="res-form__req-fields">Fields with * are required!</p>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
