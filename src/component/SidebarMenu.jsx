import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import MerchModal from './MerchModal';


const SidebarMenu = ({toggleSidebar}) => {
  const [isMerchModalOpen, setIsMerchModalOpen] = useState(false);

  const toggleMerch = () => {
    setIsMerchModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      {isMerchModalOpen && <MerchModal toggleMerch={toggleMerch} />}

    <div className="fixed inset-0 overflow-hidden z-50 bg-black">
    <div className="absolute inset-y-0 right-0 max-w-md w-4/5 bg-[#900D2C] text-white shadow-xl h-full transition-transform duration-300 transform translate-x-0 px-6 py-8">
    <div className="flex items-center justify-between text-center mb-12">
        <div></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={toggleSidebar}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </div>
      <div className="flex flex-col justify-center gap-4">
            <NavLink
              to='/'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-3xl text-white-300 font-bold hover:border-b-2 hover:text-white font-sans"
            >
              HOME
            </NavLink>
            <NavLink
              to='/rewards'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-3xl text-white-300 font-bold hover:border-b-2 hover:text-white font-sans"
            >
              REWARDS
            </NavLink>
            <NavLink
              to='/products'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-3xl text-white-300 font-bold hover:border-b-2 hover:text-white font-sans"
            >
              PRODUCTS
            </NavLink>
            <NavLink
        onClick={toggleMerch}
        className="text-3xl text-white-300 font-bold hover:border-b-2 hover:text-white font-sans"
      >
        MERCH
      </NavLink>
      <NavLink
              to='/tuition'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-3xl text-white-300 font-bold hover:border-b-2 hover:text-white font-sans"
            >
              TUITION
            </NavLink>
            <NavLink
              to='/pepper'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-3xl text-white-300 font-bold hover:border-b-2 hover:text-white font-sans"
            >
              PEPPER PACK
            </NavLink>
            <NavLink
              to='/faq'
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-3xl text-white-300 font-bold hover:border-b-2 hover:text-white font-sans"
            >
              FAQ
            </NavLink>
        </div>
    </div>
  </div>
  </div>

  )
}

export default SidebarMenu
