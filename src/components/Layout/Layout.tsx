import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

const Layout = () => {
  const pageTitle = 'Page title';
  return (
    <>
      <Header pageTitle={pageTitle} />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
