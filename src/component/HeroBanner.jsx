import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroBanner = () => {



  return (
    <div className='flex flex-col items-center mt-[750px]'>
      <div className="lg:w-1/2 w-full herotext inset-0 absolute flex flex-col items-center text-left mt-[400px] lg:mt-[250px] text-white px-12 lg:px-36">
        <h1 className='text-4xl md:text-6xl font-extrabold mt-62 mb-4 font-sans'>FOR THAT FEEL GOOD FLAVOR</h1>
        <p className="text-base md:text-base mb-8 font-normal font-sans">
        Your New Year's resolutions never tasted so good. Sip into that new you with the one-of-a-kind taste of Dr Pepper Zero Sugar, and sign into Pepper Perks to reward yourself all year long.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <NavLink to='/rewards'>
          <button className="bg-tahiti hover:bg-blue-700 text-white font-extrabold font-sans text-sm md:text-base py-4 md:py-3 px-12 rounded-3xl">
            Learn More
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
