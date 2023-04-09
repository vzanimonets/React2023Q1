import React, { FC, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import List from '../components/List/List';
import { ShotInfoType } from '../components/App/App';
import { DataAPI } from '../services/dataAPI';

const HomePage: FC = () => {
  const [items, setItems] = useState<ShotInfoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const params = { fields: 'firstName,lastName,age,image' };
      setIsLoading(true);
      DataAPI.getAll(params).then((data) => {
        setItems((prevState) => [...prevState, ...data.users]);
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearch = (query: string | undefined) => {
    try {
      const params = { query, fields: 'firstName,lastName,age,image' };
      setIsLoading(true);
      DataAPI.findAll(params).then((data) => {
        setItems([...data.users]);
      });
    } finally {
      setIsLoading(false);
    }
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
