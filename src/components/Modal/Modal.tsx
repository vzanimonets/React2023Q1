import React, { FC } from 'react';
import styles from './modal.module.css';

type ModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FC<ModalPropsType> = ({ isOpen, onClose }) => {
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
          <p className={styles.close} onClick={onClose}>
            X
          </p>
          <div className={styles.content}>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btnPrimary}>
              <span className={styles.old}>YES</span>
            </button>
            <button className={styles.btnOutline}>
              <span className={styles.bold}>NO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
