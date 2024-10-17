import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo square (1).png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img
          src={logo}
          alt="Little Lemon logo"
        />
        <div className="footer__wrapper">
          <div className="footer__column">
            <h2 className="footer__title">Quick links</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <Link
                  to="/little-lemon"
                  className="footer__link"
                >
                  Home
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  to="/little-lemon/about"
                  className="footer__link"
                >
                  About
                </Link>
              </li>
              <li className="footer__item">
                <a
                  href={require('../assets/menu.jpg')}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  Menu
                </a>
              </li>
              <li className="footer__item">
                <Link
                  to="/little-lemon/reservation"
                  className="footer__link"
                >
                  Reservation
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  to="/little-lemon/order"
                  className="footer__link"
                >
                  Order
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  to="/little-lemon/login"
                  className="footer__link"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h2 className="footer__title">Socials</h2>
            <p className="footer__text">Facebook</p>
            <p className="footer__text">Instagram</p>
            <p className="footer__text">Twitter</p>
          </div>
          <div className="footer__column">
            <h2 className="footer__title">Contact</h2>
            <p className="footer__text">Dluga 14, Cracow</p>
            <p className="footer__text">+48 123456789</p>
            <p className="footer__text">littlelemon@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
