import React, { FC } from 'react';
import styles from './spinner.module.css';

const Spinner: FC = () => {
  return <div className={styles.loader} />;
};

export default Spinner;
