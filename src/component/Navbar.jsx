import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import logo from '../assets/logo.png'

const navigation = [
  { name: 'HOME', to: '/', current: true },
  { name: 'REWARDS', to: '/rewards', current: false },
  { name: 'PRODUCTS', to: '/products', current: false },
  { name: 'MERCH', to: '/merch', current: false },
  { name: 'TUITION', to: '/tuition', current: false },
  { name: 'PEPPER PACK', to: '/pepper', current: false },
  { name: 'FAQ', to: '/faq', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ backgroundImageUrl }) {


  return (
    <Disclosure as="nav"  className="bg-inherit text-white py-4">
    {({ open }) => (
      <div className="max-w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex-shrink-0">
            <img
              className="h-24 w-auto"
              src={logo}
              alt="Your Company"
            />
          </NavLink>
        </div>
        {/* Centered navigation links on larger screens */}
        <div className="hidden lg:flex flex-grow justify-center gap-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              activeClassName="bg-gray-900 border-b-2 text-white"
              className="text-md text-white-300 font-extrabold hover:border-b-2 hover:text-white font-sans"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        {/* Right side */}
        <div className="flex items-center bg">
    {/* Modified container for JOIN/LOG IN */}
    <NavLink to='/create' className="ml-auto px-4 py-2 border-2 border-indigo-500 rounded-3xl font-sans font-extrabold">
      JOIN/LOG IN
    </NavLink>
        </div>
      </div>
    )}
  </Disclosure>
  )
}

