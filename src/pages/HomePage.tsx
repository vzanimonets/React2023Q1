import React from 'react';
import { ItemType } from '../components/App/App';
import styles from '../components/Item/item.module.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Item from '../components/Item/Item';

type PropsType = {
  data: ItemType[];
};

const HomePage = (props: PropsType) => {
  const { data } = props;
  return (
    <>
      <SearchBar />
      <ul className={styles.cards}>
        {data.map((item) => {
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
export default HomePage;
