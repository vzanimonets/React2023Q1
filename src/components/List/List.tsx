import styles from './list.module.css';
import React, { FC } from 'react';
import { ShotInfoType } from '../App/App';
import Spinner from '../Spinner/Spinner';
import Card from '../Card/Card';

type PropsType = {
  data: ShotInfoType[];
  isLoading: boolean;
};

const List: FC<PropsType> = ({ data, isLoading }) => {
  if (isLoading) return <Spinner />;
  return (
    <>
      {data.length ? (
        <ul className={styles.cards}>
          {data.map((item) => {
            return (
              <li className={styles.cards__item} key={item.id}>
                <Card {...item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No exact matches found!</p>
      )}
    </>
  );
};
export default List;
