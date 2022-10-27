import React from 'react';
import Layout from '../../Global/Layout';
import Services from '../Service/Services';
import DashboardCard01 from './DashboardCard01';

const SellerDashboard = () => {
  return (
    <Layout>
      <div className='grid grid-cols-12 gap-6'>
        <DashboardCard01 />
      </div>
      <div>
        <Services />
      </div>
    </Layout>
  );
};

export default SellerDashboard;
