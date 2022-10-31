import React from 'react';
import Layout from '../../Global/Layout';

import { DataGrid } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

import { useGetAdminBillsQuery } from '../../../features/bills/billsApi';
import { formatDate } from '../../../utils/functions';
import BackdropLoader from '../../Layouts/BackdropLoader';
import MetaData from '../../Layouts/MetaData';
import Actions from '../Actions';

const BillTable = () => {
  const { data, isLoading } = useGetAdminBillsQuery();

  const { bills } = data || {};

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {}, []);

  const deleteOrderHandler = (id) => {
    console.log(id);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Order ID',
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: 'username',
      headerName: 'Username',
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      type: 'number',
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: 'dailyBill',
      headerName: 'Daily Bill',
      type: 'number',
      minWidth: 150,
      flex: 0.1,
      renderCell: (params) => {
        return <span>{params.row.dailyBill.toLocaleString()} ৳</span>;
      },
    },
    {
      field: 'discount',
      headerName: 'Discount',
      type: 'number',
      minWidth: 150,
      flex: 0.1,
      renderCell: (params) => {
        return <span>{params.row.discount.toLocaleString()} ৳</span>;
      },
    },
    {
      field: 'total',
      headerName: 'Total',
      type: 'number',
      minWidth: 150,
      flex: 0.1,
      renderCell: (params) => {
        return <span>{params.row.total.toLocaleString()} ৳</span>;
      },
    },
    {
      field: 'billStartAt',
      headerName: 'Bill Start At',
      type: 'date',
      minWidth: 200,
      flex: 0.5,
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
            editRoute={'order'}
            deleteHandler={deleteOrderHandler}
            id={params.row.id}
          />
        );
      },
    },
  ];

  const rows = [];

  bills &&
    bills.forEach((bill) => {
      rows.unshift({
        id: bill.id,
        itemsQty: bill.item_quantity,
        dailyBill: bill.daily_bill,
        total: bill.net_total,
        billStartAt: formatDate(bill.bill_start_at),
        status: bill.order_status,
        username: bill.username,
        discount: bill.discount,
      });
    });

  return (
    <Layout>
      <MetaData title='Admin Orders | Holy Tradres' />

      {isLoading && <BackdropLoader />}

      <h1 className='text-lg font-medium uppercase'>orders</h1>
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

export default BillTable;
