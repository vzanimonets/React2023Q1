import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
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
  return <h2>{getTitle()}</h2>;
};
export default Header;
