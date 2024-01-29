import React from 'react'

const HeroBanner2 = () => {

  return (
    <div className='flex flex-col items-center mt-[750px]'>
      <div className="lg:w-1/2 w-full herotext inset-0 absolute flex flex-col items-center text-left mt-[400px] lg:mt-[250px] text-white px-12 lg:px-36">
        <h1 className='text-4xl md:text-5xl font-extrabold mt-62 mb-4 font-sans'>PERKS AND MORE FOR 2024</h1>
        <p className="text-base md:text-base mb-8 font-sans font-normal">
        We're kicking off the new year with brand new Pepper Perks. So crack open a Dr Pepper Zero Sugar, sign in, and treat yourself to perks like Dr Pepper sneakers and delivery codes!
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <button className="bg-tahiti hover:bg-blue-700 text-white font-extrabold py-3 px-8 rounded-3xl font-sans">
            SIGN UP
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-extrabold py-2 px-4 rounded font-sans">
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner2
