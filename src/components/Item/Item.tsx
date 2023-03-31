import styles from './item.module.css';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LikeBtn } from '../../assets/images/like.svg';

type ItemPropsType = {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  delivery: string;
};

const Item = ({ title, description, image, status, delivery }: ItemPropsType) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__image} style={bgStyle}></div>
      <div className={styles.card__content}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__text}>{description}</div>
        <div>
          <label>Status: </label>
          <i>{status}</i>
        </div>
        <div>
          <label>Delivery: </label>
          <i>{delivery}</i>
        </div>
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
