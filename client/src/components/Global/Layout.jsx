import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className='px-4 bg-gray-200 sm:px-6 lg:px-8 py-4 w-full max-w-9xl mx-auto'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
