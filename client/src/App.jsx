import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/Layouts/UI/About/About';
import Contact from './components/Layouts/UI/Contact/Contact';
import Home from './components/Layouts/UI/Home/Home';
import Login from './components/Layouts/UI/Login';
import Packages from './components/Layouts/UI/Packages/Packages';
import PayBill from './components/Layouts/UI/PayBill/PayBill';
import Signup from './components/Layouts/UI/Signup';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/about' element={<About />} />
        <Route path='/pay-bill' element={<PayBill />} />
        <Route path='/contact' element={<Contact />} />
        {/* Not Found Page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
