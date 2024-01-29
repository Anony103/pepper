import React from 'react';
import Navbar from '../component/Navbar';
import { NavLink } from 'react-router-dom';

const Pepper = () => {
  return (
    <div className="text-white">
      <div className='h-60'>
        <Navbar />
        </div>
      <div className="bg-tahiti mx-auto px-4 sm:px-6 lg:px-20 py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans font-extrabold">WELCOME TO THE OFFICIAL PEPPER PACK HOME!</h1>
          <p className="text-base md:text-2xl mb-8 font-sans font-normal">
            Only the most devoted, most passionate, most 23-flavor-loving Dr Pepper fans are encouraged to enter beyond
            this point.
          </p>
        </div>
        <div className="hidden lg:block">
          <hr className="border-r-[3px] border-white h-20 md:h-48 mb-8" />
        </div>
        <div className="max-w-lg px-12">
          <h2 className="text-2xl font-extrabold mb-4 font-sans">ALREADY A MEMBER?</h2>
          <NavLink to='/create'>
          <button className="bg-tahiti text-white border-2 border-indigo-500 py-2 rounded-3xl mb-4 px-12 font-sans font-extrabold">LOG IN</button>
          </NavLink>
          <h2 className="text-2xl font-extrabold">WANT TO JOIN THE PACK?</h2>
          <p className="text-base md:text-2xl mb-8 font-sans font-normal">Patience, Pepper. Applications will be open soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Pepper;
