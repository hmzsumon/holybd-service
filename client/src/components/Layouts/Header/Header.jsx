import React, { useState } from 'react';
import { MdClose, MdOutlineMenuOpen } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const menuItems = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Packages', link: '/packages' },
  { id: 3, name: 'About Us', link: '/about' },
  { id: 4, name: 'Pay Bill', link: '/pay-bill' },
  { id: 5, name: 'Contact', link: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className='flex items-center justify-between w-full bg-white shadow-md px-8 md:px-20 py-2'>
        <div className='w-24'>
          <img src={logo} alt='Holly BD Service' />
        </div>
        <div className='hidden md:flex items-center space-x-10'>
          <ul className='flex justify-end'>
            {menuItems.map((item) => (
              <li key={item.id} className='ml-10'>
                <NavLink
                  to={item.link}
                  className={(nav) =>
                    nav.isActive ? 'text-[#E4791D]' : 'text-gray-800'
                  }
                >
                  <span className='text-xl font-semibold'>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <NavLink
              to='/login'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Self Care
            </NavLink>
          </div>
        </div>

        <div className='md:hidden'>
          <MdOutlineMenuOpen
            onClick={() => setIsOpen(!isOpen)}
            className='text-2xl cursor-pointer'
          />
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`z-50 h-full fixed mobile_menu md:hidden transition duration-300 ease-in-out  top-0 w-9/12 ${
          isOpen ? 'active-mobile-menu' : 'mobile-menu'
        } `}
      >
        <div className='flex items-center justify-between px-4 pt-4 '>
          <NavLink to='/'>
            <img src={logo} alt='logo' className=' w-20 ' />
          </NavLink>

          <MdClose
            className='text-3xl font-bold text-red-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className='mt-2 text-white '>
          {menuItems.map((item) => (
            <NavLink
              to={item.link}
              key={item.id}
              //   className='flex items-center justify-between px-2 py-4 cursor-pointer'
              className={(nav) =>
                `flex items-center justify-between px-2 py-4 cursor-pointer ${
                  nav.isActive ? 'text-[#E4791D]' : 'text-white'
                }`
              }
            >
              <span className='text-xl font-semibold'>{item.name}</span>
            </NavLink>
          ))}
        </ul>
        <div className='ml-2 mt-4'>
          <NavLink
            to='/login'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Self Care
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
