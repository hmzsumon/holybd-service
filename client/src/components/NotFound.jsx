import { Link } from 'react-router-dom';
import notFound from '../assets/images/404-not-found.svg';
import Layout from './Layouts/UI/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className='mt-16 mb-16 flex flex-col gap-4 items-center justify-center'>
        <img
          draggable='false'
          className='sm:w-1/3 h-full'
          src={notFound}
          alt='Page Not Found'
        />
        <Link
          to='/'
          className='px-4 py-2 bg-blue-500 rounded-sm uppercase shadow hover:shadow-lg text-white'
        >
          Back To Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
