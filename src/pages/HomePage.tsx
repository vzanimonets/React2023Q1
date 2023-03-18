import React from 'react';
import { ItemType } from '../components/App/App';
import SearchBar from '../components/SearchBar/SearchBar';

type PropsType = {
  data: ItemType[];
};

const HomePage = (props: PropsType) => {
  const { data } = props;
  return (
    <>
      <SearchBar />
    </>
  );
};
export default HomePage;
