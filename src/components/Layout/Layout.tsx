import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import withRouter from '../HOC/withRouter';

const Layout = () => {
  const pageTitle = location.pathname === '/' ? 'Main page' : 'About';
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
export default withRouter(Layout);
