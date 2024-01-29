import React from 'react';
import {point} from '../../data'
import { NavLink } from 'react-router-dom';

const RewardItem = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-center mb-8 font-sans">LET’S GET TO THE POINTS</h1>
      <p className="text-center mb-6 max-w-2xl mx-auto font-sans font-normal">Here’s a breakdown of how many points you earn for the amount of Dr Pepper you buy. It’s the Pepper-to-points exchange rate you deserve.</p>
      <section className="flex flex-col sm:flex-row justify-center gap-8">
        {point.map((item,index)=>(
        <div className="bg-white rounded-lg p-4 sm:p-6 text-center" key={index}>
          <h2 className="text-4xl sm:text-8xl font-extrabold mb-2 sm:mb-4 font-sans">{item.title}</h2>
          <h2 className="text-lg sm:text-2xl font-extrabold mb-2 sm:mb-4 font-sans">{item.subTitle}</h2>
          <p className="text-sm sm:text-base mb-2 sm:mb-4">{item.desc}</p>
          <img src={item.img} alt="Points" className="w-full mb-2 sm:mb-4" />
        </div>
        ))}
      </section>
      <hr className="my-8 border-t border-gray-300" />
      <p className="text-[10px] md:text-[10px] mb-8 text-center font-sans font-normal">
        List of product sizes are examples and not inclusive of all accepted pack sizes.
      </p>
      <div className="flex justify-center">
        <NavLink to='/create'>
        <button className="bg-tahiti hover:bg-blue-600 text-white rounded-3xl font-extrabold py-3 px-8 mt-4 font-sans">
          JOIN NOW
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default RewardItem;
