import React from 'react';
import img from '../../../assets/images/support-image.jpg';

const Section4 = () => {
  return (
    <div className='my-20'>
      <div className='grid md:grid-cols-2 gap-6 mx-auto px-6 md:w-[95%] my-10'>
        <div>
          <h1 className='text-center text-2xl md:text-5xl text-gray-800 font-bold'>
            Need <span className='text-orange-500'>New Connection?</span>
          </h1>
          <section className='bg-white dark:bg-gray-900'>
            <div className='py-8 lg:py-12 px-4 mx-auto max-w-screen-md'>
              <form action='#' className='space-y-8'>
                <div>
                  <label
                    for='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your Name:
                  </label>
                  <input
                    type='text'
                    id='email'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='name@flowbite.com'
                    required
                  />
                </div>
                <div>
                  <label
                    for='subject'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Phone Number:
                  </label>
                  <input
                    type='text'
                    id='phone'
                    className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='Let us know how we can help you'
                    required
                  />
                </div>
                <div>
                  <label
                    for='subject'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Email Address:
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder='Let us know how we can help you'
                    required
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label
                    for='message'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Your Address:
                  </label>
                  <textarea
                    id='message'
                    rows='6'
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
        <div>
          <h1 className='text-center text-2xl md:text-5xl text-gray-800 font-bold'>
            24/7 Support <span className='text-orange-500'>Service</span>
          </h1>
          <div className=' relative py-8 lg:py-12 flex items-center justify-center'>
            {/* Over Lay */}
            <div className='absolute flex items-center justify-center w-96 h-[80.5%] bg-gray-300 rounded-3xl opacity-50'>
              <div>
                <h1 className='text-gray-900 text-3xl font-bold opacity-100'>
                  Enjoy <br /> Premium Customer Service
                </h1>
              </div>
            </div>
            <div className='w-96 h-auto'>
              <img src={img} alt='support' className='w-96 rounded-3xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
