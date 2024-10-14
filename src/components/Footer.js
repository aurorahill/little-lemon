import React from 'react';
import logo from '../assets/Logo .svg';

const Footer = () => {
  return (
    <footer>
      <img
        src={logo}
        alt="Little Lemon logo"
      />
      <div className="footer__title">
        <ul className="footer__menu">
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Home
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              About
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Menu
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Reservation
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Order Online
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__title">
        <p className="footer__contact">Adress</p>
        <p className="footer__contact">Phone</p>
        <p className="footer__contact">Email</p>
      </div>
      <div className="footer__title">
        <p className="footer__socials">Facebook</p>
        <p className="footer__socials">Instagram</p>
        <p className="footer__socials">Twitter</p>
      </div>
    </footer>
  );
};

export default Footer;
