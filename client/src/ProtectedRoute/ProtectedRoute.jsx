import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAdmin, isLoading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLoading === false &&
        (isAuthenticated === false ? (
          <Navigate to='/login' />
        ) : isAdmin ? (
          user.role !== 'admin' ? (
            <Navigate to='/login' />
          ) : (
            children
          )
        ) : (
          children
        ))}
    </>
  );
};

export default ProtectedRoute;
