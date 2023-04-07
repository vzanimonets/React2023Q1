import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import List from '../components/List/List';
import Modal from '../components/Modal/Modal';
import { ShotInfoType } from '../components/App/App';
import { DataAPI } from '../services/dataAPI';

const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleItemClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SearchBar />

      <>
        <List data={items} isLoading={isLoading} onClick={handleItemClick} />
        {isModalOpen &&
          createPortal(
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)} />,
            document.body
          )}
      </>
    </>
  );
};
export default HomePage;
