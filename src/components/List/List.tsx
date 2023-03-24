import styles from './list.module.css';
import Item from '../Item/Item';
import React from 'react';
import { ItemType } from '../App/App';

type PropsType = {
  data: ItemType[];
};

const List = ({ data }: PropsType) => {
  /**
   * TODO: implement key generation
   */
  return (
    <ul className={styles.cards}>
      {data.map((item, i) => {
        return (
          <li className={styles.cards__item} key={i}>
            <Item {...item} />
          </li>
        );
      })}
    </ul>
  );
};
export default List;
