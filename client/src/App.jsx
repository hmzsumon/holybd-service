import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import CreateSeller from './components/Admin/Seller/CreateSeller';
import SellerTable from './components/Admin/Seller/SellerTable';
import NewService from './components/Admin/Service/NewService';
import ServiceTable from './components/Admin/Service/ServiceTable';
import Home from './components/Layouts/UI/Home/Home';
import Login from './components/Layouts/UI/Login';
import NotFound from './components/NotFound';
import SellerDashboard from './components/Seller/SellerDashboard/SellerDashboard';
import { useLoadUserQuery } from './features/auth/authApi';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const App = () => {
  const { data, isLoading } = useLoadUserQuery();
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute isAdmin={true} isLoading={isLoading}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/create-seller'
          element={
            <ProtectedRoute isAdmin={true} isLoading={isLoading}>
              <CreateSeller />
            </ProtectedRoute>
          }
        />

        <Route
          path='/all-sellers'
          element={
            <ProtectedRoute isAdmin={true} isLoading={isLoading}>
              <SellerTable />
            </ProtectedRoute>
          }
        />

        <Route
          path='/admin/services'
          element={
            <ProtectedRoute isAdmin={true} isLoading={isLoading}>
              <ServiceTable />
            </ProtectedRoute>
          }
        />

        <Route
          path='/admin/new-service'
          element={
            <ProtectedRoute isAdmin={true} isLoading={isLoading}>
              <NewService />
            </ProtectedRoute>
          }
        />

        <Route
          path='/seller/dashboard'
          element={
            <ProtectedRoute isAdmin={false} isLoading={isLoading}>
              <SellerDashboard />
            </ProtectedRoute>
          }
        />
        {/* Not Found Page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
