import styles from './item.module.css';
import React from 'react';
import LikeBtn from '../../assets/images/like.svg';

type ItemPropsType = {
  id: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  description?: string;
  image: string;
  status?: string;
  delivery?: string;
  onClick?: () => void;
};

const Item = ({
  firstName,
  lastName,
  title,
  age,
  description,
  image,
  status,
  delivery,
  onClick,
}: ItemPropsType) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__image} style={bgStyle}></div>
      <div className={styles.card__content}>
        <div className={styles.card__title}>
          {title ? title : `${firstName} ${lastName},${age}`}
        </div>
        {description && <div className={styles.card__text}>{description}</div>}
        {status && (
          <div>
            <label>Status: </label>
            <i>{status}</i>
          </div>
        )}
        {delivery && (
          <div>
            <label>Delivery: </label>
            <i>{delivery}</i>
          </div>
        )}
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
