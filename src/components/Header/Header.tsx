import React from 'react';

type PropsType = {
  pageTitle: string;
};

const Header = ({ pageTitle }: PropsType) => {
  return <h2>{pageTitle}</h2>;
};
export default Header;
