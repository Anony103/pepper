import React from 'react';
import Navbar from '../component/Navbar';
import { NavLink } from 'react-router-dom';
import Products from '../component/Products';

const Product = () => {
  return (
    <div className="bg-tahiti text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-sans">CRAVING SOME FLAVOR?</h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto mb-8 font-sans font-normal">
          Explore our full line of Dr Pepper flavors and get rewarded for every purchase with{' '}
          <NavLink
            to="/pepper"
            className="text-white hover:text-white transition duration-300 underline"
          >
            Pepper Perks
          </NavLink>{' '}
          rewards.
        </p>
      </div>
      <Products/>
    </div>
  );
};

export default Product;
