import React from 'react';
import image from '../assets/star.png';
import image1 from '../assets/image2.png';
import image2 from '../assets/image3.png';
import { NavLink } from 'react-router-dom';

const Overview = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className='flex flex-col justify-around md:flex-row bg-tahiti mx-auto p-5 md:p-20'>
        <div className='w-full md:w-1/2'>
          <img src={image} className='w-full md:w-2/3 h-72 md:h-auto' alt="Overview Image" />
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center font-bold px-10 py-4'>
          <p className='text-white text-lg md:text-base lg:text-4xl md:w-[600px] font-sans font-extrabold'>
            JOIN PEPPER PERKS SCAN RECEIPTS GET REWARDS YOU DESERVE
          </p>
          <NavLink to='/create'>
          <button className='bg-white text-tahiti py-3 rounded-3xl mt-2 md:mt-4 w-44 font-sans font-extrabold'>
            SIGN UP/LOG IN
          </button>
          </NavLink>
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex flex-col justify-around md:flex-row bg-tahiti-light mx-auto px-5 md:px-20 pt-5 md:pt-10 font-sans'>
        <div className='w-full hidden md:w-1/2 lg:flex md:flex flex-col justify-center font-bold gap-6'>
          <h2 className='text-white font-extrabold text-sm md:text-base lg:text-4xl md:w-[600px] font-sans'>
            FLEX YOUR FLAVOR
          </h2>
          <p className='text-white text-sm md:text-base lg:text-xl md:w-[450px] font-sans font-normal'>
            Merch. Swag. And more delicious Dr Pepper memorabilia. All at one conveniently placed link (right below this).
          </p>
          <NavLink to='/merch'>
          <button className='bg-white text-tahiti mb-6 py-3 px-6 rounded-3xl mt-2 md:mt-4 w-44 font-sans font-extrabold'>
            SHOP MERCH
          </button>
          </NavLink>
        </div>
        <div className='w-full md:w-1/2 pt-20'>
          <img src={image1} className='w-full md:w-auto h-[250px] lg:h-[400px] md:h-auto' alt="Overview Image" />
        </div>
      </div>

      <div className='flex flex-col justify-around md:flex-row bg-black mx-auto px-5 md:px-20'>
        <div className='w-full md:w-1/2'>
          <img src={image2} className='w-full md:w-auto md:w-auto h-[300px] lg:h-[400px] md:h-[450px] lg:h-[450px] md:h-auto' alt="Overview Image" />
        </div>
        <div className='w-full hidden lg:flex md:flex md:w-1/2 flex flex-col justify-center font-bold gap-6'>
          <h2 className='text-white text-sm md:text-base lg:text-4xl md:w-[600px] font-sans font-extrabold'>
            LOVE DR PEPPER?
          </h2>
          <p className='text-white text-sm md:text-base lg:text-xl md:w-[540px] font-sans font-normal'>
            Learn more about everything from classic Dr Pepper to our exclusive, limited edition flavors.
          </p>
          <NavLink to='/products'>
          <button className='bg-white text-tahiti py-2 px-6 rounded-3xl mt-2 md:mt-4 w-full md:w-72'>
            EXPLORE OUR PRODUCTS
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Overview;
