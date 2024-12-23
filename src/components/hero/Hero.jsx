import React from 'react';
import './Hero.css';
import dish1 from '../../assets/images/dish1.jpg';

const Hero = () => {
  return (
    <div className="hero-container">

      <div className='hero-main'>
        <div className='hero-left'>
          <div className='hero-about'>
            <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family-owned Mediterranean restaurant focused on traditional recipes 
                served with a modern twist. Our roots trace back to generations of chefs who 
                have perfected the art of Mediterranean cooking, using only the freshest and finest 
                ingredients to bring you an unforgettable dining experience.</p>
            </div>
            <div className='hero-button'>
              <button>Book Now</button>
            </div>

          </div>

        </div>

        <div className='hero-right'>
          <div className='hero-slider'>
            <img src={dish1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
