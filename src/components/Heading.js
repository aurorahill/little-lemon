import React from 'react';
import './Heading.css';

const Heading = ({ heroImage, text }) => {
  return (
    <header className="heading">
      <img
        className="heading__img"
        src={heroImage}
        alt="Little Lemon Salad"
      ></img>
      <div className="heading__text">
        <h1>{text}</h1>
      </div>
    </header>
  );
};

export default Heading;
