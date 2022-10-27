import { DataGrid } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  useDeleteServiceMutation,
  useGetServicesQuery,
} from '../../../features/service/serviceApi';
import Layout from '../../Global/Layout';

import BackdropLoader from '../../Layouts/BackdropLoader';
import MetaData from '../../Layouts/MetaData';
import Actions from './Actions';

const ServiceTable = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading } = useGetServicesQuery();
  const services = data?.services;

  const [
    deleteService,
    { isError, isSuccess, isLoading: deleteLoading, error },
  ] = useDeleteServiceMutation();

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
    }

    if (isSuccess) {
      enqueueSnackbar('Service deleted successfully', { variant: 'success' });
    }
  }, [enqueueSnackbar, isError, isSuccess, error]);

  const deleteProductHandler = (id) => {
    deleteService(id);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      minWidth: 50,
      flex: 0.1,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-full'>
              <img
                draggable='false'
                src={params.row.image}
                alt={params.row.name}
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            {params.row.name}
          </div>
        );
      },
    },

    {
      field: 'unit',
      headerName: 'Unit',
      minWidth: 200,
      flex: 1,
    },

    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      minWidth: 100,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: (params) => {
        return <span>৳{params.row.price?.toLocaleString()}</span>;
      },
    },

    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 100,
      flex: 0.3,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Actions
            editRoute={'service'}
            deleteHandler={deleteProductHandler}
            id={params.row.id}
          />
        );
      },
    },
  ];

  const rows = [];

  services &&
    services.forEach((item) => {
      rows.unshift({
        id: item.id,
        name: item.name,
        image: item.icon_url,
        price: item.unitprice,
        unit: item.unit,
      });
    });

  return (
    <Layout>
      <MetaData title='Admin Services | Holy' />

      {isLoading && <BackdropLoader />}

      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-lg font-medium uppercase'> services</h1>
        <Link
          to='/admin/new-service'
          className='py-2 px-4 rounded shadow font-medium text-white bg-blue-600 hover:shadow-lg'
        >
          New Service
        </Link>
      </div>
      <div
        className='bg-white rounded-xl shadow-lg w-full'
        style={{ height: 470 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectIconOnClick
          sx={{
            boxShadow: 0,
            border: 0,
          }}
        />
      </div>
    </Layout>
  );
};

export default ServiceTable;
