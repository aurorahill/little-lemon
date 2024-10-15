import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import heroImage from '../assets/food/restauranfood.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__text-wrapper">
          <h1 className="header__title">Little Lemon</h1>
          <h2 className="header__subtitle">Chicago</h2>
          <p className="header__text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipies served with a modern twist.
          </p>
          <Link
            className="button"
            to="/reservations"
          >
            Reserve a table
          </Link>
        </div>

        <div className="header__image">
          <img
            src={heroImage}
            alt="Food in Little Lemon restaurant"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
