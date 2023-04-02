import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
