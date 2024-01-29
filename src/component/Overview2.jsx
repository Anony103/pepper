import React from 'react';
import scan from '../assets/scan.jpg';
import {how} from '../../data.jsx'
import { NavLink } from 'react-router-dom';

const Overview2 = ({scrollToRewardItems}) => {
  console.log(how)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 font-sans opacity-80">HOW IT WORKS</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {how.map((item,index)=>(
        <div className="bg-white py-6 px-8" key={index}>
        <img src={item.img} alt="" className="w-full mb-4" />
        <h2 className="text-lg font-extrabold mb-2 font-sans">{item.title}</h2>
        <p className="text-sm md:text-base font-sans font-normal">
          {item.desc}
        </p>
      </div>
       ))}
        
      </section>
      <div className='flex flex-col items-center mt-8 space-y-4'>
        <NavLink to='/create'>
        <button className="bg-tahiti hover:bg-red-600 text-white py-3 px-16 rounded-3xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 font-sans font-extrabold">
          JOIN PEPPER PERKS NOW
        </button>
        </NavLink>
        <button
          onClick={scrollToRewardItems}
          className="hover:bg-blue-600 text-tahiti py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 font-sans font-extrabold"
        >
          SEE HOW YOUR POINTS ADD UP
        </button>
      </div>
    </div>
  );
};

export default Overview2;
