import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialCard.css';

const SpecialCard = (props) => {
  return (
    <article className="special-card">
      <img
        src={props.image}
        alt="Special Menu"
        className="special-card__image"
      ></img>
      <div className="special-card__text">
        <div className="special-card__title-wrapper">
          <h1>{props.name}</h1>
          <h3>{props.price}</h3>
        </div>
        <p>{props.description}</p>
        <Link
          className="special-card__btn button"
          to="/order"
        >
          Order for Delivery
        </Link>
      </div>
    </article>
  );
};

export default SpecialCard;
