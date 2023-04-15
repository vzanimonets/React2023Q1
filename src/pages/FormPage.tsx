import React, { FC } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Form from '../components/Form/Form';
import styles from '../components/List/list.module.css';
import Item from '../components/Item/Item';
import { useAppDispatch, useAppSelector } from '../hooks';
import { add } from '../redux/form-slice';

const FormPage: FC = () => {
  const items = useAppSelector((state) => state.form.items);
  const dispatch = useAppDispatch();

  return (
    <>
      <ToastProvider>
        <Form addItem={(newItem) => dispatch(add(newItem))} />
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
