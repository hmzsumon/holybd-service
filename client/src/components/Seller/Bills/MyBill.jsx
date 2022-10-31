import React from 'react';
import { useGetMyBillsQuery } from '../../../features/bills/billsApi';
import { formatDate } from '../../../utils/functions';
import Layout from '../../Global/Layout';

const MyBill = () => {
  const { data } = useGetMyBillsQuery();
  const { bill } = data || {};
  console.log(bill);
  return (
    <Layout>
      <div className='flex flex-col h-screen px-6 py-10 bg-white shadow-lg rounded-lg min-w-full'>
        <div className='mb-6'>
          <p className='text-sm font-medium text-gray-800 '>
            Bill Start At :
            <span className='ml-2 text-sm text-gray-500'>
              {formatDate(bill?.bill_start_at)}
            </span>
          </p>
          <p className='text-sm font-medium text-gray-800 '>
            Daily Bill Amount :
            <span className='ml-2 text-sm text-gray-500'>
              {bill?.daily_bill} ৳
            </span>
          </p>
          <p className='text-sm font-medium text-gray-800 '>
            Discount :
            <span className='ml-2 text-sm text-gray-500'>
              {bill?.discount} ৳
            </span>
          </p>
          <p className='text-sm font-medium text-gray-800 '>
            Total Bill Amount :
            <span className='ml-2 text-sm text-gray-500'>
              {bill?.net_total} ৳
            </span>
          </p>
        </div>
        <button className=' w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Pay Bill
        </button>
      </div>
    </Layout>
  );
};

export default MyBill;
