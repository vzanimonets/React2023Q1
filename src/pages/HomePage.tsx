import React, { FC, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import List from '../components/List/List';
import { useFindAllQuery } from '../redux/api-slice';
import Spinner from '../components/Spinner/Spinner';

const HomePage: FC = () => {
  const [query, setQuery] = useState<string | undefined>('');
  const {
    data = {
      users: [],
    },
    isFetching,
  } = useFindAllQuery({
    query,
    fields: 'firstName,lastName,age,image',
    limit: 10,
  });

  return (
    <>
      {isFetching}
      <SearchBar onSubmit={(q) => setQuery(q)} />
      {isFetching ? <Spinner /> : <List data={data?.users} isLoading={isFetching} />}
    </>
  );
};
export default HomePage;
