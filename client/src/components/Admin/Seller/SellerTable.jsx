import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetSellersQuery } from '../../../features/seller/sellerApi';
import Layout from '../../Global/Layout';

const SellerTable = () => {
  const { data, isLoading } = useGetSellersQuery();
  const { sellers } = data || {};

  const navigate = useNavigate();

  const [select, setSelection] = React.useState([]);

  // handle delete user
  const handleDelete = () => {
    // deleteManyUsers(select);
    // setSelection([]);
  };

  // handle lock user
  const handleLock = () => {
    // lockManyUsers(select);
    // setSelection([]);
  };

  // handle unlock user
  const handleUnlock = () => {
    // unlockManyUsers(select);
    // setSelection([]);
  };

  useEffect(() => {}, []);

  const testSelect = (e) => {
    setSelection(e);
  };

  const columns = [
    {
      field: 'seller_id',
      headerName: 'Seller ID',
      width: 160,
    },
    {
      field: 'userName',
      headerName: 'User Name',
      width: 160,
    },

    {
      field: 'businessName',
      headerName: 'Business Name',
      width: 160,
    },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone No.',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => (
        <div>
          <VisibilityIcon
            className='text-blue-500 cursor-pointer'
            onClick={() => console.log('View')}
          />
        </div>
      ),
    },
  ];

  const rows = [];

  sellers &&
    sellers.map((user) => {
      rows.unshift({
        id: user.user_id,
        seller_id: user.customer_id,
        userName: user.username,
        firstName: user.name,
        phoneNumber: user.phone,
        businessName: user.business_name,
      });
    });

  return (
    <Layout>
      <div>
        <h1 className=' text-xl text-gray-800 my-6'>
          Total Sellers: {sellers?.length}
        </h1>
      </div>
      {select.length > 0 && (
        <div className='my-6 bg-white flex gap-10 px-4 py-2 rounded-md'>
          <h2>{select?.length} Items Selected</h2>
          <div className='space-x-4'>
            <LockIcon
              className='text-yellow-500 cursor-pointer'
              onClick={() => handleLock()}
            />
            <LockOpenIcon
              className='text-green-500 cursor-pointer'
              onClick={() => handleUnlock()}
            />
            <button
              className='text-red-500 cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed'
              onClick={handleDelete}
              disabled={select.length === sellers?.length}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
      <div
        className='bg-white rounded-xl shadow-lg w-full'
        style={{ height: 470 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
          onSelectionModelChange={(id) => {
            testSelect(id);
          }}
        />
      </div>
    </Layout>
  );
};

export default SellerTable;
