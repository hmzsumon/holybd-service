import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useUpdateOrderItemMutation } from '../../features/order/orderApi';
import { useGetServiceOrderItemQuery } from '../../features/service/serviceApi';
import Layout from '../Global/Layout';
import Loading from './Loading';

const EditOrderItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, isLoading: loading } = useGetServiceOrderItemQuery(params.id);
  const { service_item: item } = data || {};

  const [
    updateOrderItem,
    { isError, isLoading: updateLoading, isSuccess, error },
  ] = useUpdateOrderItemMutation();

  const {
    icon_url,
    quantity: initQuantity,
    unit_price,
    unit,
    discount: initDiscount,
    total: initTotal,
    service_name,
    order_total: initOrderTotal,
    order_discount: initOrderDiscount,
  } = item ? item : {};

  const { enqueueSnackbar } = useSnackbar();

  const [discount, setDiscount] = useState(initDiscount);
  const [quantity, setQuantity] = useState(initQuantity);

  const [orderTotal, setOrderTotal] = useState(initOrderTotal);
  const [orderDiscount, setOrderDiscount] = useState(initOrderDiscount);

  const [total, setTotal] = useState(initTotal);

  const handleDiscountChange = (e) => {
    const discount = e.target.value;
    setDiscount(discount);
    setTotal(quantity * unit_price - discount);
    setOrderTotal(
      initOrderTotal - initTotal + quantity * unit_price - discount
    );

    setOrderDiscount(Number(initOrderDiscount) + Number(discount));
  };

  const increaseQuantity = (quantity) => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    setTotal(newQty * unit_price - discount);
    setOrderTotal(initOrderTotal - initTotal + newQty * unit_price - discount);
  };

  const decreaseQuantity = (quantity) => {
    const newQty = quantity - 1;
    if (quantity <= 1) return;
    setQuantity(newQty);
    setTotal(newQty * unit_price - discount);
    setOrderTotal(initOrderTotal - initTotal + newQty * unit_price - discount);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set('discount', discount);
    myForm.set('quantity', quantity);
    myForm.set('total', total);
    myForm.set('order_total', orderTotal);
    myForm.set('order_discount', orderDiscount);

    updateOrderItem({ id: params.id, data: myForm });
  };

  useEffect(() => {
    if (params.id === item?.id) {
      setDiscount(initDiscount);
      setQuantity(initQuantity);
      setTotal(initTotal);
      setOrderTotal(initOrderTotal);
      setOrderDiscount(initOrderDiscount);
    }
  }, [
    params.id,
    item?.id,
    initDiscount,
    initQuantity,
    initTotal,
    initOrderTotal,
    initOrderDiscount,
  ]);

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
    }
    if (isSuccess) {
      enqueueSnackbar('Order item updated successfully', {
        variant: 'success',
      });
      navigate(`/admin/order/${params.id}`);
    }
  }, [isSuccess, enqueueSnackbar, navigate, params.id, isError, error]);

  return (
    <Layout>
      {loading && !item ? (
        <Loading />
      ) : (
        <div className='flex p-4 items-start bg-white border rounded gap-2 sm:gap-0 hover:shadow-lg'>
          {/* <!-- image container --> */}
          <div className='w-full sm:w-32 h-20'>
            <img
              draggable='false'
              className='h-full w-full object-contain'
              src={icon_url}
              alt={service_name}
            />
          </div>
          {/* <!-- image container --> */}

          {/* <!-- order desc container --> */}
          <div className='flex flex-col sm:flex-row justify-between w-full'>
            <div className='flex flex-col gap-1 overflow-hidden'>
              <p className='text-sm'>{service_name}</p>
              <div className='flex gap-1 items-center'>
                <span
                  onClick={() => decreaseQuantity(quantity)}
                  className='w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer'
                >
                  <p>-</p>
                </span>
                <li
                  className='w-auto list-none border outline-none text-center rounded-sm py-0.5 text-gray-700 font-medium text-sm qtyInput'
                  disabled
                >
                  {quantity} {unit}
                </li>
                <span
                  onClick={() => increaseQuantity(quantity)}
                  className='w-7 h-7 text-xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer'
                >
                  +
                </span>
              </div>
              <p className='text-xs text-gray-500'>
                Total: ৳ {total?.toLocaleString()}
              </p>
            </div>

            <div className='flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2'>
              <p className='text-sm'>
                {' '}
                1 {unit} {unit_price?.toLocaleString()} ৳
              </p>

              <form onSubmit={submitHandler} className='flex flex-col gap-1.5'>
                <TextField
                  id='outlined-basic'
                  label='Discount'
                  variant='outlined'
                  size='small'
                  type='number'
                  value={discount}
                  onChange={handleDiscountChange}
                />

                <button className='w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                  {updateLoading ? 'Updating...' : 'Update'}
                </button>
              </form>
            </div>
            <div className='flex items-center flex-col justify-center'>
              <div className='flex gap-2 text-sm'>
                <p className='font-medium'>Order Total :</p>
                <p>{orderTotal} ৳</p>
              </div>
              <div className='flex gap-2 text-sm'>
                <p className='font-medium'> Order Discount:</p>
                <p>{orderDiscount} ৳</p>
              </div>
            </div>
          </div>
          {/* <!-- order desc container --> */}
        </div>
      )}
    </Layout>
  );
};

export default EditOrderItem;
