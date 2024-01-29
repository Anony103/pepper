import React from 'react';
import {pepperReward} from '../../data'
import { NavLink } from 'react-router-dom';

const Rewards = () => {
  console.log(pepperReward)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">PEPPER PERKS REWARDS</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Rewards items */}
        {pepperReward.map((item, index)=>(
        <div className="bg-white rounded-lg p-4" key={index}>
          <img src={item.img} alt="" className="w-full mb-4" />
          <div className="flex text-left justify-between">
            <p className="text-sm md:text-base mb-2 w-2/3 font-sans font-normal">
              {item.desc}
            </p>
            <h2 className="text-lg font-bold font-sans">{item.point}</h2>
          </div>
        </div>
        ))}

      </section>
      <hr className="my-8 border-t border-gray-300" />
      <p className="text-[10px] md:text-[10px] mb-8 font-sans font-normal">
        * NO PURCHASE NECESSARY. INTERNET, EMAIL REQUIRED. Must be U.S. legal resident, 18 or older. For full rules or to enter without a purchase, go to drpepper.com. Receipts must be uploaded 10/15/23 – 1/14/24. Receipt submissions can earn Pepper Perks points to be used toward additional entries into the Promotion. Promotion ends and receipt submissions/free online entries must be received by 1/14/24. Subject to full rules. Void where prohibited. DR PEPPER is a registered trademark of Dr Pepper/Seven Up, Inc. © 2023 Dr Pepper/Seven Up, Inc.
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

export default Rewards;
