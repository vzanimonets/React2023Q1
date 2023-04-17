import React, { FC } from 'react';
import styles from './modal.module.css';
import Spinner from '../Spinner/Spinner';
import { useGetOneQuery } from '../../redux/api-slice';

type ModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};
export type DetailsType = {
  firstName: string;
  lastName: string;
  maidenName: string;
  image: string;
  age: number;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  height: string;
  weight: string;
  eyeColor: string;
};

const DetailsModal: FC<ModalPropsType> = ({ id, isOpen, onClose }) => {
  const { data, isFetching } = useGetOneQuery(id);
  if (!isOpen) return null;
  return (
    <div onClick={onClose} data-testid="overlay" className={styles.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modalContainer}
        data-testid="modal"
      >
        <div className={styles.modalRight}>
          <span className={styles.close} onClick={onClose}>
            X
          </span>
          <div className={styles.content}>
            <span className={styles.title}>Details information</span>
            {isFetching ? (
              <Spinner />
            ) : (
              <div className={styles.content__inner}>
                <img src={data?.image} alt={data?.username} />
                <div className={styles.content_inner__data}>
                  <div className={styles.row}>
                    <span>first name:</span>
                    <span>{data?.firstName}</span>
                  </div>
                  <div className={styles.row}>
                    <span>last name:</span>
                    <span>{data?.lastName}</span>
                  </div>
                  <div className={styles.row}>
                    <span>maiden name:</span>
                    <span>{data?.maidenName}</span>
                  </div>
                  <div className={styles.row}>
                    <span>age:</span>
                    <span>{data?.age}</span>
                  </div>
                  <div className={styles.row}>
                    <span>email:</span>
                    <span>{data?.email}</span>
                  </div>
                  <div className={styles.row}>
                    <span>phone:</span>
                    <span>{data?.phone}</span>
                  </div>
                  <div className={styles.row}>
                    <span>username:</span>
                    <span>{data?.username}</span>
                  </div>
                  <div className={styles.row}>
                    <span>birthday:</span>
                    <span>{data && new Date(data.birthDate).toLocaleDateString()}</span>
                  </div>
                  <div className={styles.row}>
                    <span>height:</span>
                    <span>{data?.height}</span>
                  </div>
                  <div className={styles.row}>
                    <span>weight:</span>
                    <span>{data?.weight}</span>
                  </div>
                  <div className={styles.row}>
                    <span>eye color:</span>
                    <span>{data?.eyeColor}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
