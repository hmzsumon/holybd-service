import React from 'react';
import { useGetMyOrdersQuery } from '../../features/order/orderApi';
import Layout from '../Global/Layout';
import Loader from '../Layouts/Loader';
import OrderItem from './OrderItem';
const orderStatus = ['processing', 'shipped', 'delivered'];
const dt = new Date();
const ordertime = [dt.getMonth(), dt.getFullYear() - 1, dt.getFullYear() - 2];

const MyOrders = () => {
  const { data, isLoading } = useGetMyOrdersQuery();
  const { orders, orderItems } = data || {};
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-3 sm:mr-4 overflow-hidden'>
          {orders &&
            orders
              .map((order) => {
                const { id, status, created_at, deliveredAt } = order;

                return orderItems.map((item, index) => (
                  <OrderItem
                    {...item}
                    key={index}
                    orderId={id}
                    orderStatus={status}
                    created_at={created_at}
                    deliveredAt={deliveredAt}
                  />
                ));
              })
              .reverse()}
        </div>
      )}
    </Layout>
  );
};

export default MyOrders;
