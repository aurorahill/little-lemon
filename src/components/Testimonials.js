import React from 'react';
import './Testimonials.css';
import TestimonialCard from './cards/TestimonialCard';
import { reviews } from './cards/reviewData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <h1 className="testimonials__title">Testimonials</h1>
        <Splide
          options={{
            type: 'loop',
            speed: 2000,
            autoplay: true,
            perPage: 3,
            breakpoints: {
              1200: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <TestimonialCard
                name={review.name}
                testimonial={review.testimonial}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
