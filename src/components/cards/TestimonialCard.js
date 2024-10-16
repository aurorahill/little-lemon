import React from 'react';
import './TestimonialCard.css';
import dishIcon from '../../assets/Dish icon.svg';

const TestimonialCard = ({ name, testimonial }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__wrapper">
        <img
          src={dishIcon}
          alt="delivery Icon"
          className="testimonial-card__icon"
        ></img>
        <h3 className="testimonial-card__name">{name}</h3>
      </div>
      <p className="testimonial-card__testimonial">{testimonial}</p>
    </article>
  );
};

export default TestimonialCard;
