import { Fragment, useState } from 'react'
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import logo from '../assets/logo.png'
import {UserAuth} from '../../config/AuthContext'
import Profiles from './Profiles';
import MerchModal from './MerchModal';
import pic from '../assets/prof.webp'
import SidebarMenu from './SidebarMenu';

export default function Navbar({ backgroundImageUrl }) {
  const {user} = UserAuth()
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMerchModalOpen, setIsMerchModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const toggleMerch = () => {
    setIsMerchModalOpen((prevState) => !prevState);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  console.log(user)


  return (
    <div className="">
      {isCartOpen && (
        <Profiles
        toggleCart={toggleCart}
      />
      )}
      {isSidebarOpen && (
        <SidebarMenu
        toggleSidebar={toggleSidebar}
      />
      )}
      {isMerchModalOpen && <MerchModal toggleMerch={toggleMerch} />}
    <Disclosure as="nav"  className="bg-inherit text-white py-4">
    {({ open }) => (
      <>
      <div className="max-w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex-shrink-0">
            <img
              className="h-20 w-auto"
              src={logo}
              alt="Your Company"
            />
          </NavLink>
        </div>
        {/* Centered navigation links on larger screens */}
        <div className="hidden lg:flex flex-grow justify-center gap-4">
            <NavLink
              to='/'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
            >
              HOME
            </NavLink>
            <NavLink
              to='/rewards'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
            >
              REWARDS
            </NavLink>
            <NavLink
              to='/products'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
            >
              PRODUCTS
            </NavLink>
            <NavLink
        onClick={toggleMerch}
        className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
      >
        MERCH
      </NavLink>
      <NavLink
              to='/tuition'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
            >
              TUITION
            </NavLink>
            <NavLink
              to='/pepper'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
            >
              PEPPER PACK
            </NavLink>
            <NavLink
              to='/faq'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
            >
              FAQ
            </NavLink>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
    {/* Modified container for JOIN/LOG IN */}
    

                {user?.displayName ? (
                <Menu as="div" className="relative ml-3">
                  <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-3 flex items-center">
                  <div className="sm:flex items-center space-x-2" onClick={toggleCart} >
                    <img
                       className="h-10 w-10 rounded-full"
                        // src={user?.photoURL}
                        src={pic}
                        alt=""
                        />
                      </div>
                    </Menu.Button>
                  </div>
                </Menu>
                ) : (
                  <NavLink to='/create' className="ml-auto px-4 py-2 border-2 border-indigo-500 rounded-3xl font-sans font-extrabold">
      JOIN/LOG IN
    </NavLink>
                )}
                <button type="button" className="md:hidden"
             onClick={toggleSidebar}
             >

                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>
</button>

        </div>
      </div>
      </>
    )}
  </Disclosure>
  </div>
  )
}

