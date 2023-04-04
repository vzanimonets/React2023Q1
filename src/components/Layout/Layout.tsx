import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

const Layout = () => {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Main page';
      case '/about':
        return 'About page';
      case '/forms':
        return 'Forms page';
      default:
        return '';
    }
  };
  const pageTitle = getTitle();
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
