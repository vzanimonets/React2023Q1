import React, { FC, useState } from 'react';
import Form from '../components/Form/Form';
import { ItemType, ShotInfoType } from '../components/App/App';
import List from '../components/List/List';

const FormPage: FC = () => {
  const [items, setItems] = useState<ShotInfoType[]>([]);

  const addItem = (newItem: ItemType) => {
    setItems([newItem, ...items]);
  };
  return (
    <>
      <Form addItem={addItem} />;
      <List data={items} isLoading={false} onClick={() => {}} />
    </>
  );
};
export default FormPage;
