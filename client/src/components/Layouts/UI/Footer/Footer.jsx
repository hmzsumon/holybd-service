import React from 'react';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className='bg-gray-900 py-14 px-10'>
      <div className=' flex justify-center w-full md:justify-start'>
        <img src={logo} alt='My-Dollar' className='w-24' />
      </div>
      <div className='my-6 flex flex-col-reverse gap-4 md:flex-row items-center md:justify-between'>
        <ul className='  flex gap-10 list-none'>
          <Link to='/'>
            <li className='text-slate-500 hover:text-slate-700 '>Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-slate-500 hover:text-slate-700 '>About</li>
          </Link>

          <Link to='/contact'>
            <li className='text-slate-500 hover:text-slate-700 '>Contact</li>
          </Link>
        </ul>
        <ul className='  flex gap-4 list-none'>
          <Link to='/'>
            <li className='text-blue-600 text-2xl hover:text-gray-200'>
              <BsFacebook />
            </li>
          </Link>
          <Link to='/about'>
            <li className='text-blue-600 text-2xl hover:text-gray-200'>
              <AiFillTwitterCircle />
            </li>
          </Link>

          <Link to='/contact'>
            <li className='text-blue-600 text-2xl hover:text-gray-200'>
              <AiFillLinkedin />
            </li>
          </Link>
        </ul>
      </div>
      <hr className='  border-slate-500' />
      <p className='text-slate-500 my-4 text-center'>
        Copyright © 2022 Holy Traders All Right Reserved{' '}
      </p>
    </div>
  );
};

export default Footer;
