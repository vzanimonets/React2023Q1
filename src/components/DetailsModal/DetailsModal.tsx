import React, { FC, useEffect, useState } from 'react';
import styles from './modal.module.css';
import Spinner from '../Spinner/Spinner';
import { DataAPI } from '../../services/dataAPI';

type ModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};
export type DetailsType = {
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  email: string;
  phone: string;
  username: string;
  birthday: string;
  height: string;
  weight: string;
  eyeColor: string;
};

const DetailsModal: FC<ModalPropsType> = ({ id, isOpen, onClose /*isLoading*/ }) => {
  const [data, setData] = useState<DetailsType>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    DataAPI.getOne(id).then((data) => {
      setIsLoading(false);
      setData(data);
    });
  }, [id]);

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className={styles.overlay}>
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
            <span className={styles.title}>Details information{id}</span>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <span>first name: {data?.firstName}</span>
                <span>last name: {data?.lastName}</span>
                <span>maiden name: {data?.maidenName}</span>
                <span>age: {data?.age}</span>
                <span>email: {data?.email}</span>
                <span>phone: {data?.phone}</span>
                <span>username: {data?.username}</span>
                <span>birthday: {data?.birthday}</span>
                <span>height: {data?.height}</span>
                <span>weight: {data?.weight}</span>
                <span>eye color: {data?.eyeColor}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
