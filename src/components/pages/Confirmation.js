import React from 'react';
import Heading from '../Heading';
import heroImage from '../../assets/food/Mario and Adrian A.jpg';

const Confirmation = () => {
  return (
    <>
      <Heading
        heroImage={heroImage}
        text="Thank you!"
      />
      <p
        style={{
          fontSize: '3rem',
          padding: '4rem',
          textAlign: 'center',
          fontWeight: '700',
        }}
      >
        You booked a table! All information will be sent to your email!
      </p>
    </>
  );
};

export default Confirmation;
