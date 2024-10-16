import React from 'react';
import './AboutUs.css';
import about1 from '../assets/food/greek salad.jpg';
import about2 from '../assets/food/Mario and Adrian A.jpg';

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <div className="about-us__container">
          <div className="about-us__text-wrapper">
            <h1 className="about-us__title">Little Lemon</h1>
            <h2 className="about-us__subtitle">Chicago</h2>
            <p className="about-us__text">
              Little Lemon opened in 1990 by two Italian brothers, Adrian and
              Mario. The two brothers recognized the lack of Mediterranean
              cuisine in Chicago, and were inspired to bring the flavors of
              their hometown in Italy to the people of Chicago. The two brothers
              continue to oversee the Little Lemon restaurant years later.
            </p>
          </div>

          <div className="about-us__images">
            <img
              src={about1}
              alt="Food in Little Lemon restaurant"
              className="about-us__image1"
            />
            <img
              src={about2}
              alt="Food in Little Lemon restaurant"
              className="about-us__image2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
