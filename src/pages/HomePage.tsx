import React, { FC, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import List from '../components/List/List';
import { ShotInfoType } from '../components/App/App';
import { DataAPI } from '../services/dataAPI';

const HomePage: FC = () => {
  const [items, setItems] = useState<ShotInfoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const params = { fields: 'firstName,lastName,age,image' };
      setIsLoading(true);
      const data = await DataAPI.getAll(params);
      setIsLoading(false);
      setItems((prevState) => [...prevState, ...data.users]);
    })();
  }, []);

  const handleSearch = (query: string | undefined) => {
    const params = { query, fields: 'firstName,lastName,age,image' };
    setIsLoading(true);
    DataAPI.findAll(params).then((data) => {
      setIsLoading(false);
      setItems([...data.users]);
    });
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      <>
        <List data={items} isLoading={isLoading} />
      </>
    </>
  );
};
export default HomePage;
