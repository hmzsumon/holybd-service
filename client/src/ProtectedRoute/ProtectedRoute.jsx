import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }
  return <div>{children ? children : <Outlet />}</div>;
};

export default ProtectedRoute;
