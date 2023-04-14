import React, { FC, useCallback, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import List from '../components/List/List';
import { useToasts } from 'react-toast-notifications';
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
  const { addToast } = useToasts();

  const handleSearch = useCallback(
    (q: string | undefined) => {
      try {
        setQuery(q);
      } catch (e) {
        addToast('Request is failed!', {
          appearance: 'error',
          autoDismiss: true,
        });
      } finally {
      }
    },
    [addToast]
  );

  return (
    <>
      {isFetching}
      <SearchBar onSubmit={handleSearch} />
      {isFetching ? <Spinner /> : <List data={data?.users} isLoading={isFetching} />}
    </>
  );
};
export default HomePage;
