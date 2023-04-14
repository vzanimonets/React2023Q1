import React, { FC } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Form from '../components/Form/Form';
import { ItemType } from '../components/App/App';
import styles from '../components/List/list.module.css';
import Item from '../components/Item/Item';
import { useAppDispatch, useAppSelector } from '../hooks';
import { add } from '../redux/form-slice';

const FormPage: FC = () => {
  const items = useAppSelector((state) => state.form.items);
  const dispatch = useAppDispatch();

  const addItem = (newItem: ItemType) => {
    dispatch(add(newItem));
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
