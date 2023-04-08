import styles from './card.module.css';
import React, { useState } from 'react';
import LikeBtn from '../../assets/images/like.svg';
import { createPortal } from 'react-dom';
import DetailsModal from '../DetailsModal/DetailsModal';

type CardPropsType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
  onClick: () => void;
};

const Card = ({ id, firstName, lastName, image, age }: CardPropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleItemClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const bgStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__image} style={bgStyle}></div>
        <div className={styles.card__content}>
          <div className={styles.card__title}>{`${firstName} ${lastName},${age}`}</div>
          <div className={styles.card__btns}>
            <button className={styles.btn} onClick={handleItemClick}>
              Show Details
            </button>
            <img src={LikeBtn} className={styles.icon__like} alt="" />
            <span className={styles.like__count}>324</span>
          </div>
        </div>
      </div>
      {isModalOpen &&
        createPortal(
          <DetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(!isModalOpen)}
            id={id}
          />,
          document.body
        )}
    </>
  );
};
export default Card;
