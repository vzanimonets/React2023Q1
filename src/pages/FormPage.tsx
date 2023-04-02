import React, { FC, useState } from 'react';
import Form from '../components/Form/Form';
import { ItemType } from '../components/App/App';
import List from '../components/List/List';

const FormPage: FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  const addItem = (newItem: ItemType) => {
    setItems([newItem, ...items]);
  };
  return (
    <>
      <Form addItem={addItem} />;
      <List data={items} />
    </>
  );
};
export default FormPage;
