import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import Icon from '../../../assets/images/user-group.svg';
import EditMenu from '../../Global/EditMenu';

function DashboardCard01({ isLoading, users }) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200'>
      {isLoading ? (
        <div className='flex items-center justify-center w-full py-6 '>
          <RingLoader color={'#36D7B7'} size={60} />
        </div>
      ) : (
        <div className='px-5 pt-5'>
          <header className='flex justify-between items-start mb-2'>
            {/* Icon */}
            <img src={Icon} width='32' height='32' alt='Icon 01' />
            {/* Menu button */}
            <EditMenu className='relative inline-flex'>
              <li>
                <Link
                  className='font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3'
                  to='/all-sellers'
                >
                  All Sellers
                </Link>
              </li>
              <li>
                <Link
                  className='font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3'
                  to='/create-seller'
                >
                  Create Seller
                </Link>
              </li>
            </EditMenu>
          </header>
          <h2 className='text-lg font-semibold text-slate-800 mb-2'>
            All Sellers
          </h2>

          <div className='flex items-start'>
            <div className='text-3xl font-bold text-slate-800 mr-2'>
              {users?.length}
            </div>
            {/* <div className='text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full'>
              fee 0%
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardCard01;
