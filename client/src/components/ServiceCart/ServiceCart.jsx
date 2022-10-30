import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../Cart/CartItem';
import EmptyCart from '../Cart/EmptyCart';
import PriceSidebar from '../Cart/PriceSidebar';
import Layout from '../Global/Layout';
import MetaData from '../Layouts/MetaData';

const ServiceCart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const placeOrderHandler = () => {
    navigate('/shipping');
  };

  return (
    <Layout>
      <MetaData title='Shopping Cart | Holy Tradres' />
      <main className='w-full mt-20'>
        {/* <!-- row --> */}
        <div className='flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7'>
          {/* <!-- cart column --> */}
          <div className='flex-1'>
            {/* <!-- cart items container --> */}
            <div className='flex flex-col shadow bg-white'>
              <span className='font-medium text-lg px-2 sm:px-8 py-4 border-b'>
                My Cart ({cartItems.length})
              </span>

              {cartItems && cartItems.length === 0 && <EmptyCart />}

              {cartItems &&
                cartItems.map((item) => <CartItem {...item} inCart={true} />)}

              {/* <!-- place order btn --> */}
              <div className='flex justify-end'>
                <button
                  onClick={placeOrderHandler}
                  disabled={cartItems.length < 1 ? true : false}
                  className={`${
                    cartItems.length < 1
                      ? 'bg-primary-grey cursor-not-allowed'
                      : 'bg-orange-500'
                  } w-full sm:w-1/3 mx-2 sm:mx-6 my-4 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm`}
                >
                  PLACE ORDER
                </button>
              </div>
              {/* <!-- place order btn --> */}
            </div>
            {/* <!-- cart items container --> */}

            {/* <!-- saved for later items container --> */}
            {/* <div className='flex flex-col mt-5 shadow bg-white'>
              <span className='font-medium text-lg px-2 sm:px-8 py-4 border-b'>
                Saved For Later ({saveForLaterItems.length})
              </span>
              {saveForLaterItems &&
                saveForLaterItems.map((item) => <SaveForLaterItem {...item} />)}
            </div> */}
            {/* <!-- saved for later container --> */}
          </div>
          {/* <!-- cart column --> */}

          <PriceSidebar cartItems={cartItems} />
        </div>
        {/* <!-- row --> */}
      </main>
    </Layout>
  );
};

export default ServiceCart;
