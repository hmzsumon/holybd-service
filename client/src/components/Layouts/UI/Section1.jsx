import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const Section1 = () => {
  return (
    <div className='my-10'>
      <h1 className='text-center text-2xl md:text-5xl text-gray-800 font-bold'>
        What are You Looking For ?
      </h1>
      <div className='flex items-center justify-center my-10'>
        <ButtonGroup
          disableElevation
          variant='contained'
          aria-label='Disabled elevation buttons'
        >
          <Button>Packages</Button>
          <Button>Reconnect</Button>
        </ButtonGroup>
      </div>

      <div>
        <div className='grid md:grid-cols-3 gap-6 px-4 md:px-20'>
          <li className=' list-none border py-6 rounded px-2 cursor-pointer hover:scale-105 transition-all shadow-xl'>
            <h4 className='text-2xl font-bold text-orange-500'>Price Range</h4>
            <h2 className='text-3xl font-bold text-gray-800'>1000 - 500 </h2>
          </li>
          <li className=' list-none border py-6 rounded px-2 cursor-pointer hover:scale-105 transition-all shadow-xl'>
            <h4 className='text-2xl font-bold text-orange-500'>
              Network Bandwidth
            </h4>
            <h2 className='text-3xl font-bold text-gray-800'>
              10Mbps - 50Mbps{' '}
            </h2>
          </li>

          <li className=' list-none border py-6 rounded px-2 cursor-pointer hover:scale-105 transition-all shadow-xl'>
            <h4 className='text-2xl font-bold text-orange-500'>Special Need</h4>
            <h2 className='text-3xl font-bold text-gray-800'>Please Choose </h2>
          </li>
        </div>
        <div className='flex items-center justify-center my-10'>
          <Button variant='contained'>Result</Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
