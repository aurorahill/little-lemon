import React from 'react';
import './Specials.css';
import SpecialCard from './cards/SpecialCard';
import greekSalad from '../assets/food/greek salad.jpg';
import bruschetta from '../assets/food/restauranfood.jpg';
import lemonDessert from '../assets/food/lemon dessert.jpg';

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials__text">
        <h1 className="specials__title">This weeks specials!</h1>
        <a
          href={require('../assets/menu.jpg')}
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Online Menu
        </a>
      </div>
      <div className="specials__cards">
        <SpecialCard
          image={greekSalad}
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          image={bruschetta}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <SpecialCard
          image={lemonDessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
        />
      </div>
    </section>
  );
};

export default Specials;
