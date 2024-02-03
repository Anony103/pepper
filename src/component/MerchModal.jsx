import React from 'react';

const MerchModal = ({ toggleMerch }) => {
  return (
    <div className="fixed inset-0 overflow-hidden z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
      <div className="w-full lg:max-w-6xl bg-white text-black shadow-xl transition-transform duration-300 transform translate-x-0 py-6">
        <div className="flex items-center justify-between text-center px-6">
          <div></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={toggleMerch}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-between text-center py-4 px-6 gap-4">
          <p className='text-[#808080] font-semibold text-lg'>You are now leaving DrPepper.com and heading to DrPepperStore.com.</p>
          <h2 className='font-extrabold text-[22px]'>HAPPY SHOPPING!</h2>
          <button className="bg-tahiti hover:bg-blue-700 text-white font-extrabold font-sans text-sm md:text-base py-4 md:py-5 px-12 rounded-full">
            CONTINUE TO THE MERCH STORE
          </button>
          <p className='text-[#808080] font-semibold'>Operated by HALO</p>
        </div>
      </div>
    </div>
  );
};

export default MerchModal;
