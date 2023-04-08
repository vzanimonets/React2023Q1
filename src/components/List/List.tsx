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
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.cards}>
          {data.map((item) => {
            return (
              <li className={styles.cards__item} key={item.id}>
                <Card {...item} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default List;
