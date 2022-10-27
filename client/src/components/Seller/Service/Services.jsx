import React from 'react';
import { useGetServicesQuery } from '../../../features/service/serviceApi';
import Loader from '../../Layouts/Loader';
import Service from './Service';

const Services = () => {
  const { data, isLoading } = useGetServicesQuery();
  const { services } = data || {};

  return (
    <div className='py-10'>
      <h1 className='text-3xl text-center font-bold text-gray-800'>
        Our Services
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-20 my-20'>
          {services &&
            services.map((service) => (
              <Service key={service.id} service={service} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Services;
