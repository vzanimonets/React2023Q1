import styles from './list.module.css';
import React, { FC } from 'react';
import { ShotInfoType } from '../App/App';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';

type PropsType = {
  data: ShotInfoType[];
  isLoading: boolean;
  onClick: () => void;
};

const List: FC<PropsType> = ({ data, isLoading, onClick }) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.cards}>
          {data.map((item) => {
            return (
              <li className={styles.cards__item} key={item.id}>
                <Card {...item} onClick={onClick} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default List;
