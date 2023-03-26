import styles from './list.module.css';
import Item from '../Item/Item';
import React from 'react';
import { ItemType } from '../App/App';

type PropsType = {
  data: ItemType[];
};

const List = ({ data }: PropsType) => {
  return (
    <ul className={styles.cards}>
      {data.map((item) => {
        return (
          <li className={styles.cards__item} key={item.id}>
            <Item {...item} />
          </li>
        );
      })}
    </ul>
  );
};
export default List;
