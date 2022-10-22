import React from 'react';
import Banner from '../../../Home/Banner/Banner';
import Layout from '../Layout';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
};

export default Home;
