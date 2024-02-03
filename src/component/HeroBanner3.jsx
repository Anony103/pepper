import React from 'react'
import icon from '../assets/icon.png'

const HeroBanner3 = () => {

  return (
    <div className='flex flex-col items-center mt-[500px] lg:mt-[750px]'>
      <div className="lg:w-1/2 w-full herotext inset-0 absolute flex flex-col items-center text-left mt-[140px] lg:mt-[100px] text-white px-12 lg:px-36">
        <img src={icon} alt="" className='w-40 lg:w-56 pb-8'/>
        <h1 className='text-2xl md:text-6xl font-extrabold mt-62 mb-4 font-sans md:pl-36'>CONGRATULATIONS TO THIS YEAR’S WINNERS</h1>
        <p className="text-base md:text-2xl mb-8 mt-6 lg:mt-20 font-sans font-normal text-left w-full lg:pl-12">
        Thank you to all who participated!
        </p>
      </div>
    </div>
  )
}

export default HeroBanner3
