import React, { useEffect, useState } from 'react';
import { ItemType } from '../components/App/App';
import SearchBar from '../components/SearchBar/SearchBar';
import List from '../components/List/List';

type PropsType = {
  data: ItemType[];
};

const HomePage = ({ data }: PropsType) => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    setItems([...data]);
  }, [data]);

  return (
    <>
      <SearchBar />
      <List data={items} />
    </>
  );
};
export default HomePage;
