import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../../assets/images/404-not-found.svg';
import Layout from '../Layout';

const Packages = () => {
  return (
    <Layout>
      <div className='py-10'>
        <h1 className='text-center text-2xl text-gray-800 my-6'>
          This Page Under Processing
        </h1>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={notFound}
            alt='work in progress'
            draggable='false'
            className='sm:w-1/3 h-full'
          />
          <Link
            to='/'
            className='px-4 py-2 bg-blue-500 rounded-sm uppercase shadow hover:shadow-lg text-white'
          >
            Back To Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
