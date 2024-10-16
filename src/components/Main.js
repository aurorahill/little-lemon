import React from 'react';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Specials></Specials>
      <Testimonials></Testimonials>
      <AboutUs></AboutUs>
    </main>
  );
};

export default Main;
