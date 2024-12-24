import React from 'react';
import './Hero.css';
import dish1 from '../../assets/images/dish1.jpg';

const Hero = () => {
  return (
    <div className="hero-background">
      <div className='hero-main'>
        <div className='hero-about'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <br />
          <p>We are a family-owned Mediterranean restaurant focused on traditional recipes 
                served with a modern twist. Our roots trace back to generations of chefs who 
                have perfected the art of Mediterranean cooking, using only the freshest and finest 
                ingredients to bring you an unforgettable dining experience.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Hero;
