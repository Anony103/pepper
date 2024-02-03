import React, {useEffect} from 'react'
import { UserAuth } from '../../config/AuthContext'
import pic from '../assets/prof.webp'
import { NavLink } from 'react-router-dom'


const Profiles = ({toggleCart}) => {
  const {user, logOut} = UserAuth()


  const handleLogout = async () => {
    try {
      await logOut();
      toggleCart()
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="fixed inset-0 overflow-hidden z-50 bg-black">
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-[#900D2C] text-white shadow-xl h-full transition-transform duration-300 transform translate-x-0">
        <div className="flex items-center justify-between text-center py-12 px-6">
        {user?.displayName ? (
                    <img
                       className="h-12 w-12 rounded-full"
                        src={user?.photoURL}
                        alt=""
                        />
                ) : (
                    <img
                    className="h-8 w-8 rounded-full"
                     src={pic}
                     alt=""
                     />
                )}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-extrabold mr-12 cursor-pointer" onClick={toggleCart}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </div>
        <div className='px-6'>

        
        <div>
            <h1 className='text-[#F5DFCA] font-extrabold text-6xl font-sans'>0</h1>
            <h3 className='font-bold text-sm'>TOTAL AVAILABLE POINTS</h3>
        </div>
        <div className='flex flex-col py-12 gap-8'>
            <NavLink className='font-bold text-3xl font-sans'>MY REWARDS</NavLink>
            <h2 className='font-bold text-3xl font-sans'>EDIT PROFILE</h2>
            <NavLink
            onClick={handleLogout}
            className='font-bold text-3xl font-sans'
            >
              LOGOUT
            </NavLink>
        </div>

        <div>
            <h2 className='font-bold text-xl font-sans'>INVITE FRIENDS</h2>
            <p className='font-semibold text-base font-sans'>You'll get 5 bonus points. it's a win, win.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
