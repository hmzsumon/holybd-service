import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useCreateOrderMutation } from '../../features/order/orderApi';

import Layout from '../Global/Layout';
import MetaData from '../Layouts/MetaData';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';

const Payment = () => {
  const [createOrder, { isError, isLoading, isSuccess, error }] =
    useCreateOrderMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const paymentBtn = useRef(null);

  // const [payDisable, setPayDisable] = useState(false);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // const paymentData = {
  //   amount: Math.round(totalPrice),
  //   email: user.email,
  //   phoneNo: shippingInfo.phoneNo,
  // };

  const order = {
    item_qty: cartItems.length,
    total: totalPrice,
    address: shippingInfo.address,
    city: shippingInfo.city,
    state: shippingInfo.state,
    country: shippingInfo.country,
    zip: shippingInfo.zip,
    phone: shippingInfo.phone,
    orderItems: cartItems,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    createOrder(order);
    // dispatch(emptyCart());

    // navigate('/order/success');
  };

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
    }
    if (isSuccess) {
      enqueueSnackbar('Order created successfully', { variant: 'success' });
      navigate('/order/success');
    }
  }, [enqueueSnackbar, error, isError, isSuccess, navigate]);

  return (
    <Layout>
      <MetaData title='Holy Tradres: Secure Payment' />

      <main className='w-full mt-20'>
        {/* <!-- row --> */}
        <div className='flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7'>
          {/* <!-- cart column --> */}
          <div className='flex-1'>
            <Stepper activeStep={3}>
              <div className='w-full bg-white'>
                {/* stripe form */}
                <form
                  onSubmit={(e) => submitHandler(e)}
                  autoComplete='off'
                  className='flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-8 my-4'
                >
                  <input
                    ref={paymentBtn}
                    type='submit'
                    value={`Pay daily ৳${totalPrice.toLocaleString()}`}
                    className='bg-orange-500 w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none cursor-pointer'
                  />
                </form>
                {/* stripe form */}
              </div>
            </Stepper>
          </div>

          <PriceSidebar cartItems={cartItems} />
        </div>
      </main>
    </Layout>
  );
};

export default Payment;
