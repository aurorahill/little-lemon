import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo .svg';
import { IoClose, IoMenu } from 'react-icons/io5';
import './Nav.css';

const Nav = () => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 768) {
      setshowMenu(false);
    }
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <NavLink
          to="/little-lemon"
          className="nav__logo"
        >
          <img
            src={logo}
            alt="Little Lemon logo"
          />
        </NavLink>
        <div
          className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/little-lemon"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/little-lemon/about"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <a
                href={require('../assets/menu.jpg')}
                target="_blank"
                rel="noreferrer"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Menu
              </a>
            </li>
            <li className="nav__item">
              <NavLink
                to="/little-lemon/reservation"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Reservation
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/little-lemon/order"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Order
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/little-lemon/login"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div
            className="nav__close"
            id="nav-close"
            onClick={toggleMenu}
          >
            <IoClose />
          </div>
        </div>
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <IoMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
