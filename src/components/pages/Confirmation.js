import React from 'react';
import Heading from '../Heading';
import heroImage from '../../assets/food/Mario and Adrian A.jpg';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <>
      <Heading
        heroImage={heroImage}
        text="Thank you!"
      />
      <div
        style={{
          backgroundColor: 'var(--red-color)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '3rem',
            padding: '4rem',
            fontWeight: '700',
          }}
        >
          You booked a table! All information will be sent to your email!
        </p>
        <Link
          to="/little-lemon"
          className="button"
          style={{ marginBottom: '2rem', fontSize: '2.4rem' }}
        >
          Home
        </Link>
      </div>
    </>
  );
};

export default Confirmation;
