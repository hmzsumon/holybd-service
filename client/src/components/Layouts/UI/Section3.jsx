import React from 'react';
import img1 from '../../../assets/images/Offers/img1.png';
import img2 from '../../../assets/images/Offers/img2.png';

const Section3 = () => {
  return (
    <div className='my-20'>
      <h1 className='text-center text-2xl md:text-5xl text-gray-800 font-bold'>
        Ongoing <span className='text-orange-500'>Hot Offers</span>
      </h1>
      <div className='grid md:grid-cols-2 gap-6 mx-auto px-6 md:w-[75%] my-10'>
        <div className='rounded-lg shadow-lg'>
          <img src={img1} alt='' className='rounded-lg border' />
        </div>
        <div className='rounded-lg shadow-lg'>
          <img src={img2} alt='' className='rounded-lg border' />
        </div>
      </div>
    </div>
  );
};

export default Section3;
