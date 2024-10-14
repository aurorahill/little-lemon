import React from 'react';
import logo from '../assets/Logo .svg';

const Nav = () => {
  return (
    <nav>
      <img
        src={logo}
        alt="Little Lemon logo"
      />
      <ul className="nav__list">
        <li className="nav__item">
          <a
            href="/"
            className="nav__link"
          >
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link"
          >
            About
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link"
          >
            Menu
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link"
          >
            Reservations
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link"
          >
            Order Online
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
