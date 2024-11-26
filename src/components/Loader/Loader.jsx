/* eslint-disable no-unused-vars */
import React from 'react';
import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Audio height="80" width="80" color="gray" ariaLabel="loading" />
  </div>
);

export default Loader;