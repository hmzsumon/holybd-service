import React from 'react';
import Layout from '../../Global/Layout';
import DashboardCard01 from './DashboardCard01';
import DashboardCard02 from './DashboardCard02';

const AdminDashboard = () => {
  return (
    <Layout>
      <div className='grid grid-cols-12 gap-6'>
        <DashboardCard01 />
        <DashboardCard02 />
      </div>
    </Layout>
  );
};

export default AdminDashboard;
