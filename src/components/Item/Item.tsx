import styles from './item.module.css';
import React from 'react';
import { ReactComponent as LikeBtn } from '../../assets/images/like.svg';

type ItemPropsType = {
  title: string;
  text: string;
  image: string;
};

const Item = ({ title, text, image }: ItemPropsType) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__image} style={bgStyle}></div>
      <div className={styles.card__content}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__text}>{text}</div>
        <div className={styles.card__btns}>
          <button className={styles.btn}>Button</button>
          <LikeBtn className={styles.icon__like} />
          <span className={styles.like__count}>324</span>
        </div>
      </div>
    </div>
  );
};
export default Item;
