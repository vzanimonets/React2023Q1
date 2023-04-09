import React, { FC, useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Form from '../components/Form/Form';
import { ItemType } from '../components/App/App';
import styles from '../components/List/list.module.css';
import Item from '../components/Item/Item';

const FormPage: FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  const addItem = (newItem: ItemType) => {
    setItems([newItem, ...items]);
  };
  return (
    <>
      <ToastProvider>
        <Form addItem={addItem} />
      </ToastProvider>
      <ul className={styles.cards}>
        {items.map((item) => {
          return (
            <li className={styles.cards__item} key={item.id}>
              <Item {...item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FormPage;
