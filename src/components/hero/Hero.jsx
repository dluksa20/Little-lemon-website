import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);  // Trigger the fade-in effect when the component mounts
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-secondary bg-cover bg-center h-screen w-full flex items-center justify-center overflow-hidden
    max-h-[600px]">
        <div className={` grid grid-cols-1 md:grid-cols-2 h-[100%] w-full 
             transition-all duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-center items-center p-4">
                <div className="flex flex-col h-fit gap-6 bg-white max-h-[600px] max-w-[400px] bg-primary/30 
                border-[1px] border-black rounded-xl p-6 max-md:max-w-full max-md:m-4">
                    <h1 className="text-3xl text-secondary font-bold leading-none">
                        Little Lemon
                        <span><h2 className="text-xl text-white font-normal leading-2 ">Chicago</h2></span>
                    </h1>
                    
                    <p className="text-white">
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served
                        with a modern twist. Our roots trace back to generations of chefs who have perfected 
                        the art of Mediterranean cooking, using only the freshest and finest ingredients.              
                    </p>
                    <div>
                        <button className="bg-secondary py-2 px-4 rounded-xl
                            hover:bg-primaryHover hover:text-white hover:scale-110 hover:shadow-lg 
                            transition-all duration-500 ease-in-out">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <div 
                className='max-md:hidden'>
                <div className='h-full  w-full bg-white/40'>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
