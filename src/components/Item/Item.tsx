import styles from './item.module.css';
import React from 'react';
import LikeBtn from '../../assets/images/like.svg';

type ItemPropsType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
  onClick: () => void;
};

const Item = ({ firstName, lastName, image, age, onClick }: ItemPropsType) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__image} style={bgStyle}></div>
      <div className={styles.card__content}>
        <div className={styles.card__title}>{`${firstName} ${lastName},${age}`}</div>
        <div className={styles.card__btns}>
          <button className={styles.btn} onClick={onClick}>
            Show Details
          </button>
          <img src={LikeBtn} className={styles.icon__like} alt="" />
          <span className={styles.like__count}>324</span>
        </div>
      </div>
    </div>
  );
};
export default Item;
